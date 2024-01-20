# models.py
from django.db import models

class DiscussionTopic(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
class DiscussionPost(models.Model):
    topic = models.ForeignKey(DiscussionTopic, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming User model exists
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
