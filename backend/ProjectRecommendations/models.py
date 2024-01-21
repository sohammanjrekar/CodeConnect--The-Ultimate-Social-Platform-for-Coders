# projectrecommendation/models.py
from django.db import models
from django.contrib.auth.models import User

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

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projectrecommendations_projects')
    title = models.CharField(max_length=255)
    description = models.TextField()
    github_link = models.URLField()
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
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
