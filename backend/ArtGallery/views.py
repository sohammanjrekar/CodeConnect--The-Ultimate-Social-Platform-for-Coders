# artgallery/views.py
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Tag, DesignerProfile, Gallery, Image, Comment, ContactRequest
from .serializers import TagSerializer, DesignerProfileSerializer, GallerySerializer, ImageSerializer, CommentSerializer, ContactRequestSerializer



# views.py
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DesignerProfile
from .ml import ArtGalleryRecommendation

class ArtGalleryRecommendationView(APIView):
    def get(self, request, user_id):
        gallery_recommendation = ArtGalleryRecommendation()
        recommended_galleries = gallery_recommendation.get_gallery_recommendations(user_id)

        serialized_galleries = self.serialize_galleries(recommended_galleries)

        return JsonResponse({'galleries': serialized_galleries})

    def serialize_galleries(self, galleries):
        serialized_galleries = [
            {
                'id': gallery.id,
                'title': gallery.title,
                'description': gallery.description,
                'tags': [tag.name for tag in gallery.tags.all()],
                'created_at': gallery.created_at,
                'designer': gallery.designer.user.username,
            }
            for gallery in galleries
        ]

        return serialized_galleries


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
