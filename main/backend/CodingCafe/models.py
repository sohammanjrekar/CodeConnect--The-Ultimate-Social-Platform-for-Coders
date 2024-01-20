from django.db import models

class CodingCafeSession(models.Model):
    topic = models.CharField(max_length=200)
    scheduled_time = models.DateTimeField()
    participants = models.ManyToManyField('User', related_name='coding_cafe_sessions')

class User(models.Model):
    username = models.CharField(max_length=100)
    coding_languages = models.ManyToManyField('CodingLanguage', related_name='enthusiasts')

class CodingLanguage(models.Model):
    name = models.CharField(max_length=50)
