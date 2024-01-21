# codecollaboration/admin.py
from django.contrib import admin
from .models import CodeSnippet, Tag, CodeReview, CodeAttachment, Comment

admin.site.register(CodeSnippet)
admin.site.register(Tag)
admin.site.register(CodeReview)
admin.site.register(CodeAttachment)
admin.site.register(Comment)
