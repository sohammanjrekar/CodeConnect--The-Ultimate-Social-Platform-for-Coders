# projectrecommendation/admin.py
from django.contrib import admin
from .models import Project, ProgrammingLanguage, Tool, Tag

admin.site.register(Project)
admin.site.register(ProgrammingLanguage)
admin.site.register(Tool)
admin.site.register(Tag)
