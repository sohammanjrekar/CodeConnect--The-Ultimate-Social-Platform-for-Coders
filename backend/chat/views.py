# views.py
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from .models import Conversation, Message
from .serializers import ConversationListSerializer, MessageSerializer
from account.models import User
from rest_framework.permissions import AllowAny

class SendMessage(generics.CreateAPIView):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user_id = self.kwargs.get('user_id')
        conversation_id = self.kwargs.get('conversation_id')
        conversation = get_object_or_404(Conversation, id=conversation_id)
        sender = get_object_or_404(User, id=user_id)
        serializer.save(conversation=conversation, sender=sender)

class GetMessages(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        conversation_id = self.kwargs.get('conversation_id')
        conversation = get_object_or_404(Conversation, id=conversation_id)
        return conversation.messages.all()

class PreviouslyConnectedUsersList(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ConversationListSerializer

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        user = get_object_or_404(User, id=user_id)
        conversations = Conversation.objects.filter(participants=user)
        connected_users = set()
        for conversation in conversations:
            other_users = conversation.participants.exclude(id=user_id)
            connected_users.update(other_users)
        return connected_users

