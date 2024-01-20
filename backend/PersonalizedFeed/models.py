# PersonalizedFeed/models.py
from django.db import models
from django.contrib.auth.models import User

class FeedCategory(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class FeedItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(FeedCategory, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Feed item for {self.user.username} created on {self.created_at}"

class UserFeedPreference(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    preferred_categories = models.ManyToManyField(FeedCategory, related_name='preferred_by', blank=True)

    def __str__(self):
        return f"{self.user.username}'s feed preferences"

class FeedComment(models.Model):
    feed_item = models.ForeignKey(FeedItem, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.feed_item.user.username}'s feed"
