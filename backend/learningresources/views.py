from rest_framework import generics
from .models import LearningResource, Tag, Comment
from .serializers import LearningResourceSerializer, TagSerializer, CommentSerializer

class LearningResourceList(generics.ListCreateAPIView):
    queryset = LearningResource.objects.all()
    serializer_class = LearningResourceSerializer

class LearningResourceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = LearningResource.objects.all()
    serializer_class = LearningResourceSerializer

class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
