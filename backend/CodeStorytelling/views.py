from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, CodeStory
from .serializers import UserSerializer, CodeStorySerializer

class CodeStoriesAPI(APIView):
    def get(self, request):
        code_stories = CodeStory.objects.all()
        serializer = CodeStorySerializer(code_stories, many=True)
        return Response(serializer.data)