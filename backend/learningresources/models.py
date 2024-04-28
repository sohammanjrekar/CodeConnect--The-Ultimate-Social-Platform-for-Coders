# LearningResources/models.py
from django.db import models
from account.models import User


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

class Keyword(models.Model):
    text = models.CharField(max_length=255, unique=True,default="")
    relevance = models.FloatField(default=0.0)  # Relevance score of the keyword
    frequency = models.PositiveIntegerField(default=0)  # Frequency of the keyword
    context = models.TextField(blank=True, null=True,default="")  # Contextual analysis of the keyword

    def __str__(self):
        return self.text
    
class LearningResource(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    keyword = models.ManyToManyField(Keyword, related_name='learning_keyword', blank=True)
    file =models.URLField(max_length=2000,null=True) 
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


class UserBehavior(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="learninguser")  # Assuming you have a User model in your 'account' app
    post = models.ForeignKey(LearningResource, on_delete=models.CASCADE)  # Assuming you have a Post model in your 'post' app
    interaction_type = models.CharField(max_length=20,default="")  # Interaction type: e.g., like, comment, share
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.post.title} - {self.interaction_type}"


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='learningresource_comments')
    resource = models.ForeignKey(LearningResource, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.resource.title}"
