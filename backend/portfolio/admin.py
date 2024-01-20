# portfolio/admin.py
from django.contrib import admin
from .models import Project, ProjectCategory, Technology, ProjectImage, Resume

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'owner', 'start_date', 'end_date', 'is_published',)
    search_fields = ('title', 'owner__username',)
    list_filter = ('start_date', 'end_date', 'is_published', 'categories', 'technologies_used',)

class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)

class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ('project', 'image',)
    search_fields = ('project__title',)

class ResumeAdmin(admin.ModelAdmin):
    list_display = ('user', 'education', 'work_experience', 'skills', 'contact_information',)
    search_fields = ('user__username',)

admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectCategory, ProjectCategoryAdmin)
admin.site.register(Technology, TechnologyAdmin)
admin.site.register(ProjectImage, ProjectImageAdmin)
admin.site.register(Resume, ResumeAdmin)
