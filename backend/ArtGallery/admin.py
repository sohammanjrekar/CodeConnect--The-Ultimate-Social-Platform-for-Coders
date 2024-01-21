# artgallery/admin.py
from django.contrib import admin
from .models import Tag, DesignerProfile, Gallery, Image, Comment, ContactRequest

admin.site.register(Tag)
admin.site.register(DesignerProfile)
admin.site.register(Gallery)
admin.site.register(Image)
admin.site.register(Comment)
admin.site.register(ContactRequest)
