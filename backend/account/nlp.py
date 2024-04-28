from account.models import User, UserKeyword
from rake_nltk import Rake

import nltk
nltk.download('punkt')
nltk.download('stopwords')

def extract_keywords(text):
    rake = Rake(
        ranking_metric='deg',
        max_length=2,
        min_length=1,
        stopwords=None,
        punctuations=None,
        language='english'
    )
    rake.extract_keywords_from_text(text)
    ranked_keywords = rake.get_ranked_phrases_with_scores()
    keywords_with_context = [keyword for _, keyword in ranked_keywords]
    return keywords_with_context

def fetch(user_id):
    try:
        user = User.objects.get(id=user_id)

        # Fetch keywords from different user attributes
        user_bio_keywords = extract_keywords(user.bio)
        post_content_keywords = extract_keywords_from_posts(user)
        blog_keywords = extract_keywords_from_blogs(user)

        all_keywords = (
            user_bio_keywords + 
            post_content_keywords + 
            blog_keywords
        )

        # Save keywords in the Keyword model
        for keyword_text in all_keywords:
            keyword, created = UserKeyword.objects.get_or_create(text=keyword_text)
            keyword.relevance += 2
            keyword.frequency += 1  # Adjust the frequency as needed
            keyword.context = ""  # Add context if necessary
            keyword.save()
            user.Keyword.add(keyword)
        print(f"Keywords saved successfully for user ID {user_id}.")
    except User.DoesNotExist:
        print(f"User with ID {user_id} does not exist.")

def extract_keywords_from_posts(user):
    posts = user.post_user.all()
    all_post_keywords = []

    for post in posts:
        post_content_keywords = extract_keywords(post.content)
        all_post_keywords.extend(post_content_keywords)

    return all_post_keywords

def extract_keywords_from_blogs(user):
    blogs = user.blog_posts.all()
    all_blog_keywords = []

    for blog in blogs:
        blog_content_keywords = extract_keywords(blog.content)
        all_blog_keywords.extend(blog_content_keywords)

    return all_blog_keywords
