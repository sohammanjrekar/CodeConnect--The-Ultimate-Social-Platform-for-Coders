from django.db import models
from account.models import User, BaseModel
from django.utils import timezone
import re
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import spacy

# Load spaCy model
nlp = spacy.load("en_core_web_sm")
# Initialize VADER sentiment analyzer
analyzer = SentimentIntensityAnalyzer()


class Hashtag(BaseModel):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Keyword(models.Model):
    text = models.CharField(max_length=255, unique=True,default="")
    relevance = models.FloatField(default=0.0)  # Relevance score of the keyword
    frequency = models.PositiveIntegerField(default=0)  # Frequency of the keyword
    context = models.TextField(blank=True, null=True,default="")  # Contextual analysis of the keyword

    def __str__(self):
        return self.text
class Post(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='post_user')
    content = models.TextField()
    attach_files = models.TextField(blank=True,null=True)
    hashtags = models.ManyToManyField(Hashtag, related_name='posts', blank=True)
    keyword = models.ManyToManyField(Keyword, related_name='posts_keyword', blank=True)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    image = models.URLField(max_length=2000,null=True) 
    comment_count = models.PositiveIntegerField(default=0)  # New field for comment count
    is_active= models.BooleanField(default=0)
    
    def update_sentiment(self):
        # Rule-based sentiment analysis
        if re.search(r'good|excellent|positive', self.content, re.IGNORECASE):
            self.is_active = True
        elif re.search(r'bad|poor|negative', self.content, re.IGNORECASE):
            self.is_active = False
        else:
            # Lexicon-based sentiment analysis
            lexicon_score = analyzer.polarity_scores(self.content)["compound"]
            if lexicon_score >= 0.05:  # Tweak threshold based on your requirements
                self.is_active = True
            elif lexicon_score <= -0.05:
                self.is_active = False
            else:
                # Machine learning-based sentiment analysis with spaCy
                doc = nlp(self.content)
                sentiment_score = sum([token.sentiment for token in doc]) / len(doc)
                if sentiment_score > 0.1:
                    self.is_active = True
                elif sentiment_score < -0.1:
                    self.is_active = False
                else:
                    self.is_active = True  # Default to active if sentiment is neutral
        self.save()
    
    

    def update_comment_count(self):
        self.comment_count = self.comments.filter(is_active=True).count()
        self.save()

    def __str__(self):
        return f"Post by {self.user.username} (ID: {self.id})"

class UserBehavior(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming you have a User model in your 'account' app
    post = models.ForeignKey(Post, on_delete=models.CASCADE)  # Assuming you have a Post model in your 'post' app
    interaction_type = models.CharField(max_length=20,default="")  # Interaction type: e.g., like, comment, share
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.post.title} - {self.interaction_type}"


class Comment(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comment_user')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comment_post')
    content = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    
   

    def update_sentiment(self):
        # Rule-based sentiment analysis
        if re.search(r'good|excellent|positive', self.content, re.IGNORECASE):
            self.is_active = True
        elif re.search(r'bad|poor|negative', self.content, re.IGNORECASE):
            self.is_active = False
        else:
            # Lexicon-based sentiment analysis
            lexicon_score = analyzer.polarity_scores(self.content)["compound"]
            if lexicon_score >= 0.05:  # Tweak threshold based on your requirements
                self.is_active = True
            elif lexicon_score <= -0.05:
                self.is_active = False
            else:
                # Machine learning-based sentiment analysis with spaCy
                doc = nlp(self.content)
                sentiment_score = sum([token.sentiment for token in doc]) / len(doc)
                if sentiment_score > 0.1:
                    self.is_active = True
                elif sentiment_score < -0.1:
                    self.is_active = False
                else:
                    self.is_active = True  # Default to active if sentiment is neutral
        self.save()


    def update_sentiment(self):
        # Similar logic as Post.update_sentiment()
        pass

    def __str__(self):
        return f"Comment by {self.user.username} on Post {self.post.id} (ID: {self.id})"
