# urls.py
from django.urls import path
from .views import ChatMessageListCreateView

urlpatterns = [
    path('chats/', ChatMessageListCreateView.as_view(), name='chats-list-create'),
]
