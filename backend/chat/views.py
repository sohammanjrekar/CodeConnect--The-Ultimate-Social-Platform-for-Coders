# views.py
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from .models import Conversation, Message
from .serializers import ConversationListSerializer, MessageSerializer
from account.models import User
import pusher
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes

pusher_client = pusher.Pusher(
    app_id = "1789564",
key = "26812a12625161ccf9dd",
secret = "8a2c23108dbf9359d39c",
cluster = "ap2",
ssl=True
)
from django.db.models import F
from rest_framework.response import Response

from django.db.models import F
from django.db.models import F
from rest_framework.response import Response
from django.db.models import F
from rest_framework.response import Response
from django.db.models import F
from rest_framework.response import Response
from rest_framework.response import Response
import logging

logger = logging.getLogger(__name__)

@authentication_classes([])
@permission_classes([AllowAny])
class SendMessage(generics.CreateAPIView):
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        user_id = self.kwargs.get('user_id')
        conversation_id = self.kwargs.get('conversation_id')
        conversation = get_object_or_404(Conversation, id=conversation_id)
        sender = get_object_or_404(User, id=user_id)
        serializer.save(conversation=conversation, sender=sender)

        # Retrieve all messages associated with the conversation
        messages = conversation.messages.order_by(F('timestamp').asc())

        # Serialize the messages and return them as a response
        serialized_messages = MessageSerializer(messages, many=True)
        return Response(serialized_messages.data)


@authentication_classes([])
@permission_classes([AllowAny])
class GetMessages(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        conversation_id = self.kwargs.get('conversation_id')
        conversation = get_object_or_404(Conversation, id=conversation_id)
        
        # Retrieve messages in the latest-first order
        queryset = conversation.messages.order_by(F('timestamp').asc())
        
        return queryset

class PreviouslyConnectedUsersList(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ConversationListSerializer

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        user = get_object_or_404(User, id=user_id)
        
        # Fetch all conversations involving the given user
        conversations = Conversation.objects.filter(participants=user)
        
        return conversations
    

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CreateConversation(APIView):
    permission_classes = [AllowAny]  # You can adjust permissions as needed

    def post(self, request, *args, **kwargs):
        # Get user IDs from URL parameters
        user_id_1 = kwargs.get('user1_id')
        user_id_2 = kwargs.get('user2_id')

        # Retrieve user instances from IDs
        user1 = get_object_or_404(User, id=user_id_1)
        user2 = get_object_or_404(User, id=user_id_2)

        # Check if a conversation already exists between the two users
        existing_conversation = Conversation.objects.filter(participants=user1).filter(participants=user2).first()

        if existing_conversation:
            # If a conversation already exists, return its ID
            return Response({'conversation_id': existing_conversation.id}, status=status.HTTP_200_OK)
        else:
            # If no conversation exists, create a new conversation and return its ID
            new_conversation = Conversation.objects.create()
            new_conversation.participants.add(user1, user2)
            return Response({'conversation_id': new_conversation.id}, status=status.HTTP_201_CREATED)