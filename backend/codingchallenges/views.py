# codingchallenges/views.py
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import CodingChallenge, Tag, TestCase, Badge
from .serializers import (
    CodingChallengeSerializer, TagSerializer,
    TestCaseSerializer, BadgeSerializer
)

class CodingChallengeList(generics.ListCreateAPIView):
    queryset = CodingChallenge.objects.all()
    serializer_class = CodingChallengeSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()
        challenge = serializer.instance
        user = self.request.user
        points_awarded = challenge.award_points(user)

        return Response({
            'message': f'Challenge created successfully. You earned {points_awarded} points!',
            'challenge': serializer.data
        }, status=status.HTTP_201_CREATED)

class CodingChallengeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodingChallenge.objects.all()
    serializer_class = CodingChallengeSerializer
    permission_classes = [IsAuthenticated]

class TagList(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TestCaseList(generics.ListAPIView):
    queryset = TestCase.objects.all()
    serializer_class = TestCaseSerializer

class BadgeList(generics.ListAPIView):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
