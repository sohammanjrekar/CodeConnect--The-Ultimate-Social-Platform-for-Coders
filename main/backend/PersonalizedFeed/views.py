from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Post, Connection, Notification
from .serializers import PostSerializer, ConnectionSerializer, NotificationSerializer

class PersonalizedFeedAPI(APIView):
    def get(self, request, user_id):
        user_connections = Connection.objects.filter(user_id=user_id)
        user_posts = Post.objects.filter(author__in=user_connections.values('connection'))
        serializer = PostSerializer(user_posts, many=True)
        return Response(serializer.data)

class RecommendedConnectionsAPI(APIView):
    def get(self, request, user_id):
        recommended_connections = self.get_recommended_connections(user_id)
        serializer = ConnectionSerializer(recommended_connections, many=True)
        return Response(serializer.data)
    
    def get_recommended_connections(self, user_id):
        # Implement AI-driven algorithm to recommend connections
        # For simplicity, returning a sample set of connections
        return Connection.objects.exclude(user_id=user_id)[:5]

class NotificationsAPI(APIView):
    def get(self, request, user_id):
        user_notifications = Notification.objects.filter(user_id=user_id)
        serializer = NotificationSerializer(user_notifications, many=True)
        return Response(serializer.data)