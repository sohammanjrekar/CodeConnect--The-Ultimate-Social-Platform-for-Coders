# urls.py
from django.urls import path
from chat.views import *

urlpatterns = [
    path('conversations/<int:user_id>/<int:conversation_id>/send/', SendMessage.as_view(), name='send_message'),
    path('conversations/<int:user_id>/<int:conversation_id>/messages/', GetMessages.as_view(), name='get_messages'),
    path('previously-connected/<int:user_id>/', PreviouslyConnectedUsersList.as_view(), name='previously_connected_users'),
    path('create-conversation/<int:user1_id>/<int:user2_id>/', CreateConversation.as_view(), name='create_conversation'),

]
