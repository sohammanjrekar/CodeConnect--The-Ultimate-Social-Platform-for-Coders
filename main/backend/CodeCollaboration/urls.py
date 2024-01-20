# urls.py
from django.urls import path
from .views import CodeEditorAPI

urlpatterns = [
    path('api/code-editor/', CodeEditorAPI.as_view(), name='code_editor'),
]