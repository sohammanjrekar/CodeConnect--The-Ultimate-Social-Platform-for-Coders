# events/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
@authentication_classes([])
@permission_classes([AllowAny])
class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class PaymentListByEvent(generics.ListAPIView):
    serializer_class = PaymentSerializer

    def get_queryset(self):
        event_id = self.kwargs['event_id']
        user_id = self.kwargs['user_id']
        return Payment.objects.filter(event_id=event_id, user_id=user_id)
    
@authentication_classes([])
@permission_classes([AllowAny])
class ParticipantListByEvent(generics.ListAPIView):
    serializer_class = ParticipantSerializer

    def get_queryset(self):
        event_id = self.kwargs['event_id']
        return Participant.objects.filter(event_id=event_id)