from rest_framework import serializers
from .models import CodeReview, UserPoints

class CodeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeReview
        fields = '__all__'

class UserPointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPoints
        fields = '__all__'
