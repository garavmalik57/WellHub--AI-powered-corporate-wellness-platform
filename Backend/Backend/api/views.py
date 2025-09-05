from datetime import date

from django.db.models import Sum
from django.contrib.auth.models import User
from rest_framework import permissions, viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings

# Import the model aggregator from datasprint_model
try:
    from datasprint_model.api import aggregate_daily as aggregate_daily_model
except Exception:  # pragma: no cover - if module missing, handle at runtime
    aggregate_daily_model = None

from .models import Team, Challenge, ActivityRecord, UserProfile
from .serializers import TeamSerializer, ChallengeSerializer, ActivityRecordSerializer, UserProfileSerializer, UserSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated]


class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer
    permission_classes = [permissions.IsAuthenticated]


class ActivityRecordViewSet(viewsets.ModelViewSet):
    queryset = ActivityRecord.objects.all()
    serializer_class = ActivityRecordSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.select_related('user').all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]


class StatsViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['get'])
    def me(self, request):
        user = request.user
        qs = ActivityRecord.objects.filter(user=user)
        totals = qs.aggregate(
            total_steps=Sum('steps'),
            total_calories=Sum('calories'),
            total_distance_km=Sum('distance_km'),
            total_active_minutes=Sum('active_minutes'),
        )
        today = date.today()
        today_rec = qs.filter(date=today).first()
        return Response({
            'user': UserSerializer(user).data,
            'today': ActivityRecordSerializer(today_rec).data if today_rec else None,
            'totals': totals,
        })

    @action(detail=False, methods=['get'])
    def leaderboard(self, request):
        scope = request.query_params.get('scope', 'global')  # global | team | location
        queryset = ActivityRecord.objects

        if scope == 'team' and hasattr(request.user, 'profile') and request.user.profile.team_id:
            team_member_ids = User.objects.filter(profile__team_id=request.user.profile.team_id).values_list('id', flat=True)
            queryset = queryset.filter(user_id__in=team_member_ids)
        elif scope == 'location' and hasattr(request.user, 'profile') and request.user.profile.team and request.user.profile.team.location:
            location = request.user.profile.team.location
            team_ids = Team.objects.filter(location=location).values_list('id', flat=True)
            member_ids = User.objects.filter(profile__team_id__in=team_ids).values_list('id', flat=True)
            queryset = queryset.filter(user_id__in=member_ids)

        totals = queryset.values('user_id').annotate(total_steps=Sum('steps')).order_by('-total_steps')[:50]
        users = {u.id: u for u in User.objects.filter(id__in=[t['user_id'] for t in totals])}
        data = [
            {
                'user': UserSerializer(users[t['user_id']]).data,
                'total_steps': t['total_steps'] or 0,
            }
            for t in totals
        ]
        return Response(data)

class WellnessPredictView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        api_key_header = request.headers.get('X-API-Key') or request.META.get('HTTP_X_API_KEY')
        required_key = getattr(settings, 'MODEL_API_KEY', '')
        if not required_key:
            return Response({'detail': 'Server missing MODEL_API_KEY configuration'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if api_key_header != required_key:
            return Response({'detail': 'Invalid API key'}, status=status.HTTP_401_UNAUTHORIZED)

        if aggregate_daily_model is None:
            return Response({'detail': 'Model module not available'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        payload = request.data or {}
        activities = payload.get('activities', [])
        sleep = payload.get('sleep', [])
        hydration_ratio = payload.get('hydration_ratio')
        journaling_sentiment = payload.get('journaling_sentiment')

        result = aggregate_daily_model(activities, sleep, hydration_ratio, journaling_sentiment)
        if result is None:
            return Response({'detail': 'Missing activity or sleep data'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(result, status=status.HTTP_200_OK)
