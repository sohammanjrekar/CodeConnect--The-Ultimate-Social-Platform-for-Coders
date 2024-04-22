from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Tag, DesignerProfile, Gallery, Image, Comment, ContactRequest
from .serializers import TagSerializer, DesignerProfileSerializer, GallerySerializer, ImageSerializer, CommentSerializer, ContactRequestSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes

@authentication_classes([])
@permission_classes([AllowAny])
class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class DesignerProfileList(generics.ListCreateAPIView):
    queryset = DesignerProfile.objects.all()
    serializer_class = DesignerProfileSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class DesignerProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DesignerProfile.objects.all()
    serializer_class = DesignerProfileSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class GalleryList(generics.ListCreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
@authentication_classes([])
@permission_classes([AllowAny])
class GalleryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
@authentication_classes([])
@permission_classes([AllowAny])
class GalleryImagesList(generics.ListAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        # Get the gallery_id from the URL parameters
        gallery_id = self.kwargs.get('gallery_id')
        
        # Filter images by the given gallery_id
        queryset = Image.objects.filter(gallery_id=gallery_id)
        
        return queryset

@authentication_classes([])
@permission_classes([AllowAny])
class ImageList(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


@authentication_classes([])
@permission_classes([AllowAny])
class ImageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
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
@authentication_classes([])
@permission_classes([AllowAny])
class ContactRequestList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ContactRequest.objects.filter(sender=user)

    serializer_class = ContactRequestSerializer
@authentication_classes([])
@permission_classes([AllowAny])
class ContactRequestDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactRequest.objects.all()
    serializer_class = ContactRequestSerializer
