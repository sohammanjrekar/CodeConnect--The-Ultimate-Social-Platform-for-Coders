# serializers.py
from rest_framework import serializers
from .models import Conversation, Message
from account.models import User

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'body', 'timestamp']

class MessageWithSequenceDetailSerializer(MessageSerializer):
    sender = serializers.SerializerMethodField()

    def get_sender(self, obj):
        return obj.sender.username


class ConversationListSerializer(serializers.ModelSerializer):
    participants = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Conversation
        fields = ['id', 'participants']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        participants = instance.participants.all()
        data['participants'] = [participant.id for participant in participants]
        data['conversation_id'] = instance.id  # Include conversation ID
        return data
