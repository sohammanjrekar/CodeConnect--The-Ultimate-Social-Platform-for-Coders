# codingchallenges/admin.py
from django.contrib import admin
from .models import CodingChallenge, Tag, TestCase, Badge

admin.site.register(CodingChallenge)
admin.site.register(Tag)
admin.site.register(TestCase)
admin.site.register(Badge)
