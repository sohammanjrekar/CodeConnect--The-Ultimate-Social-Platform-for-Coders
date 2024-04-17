from django.contrib import admin
from .models import Conversation, Message

@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    list_display = ['id', 'get_participants']

    def get_participants(self, obj):
        return ", ".join([str(participant) for participant in obj.participants.all()])
    get_participants.short_description = 'Participants'

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ['id', 'conversation', 'sender', 'body', 'timestamp']
    list_filter = ['conversation', 'sender']
    search_fields = ['conversation__id', 'sender__username', 'body']
