# codecollaboration/views.py
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.permissions import AllowAny

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
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

    def post(self, request, image_id):  # Update parameter name to image_id
        try:
            # Check if the image exists
            image = Image.objects.get(pk=image_id)
        except Image.DoesNotExist:
            return Response({"error": "Image not found."}, status=status.HTTP_404_NOT_FOUND)

        # Create a new comment instance with the request data
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # Assign the image to the comment
            serializer.validated_data['image'] = image
            # Save the comment
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)