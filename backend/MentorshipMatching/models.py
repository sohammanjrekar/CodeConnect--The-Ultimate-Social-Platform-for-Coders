# MentorshipMatching/models.py
from django.db import models
from account.models import User

class MentorshipProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    expertise = models.TextField()
    availability = models.CharField(max_length=100, help_text="E.g., Weekdays evenings")
    mentees = models.ManyToManyField(User, related_name='mentored_by', blank=True)
    accepted_mentees = models.ManyToManyField(User, related_name='accepted_by_mentor', blank=True)
    feedback = models.TextField(blank=True)
    shared_resources = models.ManyToManyField('SharedResource', related_name='mentorship_profiles', blank=True)
    contact_methods = models.ManyToManyField('ContactMethod', related_name='mentorship_profiles', blank=True)
    comments = models.ManyToManyField('MentorComment', related_name='mentorship_profiles', blank=True)
    total_stars = models.PositiveIntegerField(default=0)
    total_ratings = models.PositiveIntegerField(default=0)

    def average_rating(self):
        if self.total_ratings == 0:
            return 0
        return self.total_stars / self.total_ratings

    def __str__(self):
        return f"Mentorship profile for {self.user.username}"


class SharedResource(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shared_resources_sent')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shared_resources_received')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Shared Resource: {self.title} ({self.sender.username} to {self.receiver.username})"

class ResourceFile(models.Model):
    resource = models.ForeignKey(SharedResource, on_delete=models.CASCADE, related_name='files')
    file = models.FileField(upload_to='shared_resources_files')

    def __str__(self):
        return f"File for Shared Resource: {self.resource.title}"


class ContactMethod(models.Model):
    method = models.CharField(max_length=50, choices=[
        ('email', 'Email'),
        ('phone', 'Phone'),
        ('chat', 'Chat'),
        ('video_call', 'Video Call'),
    ])
    value = models.CharField(max_length=255)
    mentor = models.ForeignKey(MentorshipProfile, on_delete=models.CASCADE, related_name='contact_methods_mentor')

    def __str__(self):
        return f"{self.get_method_display()}: {self.value}"

class MentorComment(models.Model):
    mentee = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    mentor = models.ForeignKey(MentorshipProfile, on_delete=models.CASCADE, related_name='comments_mentor')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.mentee.username} on {self.mentor.user.username}"
