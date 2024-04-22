# codingchallenges/admin.py
from django.contrib import admin
from .models import CodingChallenge, Tag, TestCase

admin.site.register(CodingChallenge)
admin.site.register(Tag)
admin.site.register(TestCase)

