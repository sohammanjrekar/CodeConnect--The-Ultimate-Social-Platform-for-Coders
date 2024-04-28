import json
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import *
from account.serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
from account.models import User
from django.http import JsonResponse
from django.core import serializers
from django.db.models import Q
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomToken

from .models import CustomToken


class CustomTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomToken
        fields = ('id', 'user', 'jti', 'created_at', 'updated_at')

def get_user_by_username(request):
    query = request.GET.get('username', '')

    if query:
        # Filter users whose first name or last name contains the query
        users = User.objects.filter(Q(first_name__icontains=query) | Q(last_name__icontains=query))
        users_data = [
            {
                'id': user.id,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'avatar': user.avatar.url if user.avatar else '',  # Assuming 'avatar' is a FileField
                # Add other fields as needed
            }
            for user in users
        ]
        return JsonResponse({'users': users_data})  # Return JSON response with 'users' key
    else:
        return JsonResponse({'error': 'Query parameter is required'})

@authentication_classes([])
@permission_classes([AllowAny])
class LanguageDetailView(generics.RetrieveAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer


class SignUpView(generics.CreateAPIView):
    serializer_class = UserSerializer 
    permission_classes = [AllowAny]  
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)

        # Create a custom token instance
        custom_token = CustomToken.objects.create(
            user=user,
            jti=refresh['jti']  # Use the jti from the refresh token
        )

        return Response({
            'user_id': user.id,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)
    
    
from rest_framework_simplejwt.views import TokenObtainPairView
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

def generate_token(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

from django.contrib.auth import authenticate, login
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)  # Parse JSON data from request body
        username = data.get('email')  # Assuming email is used as username
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({
                'user_id': user.id,
                'token': generate_token(user)
            })
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)