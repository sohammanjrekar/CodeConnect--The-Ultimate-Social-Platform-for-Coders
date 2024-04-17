from django.urls import path
from chat.views import previously_connected_users, search_users, send_message, get_messages

urlpatterns = [
    path('conversations/<uuid:conversation_id>/send/', send_message, name='send_message'),
    path('conversations/<uuid:conversation_id>/messages/', get_messages, name='get_messages'),
    path('search/', search_users, name='search_users'),
    path('previously-connected/', previously_connected_users, name='previously_connected_users'),

]
