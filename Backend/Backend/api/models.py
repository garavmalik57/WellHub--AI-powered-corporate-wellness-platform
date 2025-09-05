from django.db import models
from django.contrib.auth.models import User


class Team(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, blank=True)

    def __str__(self) -> str:
        return self.name


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    team = models.ForeignKey(Team, on_delete=models.SET_NULL, null=True, blank=True, related_name='members')
    device_provider = models.CharField(max_length=100, blank=True)  # e.g., Fitbit, Apple, Google
    device_access_token = models.CharField(max_length=512, blank=True)
    device_refresh_token = models.CharField(max_length=512, blank=True)
    device_account_id = models.CharField(max_length=255, blank=True)

    def __str__(self) -> str:
        return f"Profile({self.user.username})"


class Challenge(models.Model):
    CHALLENGE_TYPE_CHOICES = (
        ('steps', 'Steps'),
        ('calories', 'Calories'),
        ('distance', 'Distance'),
        ('active_minutes', 'Active Minutes'),
    )

    name = models.CharField(max_length=255)
    challenge_type = models.CharField(max_length=50, choices=CHALLENGE_TYPE_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    rules = models.TextField(blank=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='challenges', null=True, blank=True)

    def __str__(self) -> str:
        return f"{self.name} ({self.challenge_type})"


class ActivityRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activity_records')
    date = models.DateField()
    steps = models.PositiveIntegerField(default=0)
    calories = models.PositiveIntegerField(default=0)
    distance_km = models.FloatField(default=0.0)
    active_minutes = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('user', 'date')
        ordering = ['-date']

    def __str__(self) -> str:
        return f"{self.user.username} - {self.date}"

# Create your models here.
