# codingchallenges/models.py
from django.db import models
from django.contrib.auth.models import User

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class TestCase(models.Model):
    input_data = models.TextField()
    expected_output = models.TextField()

    def __str__(self):
        return f"Input: {self.input_data}, Expected Output: {self.expected_output}"

class Badge(models.Model):
    name = models.CharField(max_length=50, unique=True)
    points_required = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class CodingChallenge(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    difficulty_choices = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]
    difficulty = models.CharField(max_length=10, choices=difficulty_choices)
    language = models.CharField(max_length=50)
    tags = models.ManyToManyField(Tag, related_name='coding_challenges', blank=True)
    test_cases = models.ManyToManyField(TestCase, related_name='coding_challenge', blank=True)
    solution = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    points = models.PositiveIntegerField()
    winners = models.ManyToManyField(User, related_name='won_coding_challenges', blank=True)
    badges = models.ManyToManyField(Badge, related_name='coding_challenges', blank=True)

    def __str__(self):
        return self.title

    def award_points(self, user):
        # Award points based on difficulty
        if self.difficulty == 'easy':
            points_awarded = 5
        elif self.difficulty == 'medium':
            points_awarded = 10
        elif self.difficulty == 'hard':
            points_awarded = 20

        # Increase user's points and check for rank upgrade
        user_profile = user.profile  # Assuming you have a user profile model
        user_profile.points += points_awarded
        user_profile.save()

        # Check for rank upgrade and award badges
        self.check_rank_and_badges(user_profile)

        return points_awarded

    def check_rank_and_badges(self, user_profile):
        # Check for rank upgrade
        if user_profile.points >= 200:
            user_profile.rank = 'gold'
        elif user_profile.points >= 100:
            user_profile.rank = 'silver'
        elif user_profile.points >= 50:
            user_profile.rank = 'bronze'

        # Check for badge awards
        for badge in Badge.objects.all():
            if user_profile.points >= badge.points_required and badge not in user_profile.badges.all():
                user_profile.badges.add(badge)
