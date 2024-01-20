# forum/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import ForumTopic, ForumPost, ForumReply
from .serializers import ForumTopicSerializer, ForumPostSerializer, ForumReplySerializer

class ForumTopicList(generics.ListCreateAPIView):
    queryset = ForumTopic.objects.all()
    serializer_class = ForumTopicSerializer
    permission_classes = [IsAuthenticated]

class ForumTopicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ForumTopic.objects.all()
    serializer_class = ForumTopicSerializer
    permission_classes = [IsAuthenticated]

class ForumPostList(generics.ListCreateAPIView):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer
    permission_classes = [IsAuthenticated]

class ForumPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer
    permission_classes = [IsAuthenticated]

class ForumReplyList(generics.ListCreateAPIView):
    queryset = ForumReply.objects.all()
    serializer_class = ForumReplySerializer
    permission_classes = [IsAuthenticated]

class ForumReplyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ForumReply.objects.all()
    serializer_class = ForumReplySerializer
    permission_classes = [IsAuthenticated]
