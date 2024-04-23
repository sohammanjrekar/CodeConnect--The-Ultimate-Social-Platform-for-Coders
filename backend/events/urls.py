# events/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('events/', EventList.as_view(), name='event-list'),
    path('events/<int:pk>/', EventDetail.as_view(), name='event-detail-by-id'),
    path('events/<int:event_id>/participants/', ParticipantListByEvent.as_view(), name='event-participant-list'),

    path('events/<int:event_id>/payments/<int:user_id>/', PaymentListByEvent.as_view(), name='event-payment-list-by-user'), path('events/<int:event_id>/participants/', ParticipantListByEvent.as_view(), name='event-participant-list'),
        
]