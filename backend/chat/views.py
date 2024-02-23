# chats/views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from account.models import User
from .models import Conversation, ConversationMessage
from .serializers import ConversationSerializer, ConversationMessageSerializer

@api_view(['GET'])
def fetch_conversations(request):
    conversations = Conversation.objects.all()
    serializer = ConversationSerializer(conversations, many=True)
    return JsonResponse({'conversations': serializer.data}, status=200)

@api_view(['GET'])
def fetch_messages(request, conversation_id):
    conversation = get_object_or_404(Conversation, id=conversation_id)
    messages = conversation.messages.order_by('created_at')
    serializer = ConversationMessageSerializer(messages, many=True)
    return JsonResponse({'messages': serializer.data}, status=200)

@api_view(['POST'])
def create_conversation(request):
    user_ids = request.data.get('user_ids', [])
    users = User.objects.filter(id__in=user_ids)
    if len(users) == len(user_ids):
        conversation = Conversation.objects.create()
        conversation.users.set(users)
        serializer = ConversationSerializer(conversation)
        return JsonResponse({'conversation': serializer.data}, status=201)
    return JsonResponse({'error': 'Invalid user IDs'}, status=400)

@api_view(['POST'])
def send_message(request, conversation_id):
    conversation = get_object_or_404(Conversation, id=conversation_id)
    sent_by_user = request.data.get('sent_by_user')
    body = request.data.get('body')
    
    if sent_by_user and body:
        sent_by_user = get_object_or_404(User, id=sent_by_user)
        message = ConversationMessage.objects.create(conversation=conversation, body=body,
                                                     sent_to=conversation.users.exclude(id=sent_by_user.id).first(),
                                                     created_by=sent_by_user)
        serializer = ConversationMessageSerializer(message)
        return JsonResponse({'message': serializer.data}, status=201)
    
    return JsonResponse({'error': 'Invalid data'}, status=400)
