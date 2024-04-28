# codecollaboration/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('code-snippets/', CodeSnippetList.as_view(), name='code-snippet-list'),
    path('code-snippets/<int:pk>/', CodeSnippetDetail.as_view(), name='code-snippet-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('code-reviews/', CodeReviewList.as_view(), name='code-review-list'),
    path('code-reviews/<int:pk>/', CodeReviewDetail.as_view(), name='code-review-detail'),
    path('code-attachments/', CodeAttachmentList.as_view(), name='code-attachment-list'),
    path('comments/', CommentList.as_view(), name='comment-list'),
    path('code-snippets/<int:post_id>/comments/', CommentListByPost.as_view(), name='comments-by-post'),
    path('comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail'),
    path('posts/<int:snippet_id>/comments/create/', CommentCreate.as_view(), name='create-comment'),
    path('like/<int:snippet_id>/', LikeView.as_view(), name='like-post'),
    path('dislike/<int:snippet_id>/', DislikeView.as_view(), name='dislike-post'),
]
