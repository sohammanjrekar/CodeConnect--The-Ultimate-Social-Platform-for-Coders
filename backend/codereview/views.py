# codecollaboration/views.py
from rest_framework import generics
from .models import CodeSnippet, Tag, CodeReview, CodeAttachment, Comment
from .serializers import (
    CodeSnippetSerializer, TagSerializer,
    CodeReviewSerializer, CodeAttachmentSerializer, CommentSerializer
)

class CodeSnippetList(generics.ListCreateAPIView):
    queryset = CodeSnippet.objects.all()
    serializer_class = CodeSnippetSerializer

class CodeSnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodeSnippet.objects.all()
    serializer_class = CodeSnippetSerializer

class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class CodeReviewList(generics.ListCreateAPIView):
    queryset = CodeReview.objects.all()
    serializer_class = CodeReviewSerializer

class CodeReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodeReview.objects.all()
    serializer_class = CodeReviewSerializer

class CodeAttachmentList(generics.ListCreateAPIView):
    queryset = CodeAttachment.objects.all()
    serializer_class = CodeAttachmentSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
