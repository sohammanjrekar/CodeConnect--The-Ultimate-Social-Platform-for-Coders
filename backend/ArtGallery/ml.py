# ml.py
from .models import DesignerProfile, Gallery, Image
from django.db.models import Count

class ArtGalleryRecommendation:
    def get_gallery_recommendations(self, user_id):
        user_profile = DesignerProfile.objects.get(user_id=user_id)
        user_followers = user_profile.followers.all()

        # Combine user followers' galleries for comparison
        user_followers_galleries = Gallery.objects.filter(designer__user__in=user_followers)

        # Combine user profile information for comparison
        user_info = user_profile.tags.all() | user_profile.galleries.all() | Image.objects.filter(gallery__in=user_profile.galleries.all())

        # Filter unique tags in user information
        unique_user_tags = list(set(user_info.values_list('tags__name', flat=True)))

        # Get galleries that match user tags
        recommended_galleries = self.get_matching_galleries(unique_user_tags, user_followers_galleries)

        return recommended_galleries

    def get_matching_galleries(self, user_tags, user_followers_galleries):
        # Find galleries that match user tags and are followed by user's followers
        matching_galleries = user_followers_galleries.filter(tags__name__in=user_tags) \
                             .annotate(tag_count=Count('tags__name')) \
                             .order_by('-tag_count')[:5]

        return matching_galleries
