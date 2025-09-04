from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Team, Challenge, ActivityRecord, UserProfile


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'location']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'team', 'device_provider']


class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = ['id', 'name', 'challenge_type', 'start_date', 'end_date', 'rules', 'team']


class ActivityRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityRecord
        fields = ['id', 'user', 'date', 'steps', 'calories', 'distance_km', 'active_minutes']

