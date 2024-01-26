# forum/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import ForumTopic, ForumPost, ForumReply
from .serializers import ForumTopicSerializer, ForumPostSerializer, ForumReplySerializer



# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ForumPost
from .ml import ForumRecommendation

class ForumRecommendationView(APIView):
    def get(self, request, user_id):
        forum_recommendation = ForumRecommendation()
        recommended_posts = forum_recommendation.get_forum_recommendations(user_id)

        serialized_posts = self.serialize_posts(recommended_posts)

        return JsonResponse({'posts': serialized_posts})

    def serialize_posts(self, posts):
        serialized_posts = [
            {
                'id': post.id,
                'topic': post.topic.title,
                'author': post.author.username,
                'content': post.content,
                'created_at': post.created_at,
                'likes_count': post.likes.count(),
            }
            for post in posts
        ]

        return serialized_posts

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
