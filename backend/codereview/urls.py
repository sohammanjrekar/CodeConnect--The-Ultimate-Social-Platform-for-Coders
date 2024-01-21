# codecollaboration/urls.py
from django.urls import path
from .views import (
    CodeSnippetList, CodeSnippetDetail,
    TagList, CodeReviewList, CodeReviewDetail,
    CodeAttachmentList, CommentList
)

urlpatterns = [
    path('code-snippets/', CodeSnippetList.as_view(), name='code-snippet-list'),
    path('code-snippets/<int:pk>/', CodeSnippetDetail.as_view(), name='code-snippet-detail'),
    path('tags/', TagList.as_view(), name='tag-list'),
    path('code-reviews/', CodeReviewList.as_view(), name='code-review-list'),
    path('code-reviews/<int:pk>/', CodeReviewDetail.as_view(), name='code-review-detail'),
    path('code-attachments/', CodeAttachmentList.as_view(), name='code-attachment-list'),
    path('comments/', CommentList.as_view(), name='comment-list'),
]
