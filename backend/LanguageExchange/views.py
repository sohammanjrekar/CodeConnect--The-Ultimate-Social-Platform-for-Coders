# LanguageExchange/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import (
    LanguageExchangeProfile, ProgrammingLanguage,
    CommunicationMethod, AvailabilityTime,
    CollaborationInterest, CollaboratedProject,
    LanguageTeaching
)
from .serializers import (
    LanguageExchangeProfileSerializer, ProgrammingLanguageSerializer,
    CommunicationMethodSerializer, AvailabilityTimeSerializer,
    CollaborationInterestSerializer, CollaboratedProjectSerializer,
    LanguageTeachingSerializer
)

class LanguageExchangeProfileList(generics.ListCreateAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer
    permission_classes = [IsAuthenticated]

class LanguageExchangeProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer
    permission_classes = [IsAuthenticated]

class ProgrammingLanguageList(generics.ListAPIView):
    queryset = ProgrammingLanguage.objects.all()
    serializer_class = ProgrammingLanguageSerializer

class CommunicationMethodList(generics.ListAPIView):
    queryset = CommunicationMethod.objects.all()
    serializer_class = CommunicationMethodSerializer

class AvailabilityTimeList(generics.ListAPIView):
    queryset = AvailabilityTime.objects.all()
    serializer_class = AvailabilityTimeSerializer

class CollaborationInterestList(generics.ListAPIView):
    queryset = CollaborationInterest.objects.all()
    serializer_class = CollaborationInterestSerializer

class CollaboratedProjectList(generics.ListAPIView):
    queryset = CollaboratedProject.objects.all()
    serializer_class = CollaboratedProjectSerializer

class LanguageTeachingList(generics.ListCreateAPIView):
    queryset = LanguageTeaching.objects.all()
    serializer_class = LanguageTeachingSerializer
    permission_classes = [IsAuthenticated]
