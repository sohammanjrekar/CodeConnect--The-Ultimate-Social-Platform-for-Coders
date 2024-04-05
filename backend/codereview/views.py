# codecollaboration/views.py
from rest_framework import generics
from .models import CodeSnippet, Tag, CodeReview, CodeAttachment, Comment
from .serializers import (
    CodeSnippetSerializer, TagSerializer,
    CodeReviewSerializer, CodeAttachmentSerializer, CommentSerializer
)
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
@authentication_classes([])
@permission_classes([AllowAny])
class CodeSnippetList(generics.ListCreateAPIView):
    queryset = CodeSnippet.objects.all()
    serializer_class = CodeSnippetSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CodeSnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodeSnippet.objects.all()
    serializer_class = CodeSnippetSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CodeReviewList(generics.ListCreateAPIView):
    queryset = CodeReview.objects.all()
    serializer_class = CodeReviewSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CodeReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CodeReview.objects.all()
    serializer_class = CodeReviewSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CodeAttachmentList(generics.ListCreateAPIView):
    queryset = CodeAttachment.objects.all()
    serializer_class = CodeAttachmentSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
