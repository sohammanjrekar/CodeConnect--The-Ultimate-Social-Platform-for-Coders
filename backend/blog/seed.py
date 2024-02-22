# seed.py
import os
import django
from faker import Faker
from django.contrib.auth.models import User
from blog.models import Category, Tag, BlogPost, Comment
from django.utils.text import slugify
from random import randint, choice

fake = Faker()

def create_user():
    return User.objects.create_user(
        username=fake.user_name(),
        email=fake.email(),
        password='password'
    )

def create_category():
    name = fake.word()
    return Category.objects.create(
        name=name,
        slug=slugify(name)
    )
def create_tag():
    name = fake.word()
    base_slug = slugify(name)
    
    # Append a random string to the slug to make it unique
    slug = f"{base_slug}-{fake.random_int(min=1, max=1000)}"
    
    return Tag.objects.create(
        name=name,
        slug=slug
    )


def create_blog_post(author, categories, tags):
    title = fake.sentence()
    content = fake.paragraphs(5)  # Remove the True argument here
    return BlogPost.objects.create(
        title=title,
        content=content,
        author=author,
        is_published=True,
        slug=slugify(title),
        featured_image=None,
    )


def create_comment(user, post):
    content = fake.paragraph()
    return Comment.objects.create(
        user=user,
        post=post,
        content=content
    )

def generate_fake_data(num_users=5, num_categories=5, num_tags=10, num_posts=20, num_comments=50):
    users = [create_user() for _ in range(num_users)]
    categories = [create_category() for _ in range(num_categories)]
    tags = [create_tag() for _ in range(num_tags)]

    for _ in range(num_posts):
        author = choice(users)
        post_categories = [choice(categories) for _ in range(randint(1, 3))]
        post_tags = [choice(tags) for _ in range(randint(1, 5))]

        post = create_blog_post(author, post_categories, post_tags)

        for _ in range(num_comments):
            commenter = choice(users)
            create_comment(commenter, post)

if __name__ == "__main__":
    generate_fake_data()
