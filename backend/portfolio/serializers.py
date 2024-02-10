# portfolio/serializers.py
from rest_framework import serializers
from .models import Project, ProjectCategory, Technology, ProjectImage, Resume

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = '__all__'

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = '__all__'
        

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'

    def update_resume_fields(self, instance, validated_data):
        instance.education = validated_data.get('education', instance.education)
        instance.work_experience = validated_data.get('work_experience', instance.work_experience)
        # Update other fields as needed
        instance.save()
        return instance