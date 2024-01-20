from django.shortcuts import render
from .models import JobOpening
from .serializers import JobOpeningSerializer

class JobOpeningsAPI(APIView):
    def get(self, request):
        job_openings = JobOpening.objects.all()
        serializer = JobOpeningSerializer(job_openings, many=True)
        return Response(serializer.data)