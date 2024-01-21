# artgallery/urls.py
from django.urls import path
from .views import (
    TagList, DesignerProfileList, GalleryList,
    ImageList, CommentList, ContactRequestList
)

urlpatterns = [
    path('tags/', TagList.as_view(), name='tag-list'),
    path('designer-profiles/', DesignerProfileList.as_view(), name='designer-profile-list'),
    path('galleries/', GalleryList.as_view(), name='gallery-list'),
    path('images/', ImageList.as_view(), name='image-list'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    path('contact-requests/', ContactRequestList.as_view(), name='contact-request-list'),
    # ... add more paths for other views as needed
]
