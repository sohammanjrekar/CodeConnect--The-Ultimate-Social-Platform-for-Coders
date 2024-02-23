# chats/serializers.py
from rest_framework import serializers
from .models import Conversation, ConversationMessage
from account.serializers import UserSerializer  # Assuming UserSerializer is defined in account/serializers.py

class ConversationSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Conversation
        fields = ['id', 'users', 'created_at', 'modified_at']

class ConversationMessageSerializer(serializers.ModelSerializer):
    created_by = UserSerializer()
    sent_to = UserSerializer()

    class Meta:
        model = ConversationMessage
        fields = ['id', 'conversation', 'body', 'sent_to', 'created_at', 'created_by']
