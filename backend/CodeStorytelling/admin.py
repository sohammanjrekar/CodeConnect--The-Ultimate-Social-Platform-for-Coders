# CodeStorytelling/admin.py
from django.contrib import admin
from .models import CodeStory, CodeStoryTag, CodeStoryComment, CodeStoryRating

class CodeStoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'last_modified',)
    search_fields = ('title', 'author__username',)
    list_filter = ('created_at', 'last_modified', 'tags',)

class CodeStoryTagAdmin(admin.ModelAdmin):
    list_display = ('name',)

class CodeStoryCommentAdmin(admin.ModelAdmin):
    list_display = ('code_story', 'user', 'content', 'created_at',)
    search_fields = ('code_story__title', 'user__username', 'content',)
    list_filter = ('created_at',)

class CodeStoryRatingAdmin(admin.ModelAdmin):
    list_display = ('user', 'code_story', 'rating',)
    search_fields = ('user__username', 'code_story__title',)
    list_filter = ('rating',)

admin.site.register(CodeStory, CodeStoryAdmin)
admin.site.register(CodeStoryTag, CodeStoryTagAdmin)
admin.site.register(CodeStoryComment, CodeStoryCommentAdmin)
admin.site.register(CodeStoryRating, CodeStoryRatingAdmin)
