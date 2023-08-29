from rest_framework import serializers
from .models import User, ProgrammingLanguage, PairProgrammingSession

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProgrammingLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguage
        fields = '__all__'

class PairProgrammingSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PairProgrammingSession
        fields = '__all__'