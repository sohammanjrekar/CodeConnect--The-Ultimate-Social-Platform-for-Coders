from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import DeveloperProfile, Project
from .serializers import DeveloperProfileSerializer, ProjectSerializer

class ProfileDetails(APIView):
    def get(self, request, user_id):
        # Fetch user details based on user_id
        user_details = {
            # ...
        }
        return Response(user_details)

class EmploymentHistory(APIView):
    def get(self, request, user_id):
        # Fetch employment history based on user_id
        employment_history = [
            {
                # ...
            },
            # ...
        ]
        return Response(employment_history)

class EducationHistory(APIView):
    def get(self, request, user_id):
        # Fetch education history based on user_id
        education_history = [
            {
                # ...
            },
            # ...
        ]
        return Response(education_history)

class Skills(APIView):
    def get(self, request, user_id):
        # Fetch skills based on user_id
        skills = [
            'JavaScript', 'React', 'Node.js', 'Python', 'Django', 'SQL', '...'
        ]
        return Response(skills)






class DeveloperProfileAPI(APIView):
    def get(self, request, user_id):
        profile = DeveloperProfile.objects.get(user_id=user_id)
        serializer = DeveloperProfileSerializer(profile)
        return Response(serializer.data)

class ProjectAPI(APIView):
    def get(self, request, user_id):
        projects = Project.objects.filter(owner_id=user_id)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
