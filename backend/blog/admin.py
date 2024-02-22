# blog/admin.py
from django.contrib import admin
from .models import Category, Tag, BlogPost, Comment

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')

admin.site.register(Category, CategoryAdmin)

class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')

admin.site.register(Tag, TagAdmin)

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'updated_at', 'is_published')
    prepopulated_fields = {'slug': ('title',)}  # Automatically populate slug based on title

admin.site.register(BlogPost, BlogPostAdmin)

class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'content', 'created_at')

admin.site.register(Comment, CommentAdmin)
