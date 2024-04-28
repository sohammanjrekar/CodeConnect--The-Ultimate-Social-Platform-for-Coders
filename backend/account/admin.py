from django.contrib import admin
from .models import User, UserKeyword, ProgrammingLanguage, Friendship

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_active', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    list_filter = ('is_active', 'is_staff', 'groups', 'user_permissions')
    filter_horizontal = ('Keyword', 'ProgrammingLanguage', 'Friendship')


@admin.register(ProgrammingLanguage)
class ProgrammingLanguageAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at', 'is_active')
    search_fields = ('name',)
    list_filter = ('is_active',)

@admin.register(Friendship)
class FriendshipAdmin(admin.ModelAdmin):
    list_display = ('created_for', 'created_at', 'created_by', 'status')
    search_fields = ('created_for__email', 'created_by__email', 'status')
    list_filter = ('status',)
