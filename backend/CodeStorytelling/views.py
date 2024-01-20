# CodeStorytelling/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import CodeStory, CodeStoryComment, CodeStoryRating
from .serializers import CodeStorySerializer, CodeStoryCommentSerializer, CodeStoryRatingSerializer

class CodeStoryList(generics.ListCreateAPIView):
    queryset = CodeStory.objects.all()
    serializer_class = CodeStorySerializer
    permission_classes = [IsAuthenticated]

class CodeStoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodeStory.objects.all()
    serializer_class = CodeStorySerializer
    permission_classes = [IsAuthenticated]

class CodeStoryCommentList(generics.ListCreateAPIView):
    queryset = CodeStoryComment.objects.all()
    serializer_class = CodeStoryCommentSerializer
    permission_classes = [IsAuthenticated]

class CodeStoryRatingList(generics.ListCreateAPIView):
    queryset = CodeStoryRating.objects.all()
    serializer_class = CodeStoryRatingSerializer
    permission_classes = [IsAuthenticated]
