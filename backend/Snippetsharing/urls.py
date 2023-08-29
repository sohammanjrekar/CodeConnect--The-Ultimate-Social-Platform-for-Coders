from django.urls import path
from .views import SnippetList, SnippetDetail, TagList

urlpatterns = [
    path('api/snippets/', SnippetList.as_view(), name='snippet-list'),
    path('api/snippets/<int:pk>/', SnippetDetail.as_view(), name='snippet-detail'),
    path('api/tags/', TagList.as_view(), name='tag-list'),
    # ...
]
