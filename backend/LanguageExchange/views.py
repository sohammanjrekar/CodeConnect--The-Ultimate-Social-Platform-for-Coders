# LanguageExchange/views.py
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
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

class LanguageExchangeProfileList(ListAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer

class LanguageExchangeProfileDetail(RetrieveAPIView):
    queryset = LanguageExchangeProfile.objects.all()
    serializer_class = LanguageExchangeProfileSerializer

class ProgrammingLanguageList(ListAPIView):
    queryset = ProgrammingLanguage.objects.all()
    serializer_class = ProgrammingLanguageSerializer

class CommunicationMethodList(ListAPIView):
    queryset = CommunicationMethod.objects.all()
    serializer_class = CommunicationMethodSerializer

class AvailabilityTimeList(ListAPIView):
    queryset = AvailabilityTime.objects.all()
    serializer_class = AvailabilityTimeSerializer

class CollaborationInterestList(ListAPIView):
    queryset = CollaborationInterest.objects.all()
    serializer_class = CollaborationInterestSerializer

class CollaboratedProjectList(ListAPIView):
    queryset = CollaboratedProject.objects.all()
    serializer_class = CollaboratedProjectSerializer

class LanguageTeachingList(ListAPIView):
    queryset = LanguageTeaching.objects.all()
    serializer_class = LanguageTeachingSerializer
