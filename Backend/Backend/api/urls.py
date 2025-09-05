from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import TeamViewSet, ChallengeViewSet, ActivityRecordViewSet, UserProfileViewSet, StatsViewSet, WellnessPredictView


router = DefaultRouter()
router.register(r'teams', TeamViewSet, basename='team')
router.register(r'challenges', ChallengeViewSet, basename='challenge')
router.register(r'activities', ActivityRecordViewSet, basename='activity')
router.register(r'profiles', UserProfileViewSet, basename='profile')
router.register(r'stats', StatsViewSet, basename='stats')


urlpatterns = [
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('predict/wellness/', WellnessPredictView.as_view(), name='predict_wellness'),
    path('', include(router.urls)),
]

