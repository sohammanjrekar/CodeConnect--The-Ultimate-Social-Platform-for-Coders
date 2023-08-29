from django.urls import path
from .views import UserRegistration, UserLogin

urlpatterns = [
    # ...
    path('user/register/', UserRegistration.as_view(), name='user-register'),
    path('user/login/', UserLogin.as_view(), name='user-login'),
]
