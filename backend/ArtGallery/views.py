from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, CodeArtwork
from .serializers import UserSerializer, CodeArtworkSerializer

class CodeArtworksAPI(APIView):
    def get(self, request):
        code_artworks = CodeArtwork.objects.all()
        serializer = CodeArtworkSerializer(code_artworks, many=True)
        return Response(serializer.data)