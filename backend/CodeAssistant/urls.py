from django.urls import path
from .views import UserListCreateView, UserDetailView, ProgrammingLanguageListCreateView, ProgrammingLanguageDetailView, CodeSnippetListCreateView, CodeSnippetDetailView

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('programming_languages/', ProgrammingLanguageListCreateView.as_view(), name='programming-language-list-create'),
    path('programming_languages/<int:pk>/', ProgrammingLanguageDetailView.as_view(), name='programming-language-detail'),
    path('code_snippets/', CodeSnippetListCreateView.as_view(), name='code-snippet-list-create'),
    path('code_snippets/<int:pk>/', CodeSnippetDetailView.as_view(), name='code-snippet-detail'),
]
