from .models import UserBehavior, Post, Comment
from account.models import User

def ubv():
    # Retrieve all posts
    posts = Post.objects.all()

    # Loop through each post
    for post in posts:
        # Create UserBehavior instances for post likes
        for _ in range(post.likes):
            UserBehavior.objects.create(
                user=post.user,
                post=post,
                interaction_type='like'
            )

        # Create UserBehavior instances for post dislikes
        for _ in range(post.dislikes):
            UserBehavior.objects.create(
                user=post.user,
                post=post,
                interaction_type='dislike'
            )

        # Retrieve all comments for the current post
        comments = Comment.objects.filter(post=post)

        # Loop through each comment
        for comment in comments:
            # Create UserBehavior instances for comment likes
            for _ in range(comment.likes):
                UserBehavior.objects.create(
                    user=comment.user,
                    post=post,
                    interaction_type='like_comment'
                )

            # Create UserBehavior instances for comment dislikes
            for _ in range(comment.dislikes):
                UserBehavior.objects.create(
                    user=comment.user,
                    post=post,
                    interaction_type='dislike_comment'
                )

# Call the function to update user behavior
ubv()
