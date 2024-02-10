import uuid
from django.contrib.auth import get_user_model
from django.utils import timezone
from faker import Faker
from post.models import Hashtag, Post, Comment
from account.models import User

fake = Faker()

def generate_fake_hashtags(num_hashtags=10):
    existing_hashtags = set(Hashtag.objects.values_list('name', flat=True))
    hashtags = []

    for _ in range(num_hashtags):
        name = fake.word()
        while name in existing_hashtags:
            name = fake.word()

        existing_hashtags.add(name)
        hashtag = Hashtag(name=name)
        hashtag.save()

def generate_fake_posts(num_posts=20):
    users = User.objects.all()
    hashtags = Hashtag.objects.all()
    posts = []

    for _ in range(num_posts):
        user = fake.random_element(elements=users)
        content = fake.text()
        image = fake.image_url() if fake.boolean(chance_of_getting_true=30) else None

        post = Post(
            user=user,
            content=content,
            likes=fake.random_int(min=0, max=100),
            image=image,
        )
        post.save()
        post.hashtags.set(fake.random_elements(elements=hashtags, length=fake.random_int(min=0, max=5)))
        posts.append(post)

def generate_fake_comments(num_comments=50):
    users = User.objects.all()
    posts = Post.objects.all()
    hashtags = Hashtag.objects.all()

    for _ in range(num_comments):
        user = fake.random_element(elements=users)
        post = fake.random_element(elements=posts)
        content = fake.text()

        comment = Comment(
            user=user,
            post=post,
            content=content,
            likes=fake.random_int(min=0, max=50),
            dislikes=fake.random_int(min=0, max=20),
        )
        comment.save()
        comment.hashtags.set(fake.random_elements(elements=hashtags, length=fake.random_int(min=0, max=3)))

def generate_fake_data():
    generate_fake_hashtags()
    generate_fake_posts()
    generate_fake_comments()

if __name__ == "__main__":
    generate_fake_data()
