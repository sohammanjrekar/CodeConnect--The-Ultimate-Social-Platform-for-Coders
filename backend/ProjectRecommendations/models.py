# projectrecommendation/models.py
from django.db import models
from account.models import User


class Keyword(models.Model):
    text = models.CharField(max_length=255, unique=True,default="")
    relevance = models.FloatField(default=0.0)  # Relevance score of the keyword
    frequency = models.PositiveIntegerField(default=0)  # Frequency of the keyword
    context = models.TextField(blank=True, null=True,default="")  # Contextual analysis of the keyword

    def __str__(self):
        return self.text
class Project(models.Model):
    DIFFICULTY_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]

    DOMAIN_CHOICES = [
        ('web', 'Web Development'),
        ('mobile', 'Mobile App Development'),
        ('data', 'Data Science'),
        ('ai', 'Artificial Intelligence'),
        ('iot', 'Internet of Things'),
        ('other', 'Other'),
    ]
    keyword = models.ManyToManyField(Keyword, related_name='project_keyword', blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projectrecommendations_projects')
    title = models.CharField(max_length=255)
    description = models.TextField()
    github_link = models.URLField(max_length=2000,null=True) 
    image = models.URLField(max_length=2000,null=True) 
    languages = models.ManyToManyField('ProgrammingLanguage', related_name='projects', blank=True)
    tools = models.ManyToManyField('Tool', related_name='projects', blank=True)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES, default='medium')
    domain = models.CharField(max_length=20, choices=DOMAIN_CHOICES, default='other')
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    rating = models.FloatField(default=0.0)
    tags = models.ManyToManyField('Tag', related_name='projects', blank=True)

    def __str__(self):
        return self.title

class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Tool(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class UserBehavior(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="project_user")
    project = models.ForeignKey(Project, on_delete=models.CASCADE)  # ForeignKey to the Project model
    interaction_type = models.CharField(max_length=20,default="")
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.project.title} - {self.interaction_type}"

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='comments_project')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.project.title}"
    
