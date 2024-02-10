from django.contrib import admin
from .models import Post, Comment

class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'content', 'likes', 'comment_count', 'created_at', 'updated_at')
    list_filter = ('user', 'hashtags')
    search_fields = ('user__username', 'content')
    date_hierarchy = 'created_at'
    readonly_fields = ('comment_count',)

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'post', 'content', 'likes', 'dislikes', 'created_at', 'updated_at')
    list_filter = ('user', 'post', 'hashtags')
    search_fields = ('user__username', 'post__content', 'content')
    date_hierarchy = 'created_at'

admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
