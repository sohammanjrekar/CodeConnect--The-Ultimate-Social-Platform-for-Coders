from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    programming_languages = models.ManyToManyField('ProgrammingLanguage', related_name='users')

class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50)

class PairProgrammingSession(models.Model):
    participants = models.ManyToManyField(User, related_name='pair_programming_sessions')
    project_name = models.CharField(max_length=200)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True, blank=True)