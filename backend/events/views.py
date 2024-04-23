# events/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from .models import *
from .serializers import *

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class PaymentListByEvent(generics.ListAPIView):
    serializer_class = PaymentSerializer

    def get_queryset(self):
        event_id = self.kwargs['event_id']
        user_id = self.kwargs['user_id']
        return Payment.objects.filter(event_id=event_id, user_id=user_id)
class ParticipantListByEvent(generics.ListAPIView):
    serializer_class = ParticipantSerializer

    def get_queryset(self):
        event_id = self.kwargs['event_id']
        return Participant.objects.filter(event_id=event_id)