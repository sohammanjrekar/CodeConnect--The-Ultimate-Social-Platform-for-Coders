# artgallery/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('tags/', TagList.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetail.as_view(), name='tag-detail'),
    path('designer-profiles/', DesignerProfileList.as_view(), name='designer-profile-list'),
    path('designer-profiles/<int:pk>/', DesignerProfileDetail.as_view(), name='designer-profile-detail'),
    path('galleries/', GalleryList.as_view(), name='gallery-list'),
    path('galleries/<int:pk>/', GalleryDetail.as_view(), name='gallery-detail'),
    path('images/', ImageList.as_view(), name='image-list'),
    path('images/<int:pk>/', ImageDetail.as_view(), name='image-detail'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
    path('contact-requests/', ContactRequestList.as_view(), name='contact-request-list'),
    path('contact-requests/<int:pk>/', ContactRequestDetail.as_view(), name='contact-request-detail'),
    path('galleries/<int:gallery_id>/images/', GalleryImagesList.as_view(), name='gallery-images-list'),
    path('search/', SearchArt.as_view(), name='search_art'),

]

