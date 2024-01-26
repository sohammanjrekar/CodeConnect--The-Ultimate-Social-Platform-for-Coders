# search/admin.py
from django.contrib import admin
from .models import UserSearchHistory
class UserSearchHistoryAdmin(admin.ModelAdmin):
    list_display = ('user', 'query', 'timestamp',)
    search_fields = ('user__username', 'query',)
admin.site.register(UserSearchHistory, UserSearchHistoryAdmin)
