from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from account.views import *
from account import api

urlpatterns = [
    path('users/<int:pk>/', api.get_user_data, name='get_user_data'),
    path('editprofile/', api.editprofile, name='editprofile'),
    path('editpassword/', api.editpassword, name='editpassword'),
    path('friends/suggested/', api.my_friendship_suggestions, name='my_friendship_suggestions'),
    path('friends/<uuid:pk>/', api.friends, name='friends'),
    path('friends/<uuid:pk>/request/', api.send_friendship_request, name='send_friendship_request'),
    path('friends/<uuid:pk>/<str:status>/', api.handle_request, name='handle_request'),
    path('users/', get_user_by_username, name='get_user_by_username'),
    path('language/<int:pk>/', LanguageDetailView.as_view(), name='language-detail'),

   
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', login_view, name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='logout'),


]