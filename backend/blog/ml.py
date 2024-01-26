# ml.py
from .models import BlogPost, Comment

class BlogRecommendation:
    def get_blog_recommendations(self, user_id):
        user_liked_posts = BlogPost.objects.filter(likes=user_id)
        user_authored_posts = BlogPost.objects.filter(author=user_id)
        user_comments = Comment.objects.filter(user=user_id)

        # Combine user information for comparison
        user_info = user_liked_posts.values_list('content', flat=True) \
                     | user_authored_posts.values_list('content', flat=True) \
                     | user_comments.values_list('content', flat=True)

        # Filter unique words in user content
        unique_user_keywords = list(set(" ".join(user_info).split()))

        # Get blog posts that match user keywords
        recommended_posts = self.get_matching_posts(unique_user_keywords)

        return recommended_posts

    def get_matching_posts(self, user_keywords):
        # Find posts that match user keywords
        matching_posts = BlogPost.objects.filter(content__icontains=user_keywords[0])

        for keyword in user_keywords[1:]:
            matching_posts = matching_posts.filter(content__icontains=keyword)

        return matching_posts
