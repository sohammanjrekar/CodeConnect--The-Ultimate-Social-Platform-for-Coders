from django.urls import path
from .views import fetch_conversations, fetch_messages, create_conversation, send_message

urlpatterns = [
    path('conversations/', fetch_conversations, name='fetch_conversations'),
    path('conversations/<uuid:conversation_id>/', fetch_messages, name='fetch_messages'),
    path('conversations/create/', create_conversation, name='create_conversation'),
    path('conversations/<uuid:conversation_id>/send/', send_message, name='send_message'),
    # Add more URL patterns as needed
]
