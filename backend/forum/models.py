# forum/models.py
from django.db import models
from account.models import User

from django.utils import timezone

class ForumTag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Keyword(models.Model):
    text = models.CharField(max_length=255, unique=True,default="")
    relevance = models.FloatField(default=0.0)  # Relevance score of the keyword
    frequency = models.PositiveIntegerField(default=0)  # Frequency of the keyword
    context = models.TextField(blank=True, null=True,default="")  # Contextual analysis of the keyword

    def __str__(self):
        return self.text
class ForumTopic(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    image = models.URLField(max_length=2000,null=True) 
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    tags = models.ManyToManyField(ForumTag, related_name='topics')

    def __str__(self):
        return self.title

class ForumPost(models.Model):
    topic = models.ForeignKey(ForumTopic, related_name='posts', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    keyword = models.ManyToManyField(Keyword, related_name='forum_keyword', blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
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


class UserBehavior(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="forum_user")  # Assuming you have a User model in your 'account' app
    post = models.ForeignKey(ForumPost, on_delete=models.CASCADE)  # Assuming you have a Post model in your 'post' app
    interaction_type = models.CharField(max_length=20,default="")  # Interaction type: e.g., like, comment, share
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.post.title} - {self.interaction_type}"

