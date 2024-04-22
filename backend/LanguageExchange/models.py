# LanguageExchange/models.py
from django.db import models
from account.models import User


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
    learning_languages = models.ManyToManyField('ProgrammingLanguage', through='LanguageTeaching', related_name='learning_profiles', through_fields=('learner_profile', 'language'))
    teaching_languages = models.ManyToManyField('ProgrammingLanguage', through='LanguageTeaching', related_name='teaching_profiles', through_fields=('teacher_profile', 'language'))
   
    def __str__(self):
        return f"Language Exchange profile for {self.user.username}"

# LanguageExchange/models.py
# LanguageExchange/models.py

class LanguageTeaching(models.Model):
    teacher_profile = models.ForeignKey(LanguageExchangeProfile, on_delete=models.CASCADE, related_name='teaching_languages_as_teacher')
    learner_profile = models.ForeignKey(LanguageExchangeProfile, on_delete=models.CASCADE, related_name='learning_languages_as_learner')
    language = models.ForeignKey('ProgrammingLanguage', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.teacher_profile.user.username} teaches {self.learner_profile.user.username} {self.language.name}"

    class Meta:
        unique_together = ('teacher_profile', 'learner_profile', 'language')


class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class CommunicationPlatform(models.Model):
    name = models.CharField(max_length=100, unique=True,default="")

    def __str__(self):
        return self.name
class CommunicationMethod(models.Model):
    platform = models.ForeignKey(CommunicationPlatform, on_delete=models.CASCADE,default="")
    user_profile = models.ForeignKey(User, on_delete=models.CASCADE,default="")
    detail = models.CharField(max_length=255 ,default="")
    is_primary = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user_profile.name}: {self.platform.name} - {self.detail}"

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
    githublink = models.TextField(default="")
    collaborators = models.ManyToManyField(User, related_name='language_exchange_collaborated_projects')
    
   
    def __str__(self):
        return self.name
