from rest_framework import serializers
from .models import Conversation, Message
from account.models import User

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'body', 'timestamp']

class MessageDetailSerializer(MessageSerializer):
    sender = serializers.SerializerMethodField()

    def get_sender(self, obj):
        return obj.sender.username

class ConversationDetailSerializer(serializers.ModelSerializer):
    messages = MessageDetailSerializer(many=True, read_only=True)

    class Meta:
        model = Conversation
        fields = ['id', 'participants', 'messages']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['participants'] = [participant.username for participant in instance.participants.all()]
        return data

class ConversationListSerializer(serializers.ModelSerializer):
    participants = serializers.StringRelatedField(many=True)

    class Meta:
        model = Conversation
        fields = ['id', 'participants']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Access participants from the Conversation model
        participants = instance.participants.all()
        data['participants'] = [participant.username for participant in participants]
        return data

