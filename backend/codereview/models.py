from django.db import models
from django.contrib.auth.models import User

class CodeReview(models.Model):
    title = models.CharField(max_length=200)
    code = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_authored')
    reviewers = models.ManyToManyField(User, related_name='reviews_assigned')
    comments = models.TextField(blank=True)
    rating = models.PositiveIntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class UserPoints(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.PositiveIntegerField(default=0)
