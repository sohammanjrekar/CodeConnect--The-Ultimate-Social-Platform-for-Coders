# forum/admin.py
from django.contrib import admin
from .models import ForumTag, ForumTopic, ForumPost, ForumReply

class ForumTagAdmin(admin.ModelAdmin):
    list_display = ('name',)

class ForumTopicAdmin(admin.ModelAdmin):
    list_display = ('title', 'creator', 'created_at',)
    search_fields = ('title', 'creator__username',)
    filter_horizontal = ('tags',)

class ForumPostAdmin(admin.ModelAdmin):
    list_display = ('topic', 'author', 'created_at',)
    search_fields = ('topic__title', 'author__username',)
    list_filter = ('created_at', 'likes',)
    filter_horizontal = ('likes',)

class ForumReplyAdmin(admin.ModelAdmin):
    list_display = ('post', 'author', 'created_at',)
    search_fields = ('post__topic__title', 'author__username',)
    list_filter = ('created_at', 'likes',)
    filter_horizontal = ('likes',)

admin.site.register(ForumTag, ForumTagAdmin)
admin.site.register(ForumTopic, ForumTopicAdmin)
admin.site.register(ForumPost, ForumPostAdmin)
admin.site.register(ForumReply, ForumReplyAdmin)

