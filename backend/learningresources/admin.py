# LearningResources/admin.py
from django.contrib import admin
from .models import LearningResource, Tag, Comment

admin.site.register(LearningResource)
admin.site.register(Tag)
admin.site.register(Comment)
