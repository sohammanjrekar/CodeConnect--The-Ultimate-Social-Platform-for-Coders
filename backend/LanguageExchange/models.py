# LanguageExchange/models.py
from django.db import models
from django.contrib.auth.models import User

class LanguageExchangeProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    is_available = models.BooleanField(default=True)
    programming_languages = models.ManyToManyField('ProgrammingLanguage', related_name='language_exchange_profiles', blank=True)
    communication_methods = models.ManyToManyField('CommunicationMethod', related_name='language_exchange_profiles', blank=True)
    availability_times = models.ManyToManyField('AvailabilityTime', related_name='language_exchange_profiles', blank=True)
    collaboration_interests = models.ManyToManyField('CollaborationInterest', related_name='language_exchange_profiles', blank=True)
    projects_collaborated = models.ManyToManyField('CollaboratedProject', related_name='language_exchange_profiles', blank=True)
    teaching_languages = models.ManyToManyField('ProgrammingLanguage', through='LanguageTeaching', related_name='language_teachers', blank=True)
    learning_languages = models.ManyToManyField('ProgrammingLanguage', through='LanguageTeaching', related_name='language_learners', blank=True)

    def __str__(self):
        return f"Language Exchange profile for {self.user.username}"

class LanguageTeaching(models.Model):
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name='teaching_languages')
    learner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='learning_languages')
    language = models.ForeignKey('ProgrammingLanguage', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.teacher.username} teaches {self.learner.username} {self.language.name}"

# Existing models remain unchanged

class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class CommunicationMethod(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class AvailabilityTime(models.Model):
    day = models.CharField(max_length=20)
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f"{self.day} {self.start_time.strftime('%H:%M')} - {self.end_time.strftime('%H:%M')}"

class CollaborationInterest(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class CollaboratedProject(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    collaborators = models.ManyToManyField(User, related_name='collaborated_projects', blank=True)

    def __str__(self):
        return self.name
