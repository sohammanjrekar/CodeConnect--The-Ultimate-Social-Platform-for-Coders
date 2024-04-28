from rest_framework import serializers
from account.models import *
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        ref_name='user'

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user






from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims (optional)
        token['username'] = user.username
        # Add more custom claims as needed

        return token




class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = User.objects.filter(email=email).first()

            if user:
                if user.check_password(password):
                    refresh = RefreshToken.for_user(user)
                    return {
                        'email': user.email,
                        'username': user.username,
                        'refresh': str(refresh),
                        'access': str(refresh.access_token),
                    }
                else:
                    raise serializers.ValidationError("Incorrect password.")
            else:
                raise serializers.ValidationError("User does not exist.")
        else:
            raise serializers.ValidationError("Both email and password are required.")


from rest_framework import serializers
from .models import Friendship

class FriendshipRequestSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Friendship
        fields = ('id', 'created_by',)


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name']