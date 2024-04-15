# jobportal/serializers.py
from rest_framework import serializers
from .models import JobPosting, JobCategory, Skill, Benefit,Person

class JobPostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPosting
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name']

class JobCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobCategory
        fields = ['id', 'name']

class BenefitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Benefit
        fields = ['id', 'name']

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields ='__all__'
