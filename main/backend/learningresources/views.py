# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import LearningResource
from .serializers import LearningResourceSerializer

class LearningResourceAPI(APIView):
    def get(self, request):
        resources = LearningResource.objects.all()
        serializer = LearningResourceSerializer(resources, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        user_id = request.user.id  # Assuming user authentication
        title = request.data.get('title')
        content = request.data.get('content')
        
        resource = LearningResource.objects.create(
            title=title,
            content=content,
            contributor_id=user_id
        )
        
        serializer = LearningResourceSerializer(resource)
        return Response(serializer.data)