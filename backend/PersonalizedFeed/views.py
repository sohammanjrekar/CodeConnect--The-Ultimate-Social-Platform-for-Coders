# PersonalizedFeed/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import FeedItem, UserFeedPreference, FeedComment
from .serializers import FeedItemSerializer, UserFeedPreferenceSerializer, FeedCommentSerializer

class FeedItemList(generics.ListCreateAPIView):
    queryset = FeedItem.objects.all()
    serializer_class = FeedItemSerializer
    permission_classes = [IsAuthenticated]

class UserFeedPreferenceDetail(generics.RetrieveUpdateAPIView):
    queryset = UserFeedPreference.objects.all()
    serializer_class = UserFeedPreferenceSerializer
    permission_classes = [IsAuthenticated]

class FeedCommentList(generics.ListCreateAPIView):
    queryset = FeedComment.objects.all()
    serializer_class = FeedCommentSerializer
    permission_classes = [IsAuthenticated]
