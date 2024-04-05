from django.contrib import admin
from .models import Conversation, ConversationMessage

@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'modified_at_formatted',)
    search_fields = ('id',)
    readonly_fields = ('id', 'created_at', 'modified_at',)
    filter_horizontal = ('users',)

@admin.register(ConversationMessage)
class ConversationMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'conversation', 'sender', 'recipient', 'created_at', 'created_at_formatted',)
    search_fields = ('id', 'conversation__id',)
    readonly_fields = ('id', 'created_at',)
    list_filter = ('conversation',)
