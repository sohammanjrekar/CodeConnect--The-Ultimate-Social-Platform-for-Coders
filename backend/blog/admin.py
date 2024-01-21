# blog/admin.py
from django.contrib import admin
from .models import Comment

class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'content', 'created_at')

admin.site.register(Comment, CommentAdmin)
