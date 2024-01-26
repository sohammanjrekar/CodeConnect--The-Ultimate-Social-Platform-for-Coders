# MentorshipMatching/views.py
from rest_framework import generics
from .models import MentorshipProfile, SharedResource, ContactMethod, MentorComment
from .serializers import *

# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MentorshipProfile, User
from .ml import MentorMatching

class MentorMatchingView(APIView):
    def get(self, request):
        mentors = MentorshipProfile.objects.all().exclude(user=request.user)
        mentees = MentorshipProfile.objects.filter(mentees=request.user)

        matches = MentorMatching.match_mentors_to_mentees(mentors, mentees)

        serialized_matches = self.serialize_matches(matches)

        return JsonResponse({'matches': serialized_matches})

    def serialize_matches(self, matches):
        serialized_matches = []

        for match in matches:
            serialized_matches.append({
                'mentee': match['mentee'].user.username,
                'mentor': match['mentor'].user.username,
                'language_score': match['language_score'],
                'keyword_score': match['keyword_score'],
            })

        return serialized_matches

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
