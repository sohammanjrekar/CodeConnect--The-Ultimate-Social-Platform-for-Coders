# MentorshipMatching/admin.py
from django.contrib import admin
from .models import MentorshipProfile, SharedResource, ContactMethod, MentorComment

admin.site.register(MentorshipProfile)
admin.site.register(SharedResource)
admin.site.register(ContactMethod)
admin.site.register(MentorComment)
