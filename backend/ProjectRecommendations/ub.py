from .models import UserBehavior, Project, Comment
from account.models import User

def ubv():
    # Retrieve all projects
    projects = Project.objects.all()

    # Loop through each project
    for project in projects:
        # Create UserBehavior instances for project likes
        for _ in range(project.likes):
            UserBehavior.objects.create(
                user=project.user,
                project=project,
                interaction_type='like'
            )

        # Create UserBehavior instances for project dislikes
        for _ in range(project.dislikes):
            UserBehavior.objects.create(
                user=project.user,
                project=project,
                interaction_type='dislike'
            )

        # Retrieve all comments for the current project
        comments = Comment.objects.filter(project=project)

        # Loop through each comment
        for comment in comments:
            # Create UserBehavior instances for comment likes
            for _ in range(comment.likes):
                UserBehavior.objects.create(
                    user=comment.user,
                    project=project,
                    interaction_type='like_comment'
                )

            # Create UserBehavior instances for comment dislikes
            for _ in range(comment.dislikes):
                UserBehavior.objects.create(
                    user=comment.user,
                    project=project,
                    interaction_type='dislike_comment'
                )

# Call the function to update user behavior for projects
ubv()
