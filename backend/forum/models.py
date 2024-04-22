# forum/models.py
from django.db import models
from account.models import User

from django.utils import timezone

class ForumTag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class ForumTopic(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    tags = models.ManyToManyField(ForumTag, related_name='topics')

    def __str__(self):
        return self.title

class ForumPost(models.Model):
    topic = models.ForeignKey(ForumTopic, related_name='posts', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    likes = models.ManyToManyField(User, related_name='liked_forum_posts', blank=True)
    parent_post = models.ForeignKey('self', null=True, blank=True, related_name='replies_to_parent_post', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"Post by {self.author.username} in {self.topic.title}"

class ForumReply(models.Model):
    post = models.ForeignKey(ForumPost, related_name='replies_to_post', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    likes = models.ManyToManyField(User, related_name='liked_forum_replies', blank=True)

    def __str__(self):
        return f"Reply by {self.author.username} to {self.post.author.username}'s post"
