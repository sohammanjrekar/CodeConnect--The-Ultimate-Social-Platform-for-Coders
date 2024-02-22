# blog/serializers.py
from rest_framework import serializers
from .models import Category, Tag, BlogPost, Comment

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
        ref_name = 'BlogTag'

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

# blog/serializers.py


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        # Set a unique ref_name for this serializer
        ref_name = 'BlogComment'
