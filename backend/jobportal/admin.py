# jobportal/admin.py
from django.contrib import admin
from .models import JobPosting, JobCategory, Skill, Benefit

admin.site.register(JobPosting)
admin.site.register(JobCategory)
admin.site.register(Skill)
admin.site.register(Benefit)
