from django.contrib import admin
from .models import Team, UserProfile, Challenge, ActivityRecord


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'location')


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'team', 'device_provider')


@admin.register(Challenge)
class ChallengeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'challenge_type', 'start_date', 'end_date', 'team')


@admin.register(ActivityRecord)
class ActivityRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'date', 'steps', 'calories', 'distance_km', 'active_minutes')

# Register your models here.
