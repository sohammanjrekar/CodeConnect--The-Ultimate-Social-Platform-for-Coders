from .models import Post, Keyword
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

def update_keywords_from_posts():
    posts = Post.objects.all()

    for post in posts:
        try:
            keywords_from_post = extract_keywords_from_post(post)
            update_keywords(keywords_from_post, post.id)
        except Exception as e:
            # Handle exceptions gracefully, e.g., logging
            print(f"Error processing post {post.id}: {e}")

def extract_keywords_from_post(post):
    content_keywords = extract_keywords(post.content)
    hashtag_keywords = [hashtag.name for hashtag in post.hashtags.all()]
    combined_keywords = content_keywords + hashtag_keywords  # Concatenate the lists
    return combined_keywords

def update_keywords(keywords, post_id):
    for keyword_text in keywords:  
        keyword, created = Keyword.objects.get_or_create(text=keyword_text)
        keyword.relevance += 1
        keyword.frequency += 2
        keyword.context = ""  # For context, you might want to extract it from the text later
        keyword.save()
        
        # Associate keyword with post
        keyword.posts_keyword.add(post_id)



# Call the function to update keywords from posts
update_keywords_from_posts()
