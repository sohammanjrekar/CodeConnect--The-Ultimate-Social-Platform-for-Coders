# codecollaboration/serializers.py
from rest_framework import serializers
from .models import CodeSnippet, Tag, CodeReview, CodeAttachment, Comment

class CodeSnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeSnippet
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
        ref_name = 'CodeReviewTag'

class CodeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeReview
        fields = '__all__'

class CodeAttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeAttachment
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        ref_name = 'CodeReviewComment'
