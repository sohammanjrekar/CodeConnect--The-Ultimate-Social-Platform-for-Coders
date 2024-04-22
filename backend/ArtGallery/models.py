# artgallery/models.py
from django.db import models
from account.models import User


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class DesignerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    portfolio_link = models.URLField(blank=True, null=True)
    followers = models.ManyToManyField(User, related_name='following', blank=True)

    def __str__(self):
        return f"Designer Profile for {self.user.username}"

class Gallery(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    tags = models.ManyToManyField(Tag, related_name='galleries', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    banner=models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.title

class Image(models.Model):
    gallery = models.ForeignKey(Gallery, on_delete=models.CASCADE, related_name='images')
    image = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    designer = models.ForeignKey(DesignerProfile, on_delete=models.CASCADE, related_name='img_desinger')


    def __str__(self):
        return f"Image in {self.gallery.title}"

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='artgallery_comments')
    image = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.image}"


class ContactRequest(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_contact_requests')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_contact_requests')
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    is_accepted = models.BooleanField(default=False)

    def __str__(self):
        return f"Contact Request from {self.sender.username} to {self.receiver.username}"
