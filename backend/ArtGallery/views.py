# artgallery/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Tag, DesignerProfile, Gallery, Image, Comment, ContactRequest
from .serializers import TagSerializer, DesignerProfileSerializer, GallerySerializer, ImageSerializer, CommentSerializer, ContactRequestSerializer

class TagList(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class DesignerProfileList(generics.ListCreateAPIView):
    queryset = DesignerProfile.objects.all()
    serializer_class = DesignerProfileSerializer

class GalleryList(generics.ListCreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class ImageList(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ContactRequestList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ContactRequest.objects.filter(sender=user)

    serializer_class = ContactRequestSerializer
