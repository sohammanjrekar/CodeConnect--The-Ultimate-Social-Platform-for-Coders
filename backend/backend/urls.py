
from django.contrib import admin
from django.urls import path,include
from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
     
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
   path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('admin/', admin.site.urls),
   # path('forum/', include('forum.urls')),
   # path('portfolio/',include('portfolio.urls')),
   # path('codingchallenges/',include('codingchallenges.urls')),
   path('jobportal/',include('jobportal.urls')),
   # path('LanguageExchange/',include('LanguageExchange.urls')),
   # path('learningresources/',include('learningresources.urls')),
   path('MentorshipMatching/',include('MentorshipMatching.urls')),
   # path('search/',include('search.urls')),
   # path('notification/',include('notification.urls')),
   # path('chats/',include('chat.urls')),
   # path('botchats/',include('botchats.urls')),
   path('blogs/',include('blog.urls')),
   path('post/',include('post.urls')),
   path('account/',include('account.urls')),
   # path('codereivew/',include('codereview.urls')),
   ]