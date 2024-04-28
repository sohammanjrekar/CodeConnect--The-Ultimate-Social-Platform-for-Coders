# codecollaboration/views.py
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.pagination import PageNumberPagination
class PostPagination(PageNumberPagination):
    page_size = 12
    page_query_param = 'page'
    page_size_query_param = 'limit'
    max_page_size = 1000
@authentication_classes([])
@permission_classes([AllowAny])
class CodeSnippetList(generics.ListCreateAPIView):
    queryset = CodeSnippet.objects.all()
    serializer_class = CodeSnippetSerializer
    pagination_class = PostPagination
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
    pagination_class = PostPagination
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


    
@authentication_classes([])
@permission_classes([AllowAny])
class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
@authentication_classes([])
@permission_classes([AllowAny])
class CommentListByPost(APIView):
    serializer_class = CommentSerializer

    def get(self, request, image_id):  # Update parameter name to image_id
        # Fetch all comments for the specified image_id
        comments = Comment.objects.filter(image=image_id)
        serializer = self.serializer_class(comments, many=True)
        return Response(serializer.data)
    

@authentication_classes([])
@permission_classes([AllowAny])
class CommentCreate(APIView):
    serializer_class = CommentSerializer

    pass

@authentication_classes([])
@permission_classes([AllowAny])
class DislikeView(APIView):
    def post(self, request, snippet_id):  # Change post_id to snippet_id
        snippet = get_object_or_404(CodeSnippet, id=snippet_id)  # Use CodeSnippet instead of Post
        snippet.likes += 1  # Increment likes count
        snippet.save()  # Save the updated snippet

        response_data = {
            'likes': snippet.likes,
            'message': 'Snippet liked successfully.',
        }

        return Response(response_data, status=status.HTTP_200_OK)
    

@authentication_classes([])
@permission_classes([AllowAny])
class LikeView(APIView):
    def post(self, request, snippet_id):  # Change post_id to snippet_id
        snippet = get_object_or_404(CodeSnippet, id=snippet_id)  # Use CodeSnippet instead of Post
        snippet.dislikes += 1  # Increment likes count
        snippet.save()  # Save the updated snippet

        response_data = {
            'dislikes': snippet.dislikes,
            'message': 'Snippet disliked successfully.',
        }

        return Response(response_data, status=status.HTTP_200_OK)