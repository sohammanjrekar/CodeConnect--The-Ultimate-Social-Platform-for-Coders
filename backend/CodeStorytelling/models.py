# CodeStorytelling/models.py
from django.db import models
from django.contrib.auth.models import User

class CodeStoryTag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class CodeStory(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    code_snippet = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField(User, related_name='liked_code_stories', blank=True)
    tags = models.ManyToManyField(CodeStoryTag, related_name='code_stories', blank=True)
    comments = models.ManyToManyField(User, through='CodeStoryComment', related_name='commented_code_stories', blank=True)
    view_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Code Story - {self.title} by {self.author.username}"

class CodeStoryComment(models.Model):
    code_story = models.ForeignKey(CodeStory, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.code_story.title}"

class CodeStoryRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code_story = models.ForeignKey(CodeStory, on_delete=models.CASCADE)
    rating_choices = [
        (1, 'Not helpful'),
        (2, 'Somewhat helpful'),
        (3, 'Helpful'),
        (4, 'Very helpful'),
        (5, 'Extremely helpful'),
    ]
    rating = models.IntegerField(choices=rating_choices)

    def __str__(self):
        return f"{self.user.username}'s rating for {self.code_story.title}: {self.get_rating_display()}"
