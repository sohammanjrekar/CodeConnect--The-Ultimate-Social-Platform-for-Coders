# MentorshipMatching/views.py
from rest_framework import generics
from .models import MentorshipProfile, SharedResource, ContactMethod, MentorComment
from .serializers import (
    MentorshipProfileSerializer, SharedResourceSerializer,
    ContactMethodSerializer, MentorCommentSerializer
)

class MentorshipProfileList(generics.ListCreateAPIView):
    queryset = MentorshipProfile.objects.all()
    serializer_class = MentorshipProfileSerializer

class MentorshipProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MentorshipProfile.objects.all()
    serializer_class = MentorshipProfileSerializer

class SharedResourceList(generics.ListCreateAPIView):
    queryset = SharedResource.objects.all()
    serializer_class = SharedResourceSerializer

class SharedResourceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SharedResource.objects.all()
    serializer_class = SharedResourceSerializer

class ContactMethodList(generics.ListCreateAPIView):
    queryset = ContactMethod.objects.all()
    serializer_class = ContactMethodSerializer

class ContactMethodDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactMethod.objects.all()
    serializer_class = ContactMethodSerializer

class MentorCommentList(generics.ListCreateAPIView):
    queryset = MentorComment.objects.all()
    serializer_class = MentorCommentSerializer

class MentorCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = MentorComment.objects.all()
    serializer_class = MentorCommentSerializer
