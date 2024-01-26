from rest_framework import generics
from .models import LearningResource, Tag, Comment
from .serializers import LearningResourceSerializer, TagSerializer, CommentSerializer

class LearningResourceList(generics.ListCreateAPIView):
    serializer_class = LearningResourceSerializer

    def get_queryset(self):
        category_name = self.request.query_params.get('category', None)
        queryset = LearningResource.objects.all()

        if category_name:
            queryset = queryset.filter(categories__name=category_name)

        return queryset

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
