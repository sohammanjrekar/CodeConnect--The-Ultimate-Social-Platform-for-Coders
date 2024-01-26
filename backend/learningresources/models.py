# LearningResources/models.py
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class LearningResource(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    file = models.FileField(upload_to='learning_resources/', blank=True, null=True)
    categories = models.ManyToManyField(Category, related_name='learning_resources')
    tags = models.ManyToManyField('Tag', related_name='learning_resources')
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

class Tag(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    resource = models.ForeignKey(LearningResource, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.resource.title}"
