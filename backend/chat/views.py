from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Conversation, Message
from .serializers import MessageSerializer
from account.models import User

@api_view(['POST'])
def send_message(request, conversation_id):
    conversation = get_object_or_404(Conversation, id=conversation_id)
    sender = request.user
    body = request.data.get('body')
    
    if body:
        message = Message.objects.create(conversation=conversation, sender=sender, body=body)
        serializer = MessageSerializer(message)
        return JsonResponse(serializer.data, status=201)
    
    return JsonResponse({'error': 'Message body cannot be empty'}, status=400)

@api_view(['GET'])
def get_messages(request, conversation_id):
    conversation = get_object_or_404(Conversation, id=conversation_id)
    messages = conversation.messages.all()
    serializer = MessageSerializer(messages, many=True)
    return JsonResponse(serializer.data, safe=False)


def search_users(request):
    username = request.GET.get('username', '')
    if username:
        users = User.objects.filter(username__icontains=username)
        data = [{'id': user.id, 'username': user.username} for user in users]
        return JsonResponse({'users': data})
    else:
        return JsonResponse({'error': 'No username provided'})

def previously_connected_users(request):
    user_id = request.GET.get('user_id', '')
    if user_id:
        user = User.objects.get(id=user_id)
        conversations = Conversation.objects.filter(participants=user)
        connected_users = []
        for conversation in conversations:
            other_users = conversation.participants.exclude(id=user_id)
            for other_user in other_users:
                if other_user not in connected_users:
                    connected_users.append(other_user)
        data = [{'id': user.id, 'username': user.username} for user in connected_users]
        return JsonResponse({'connected_users': data})
    else:
        return JsonResponse({'error': 'No user ID provided'})