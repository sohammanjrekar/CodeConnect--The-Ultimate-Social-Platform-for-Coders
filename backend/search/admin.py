# search/admin.py
from django.contrib import admin
from .models import SearchResult, UserSearchHistory, SearchResultRating, UserSearchPreference

class SearchResultAdmin(admin.ModelAdmin):
    list_display = ('query',)

class UserSearchHistoryAdmin(admin.ModelAdmin):
    list_display = ('user', 'query', 'timestamp',)
    search_fields = ('user__username', 'query',)

class SearchResultRatingAdmin(admin.ModelAdmin):
    list_display = ('user', 'result', 'rating',)
    search_fields = ('user__username', 'result__query',)

class UserSearchPreferenceAdmin(admin.ModelAdmin):
    list_display = ('user', 'favorite_query', 'preferred_category',)
    search_fields = ('user__username', 'favorite_query', 'preferred_category',)

admin.site.register(SearchResult, SearchResultAdmin)
admin.site.register(UserSearchHistory, UserSearchHistoryAdmin)
admin.site.register(SearchResultRating, SearchResultRatingAdmin)
admin.site.register(UserSearchPreference, UserSearchPreferenceAdmin)
