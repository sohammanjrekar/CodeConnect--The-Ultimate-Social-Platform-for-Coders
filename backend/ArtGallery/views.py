from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Tag, DesignerProfile, Gallery, Image, Comment, ContactRequest
from .serializers import TagSerializer, DesignerProfileSerializer, GallerySerializer, ImageSerializer, CommentSerializer, ContactRequestSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import cloudinary
          
cloudinary.config( 
  cloud_name = "dp6odhftt", 
  api_key = "834371186813391", 
  api_secret = "QPxYCBttNcO25u-vHVi6iOclkbw" 
)

import cloudinary.uploader
  


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

    def post(self, request, *args, **kwargs):
        # Assuming 'image' is the key for the image file in the request data
        image_file = request.data.get('image')

        # Check if an image file is provided
        if not image_file:
            print("No image file provided")
            return Response({"error": "Please provide an image file."}, status=status.HTTP_400_BAD_REQUEST)

        print("Request body:", request.data)

        try:
            if isinstance(image_file, str):
                # If 'image' is a string, assume it's a Cloudinary URL
                image_url = image_file
            else:
                # Otherwise, it's an image file, upload it to Cloudinary
                # Print information about the image
                print("Image info:")
                print("File name:", image_file.name)
                print("File size:", image_file.size)

                # Upload the image to Cloudinary
                print("Uploading image to Cloudinary...")
                cloudinary_response = cloudinary_response = cloudinary.uploader.upload(
        image_file,
        folder="Gallery",  # Specify the folder name here
    )

                # Check if the upload was successful
                if cloudinary_response['secure_url']:
                    image_url = cloudinary_response['secure_url']
                else:
                    print("Failed to upload image to Cloudinary")
                    return Response({"error": "Failed to upload image to Cloudinary."}, status=status.HTTP_400_BAD_REQUEST)

            # Get the gallery and designer IDs from the request data
            gallery_id = request.data.get('gallery', 1)  # Default to ID 1 if not provided
            designer_id = request.data.get('designer', 1)  # Default to ID 1 if not provided

            # Save the Cloudinary URL and other data to your database
            image_data = {
                'image': image_url,
                'description': request.data.get('description', ''),
                'likes': request.data.get('likes', 0),
                'dislikes': request.data.get('dislikes', 0),
                'gallery': gallery_id,
                'designer': designer_id
            }
            serializer = self.get_serializer(data=image_data)
            if serializer.is_valid():
                serializer.save()
                print("Image data saved successfully")
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print("Invalid serializer data:", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("An error occurred:", str(e))
            return Response({"error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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

from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from rest_framework.response import Response
from django.db.models import Q
@method_decorator(never_cache, name='dispatch')
@authentication_classes([])
@permission_classes([AllowAny])
class SearchArt(ListAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        queryset = Image.objects.all()
        search_query = self.request.GET.get('query')

        if search_query:
            # Split the search query into individual keywords
            keywords = search_query.split()

            # Create a Q object to build the query dynamically
            query = Q()
            for keyword in keywords:
                # Assuming 'title' is a field in the 'Gallery' model
                query |= Q(gallery__title__icontains=keyword) | Q(description__icontains=keyword) | Q(designer__user__first_name__icontains=keyword) | Q(designer__user__last_name__icontains=keyword)

            # Filter queryset based on the dynamic query
            queryset = queryset.filter(query)

        return queryset
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        
        # Send the total count of search results along with the response
        count = queryset.count()
        
        return Response({
            'count': count,
            'results': serializer.data
        })
    



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