# PersonalizedFeed/admin.py
from django.contrib import admin
from .models import FeedCategory, FeedItem, UserFeedPreference, FeedComment

class FeedCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

class FeedItemAdmin(admin.ModelAdmin):
    list_display = ('user', 'content', 'created_at', 'category',)
    search_fields = ('user__username', 'content',)
    list_filter = ('created_at', 'category',)

class UserFeedPreferenceAdmin(admin.ModelAdmin):
    list_display = ('user', 'get_preferred_categories',)
    search_fields = ('user__username',)

    def get_preferred_categories(self, obj):
        return ", ".join([category.name for category in obj.preferred_categories.all()])

class FeedCommentAdmin(admin.ModelAdmin):
    list_display = ('feed_item', 'user', 'content', 'created_at',)
    search_fields = ('feed_item__user__username', 'user__username', 'content',)
    list_filter = ('created_at',)

admin.site.register(FeedCategory, FeedCategoryAdmin)
admin.site.register(FeedItem, FeedItemAdmin)
admin.site.register(UserFeedPreference, UserFeedPreferenceAdmin)
admin.site.register(FeedComment, FeedCommentAdmin)
