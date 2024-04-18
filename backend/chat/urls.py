# urls.py
from django.urls import path
from chat.views import SendMessage, GetMessages, PreviouslyConnectedUsersList

urlpatterns = [
    path('conversations/<int:user_id>/<uuid:conversation_id>/send/', SendMessage.as_view(), name='send_message'),
    path('conversations/<int:user_id>/<uuid:conversation_id>/messages/', GetMessages.as_view(), name='get_messages'),
    path('previously-connected/<int:user_id>/', PreviouslyConnectedUsersList.as_view(), name='previously_connected_users'),
]
