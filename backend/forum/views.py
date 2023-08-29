from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import DiscussionTopic, DiscussionPost
from .serializers import DiscussionTopicSerializer, DiscussionPostSerializer

class DiscussionTopicAPI(APIView):
    def get(self, request):
        topics = DiscussionTopic.objects.all()
        serializer = DiscussionTopicSerializer(topics, many=True)
        return Response(serializer.data)

class DiscussionPostAPI(APIView):
    def get(self, request, topic_id):
        posts = DiscussionPost.objects.filter(topic_id=topic_id)
        serializer = DiscussionPostSerializer(posts, many=True)
        return Response(serializer.data)
    
    def post(self, request, topic_id):
        user_id = request.user.id  # Assuming user authentication
        content = request.data.get('content')
        topic = DiscussionTopic.objects.get(id=topic_id)
        
        post = DiscussionPost.objects.create(
            topic=topic,
            user_id=user_id,
            content=content
        )
        
        serializer = DiscussionPostSerializer(post)
        return Response(serializer.data)