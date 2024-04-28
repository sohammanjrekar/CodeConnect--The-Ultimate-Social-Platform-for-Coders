from MentorshipMatching.models import MentorshipProfile, UserBehavior

def ubv():
    # Retrieve all mentorship profiles
    mentorship_profiles = MentorshipProfile.objects.all()

    # Loop through each mentorship profile
    for mentorship_profile in mentorship_profiles:
        # Create UserBehavior instances for mentorship profile likes
        for _ in range(mentorship_profile.likes):
            UserBehavior.objects.create(
                user=mentorship_profile.user,
                post=mentorship_profile,
                interaction_type='like'
            )

        # Create UserBehavior instances for mentorship profile dislikes
        for _ in range(mentorship_profile.dislikes):
            UserBehavior.objects.create(
                user=mentorship_profile.user,
                post=mentorship_profile,
                interaction_type='dislike'
            )

        # Create UserBehavior instances for mentorship profile comments
        for comment in mentorship_profile.comments.all():
            # Create UserBehavior instances for comment likes
            for _ in range(comment.likes):
                UserBehavior.objects.create(
                    user=comment.mentee,
                    post=mentorship_profile,
                    interaction_type='like_comment'
                )

            # Create UserBehavior instances for comment dislikes
            for _ in range(comment.dislikes):
                UserBehavior.objects.create(
                    user=comment.mentee,
                    post=mentorship_profile,
                    interaction_type='dislike_comment'
                )

# Call the function to update user behavior
ubv()
