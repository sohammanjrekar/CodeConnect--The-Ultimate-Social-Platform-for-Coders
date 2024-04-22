# codingchallenges/serializers.py
from rest_framework import serializers
from .models import *

class CodingChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodingChallenge
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
        ref_name = 'CodingChallengesTag'

class TestCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestCase
        fields = '__all__'

class solutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solution
        fields = '__all__'


