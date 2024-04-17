
import os
from pathlib import Path
from datetime import timedelta 
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
import cloudinary
          
cloudinary.config( 
  cloud_name = 'dp6odhftt',
  api_key ='834371186813391',
  api_secret = 'QPxYCBttNcO25u-vHVi6iOclkbw'
)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-4m)dh2&7nbl@%f@uhotp=)pjp(0ato$hemz@+z5clb!(vns)^+'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


AUTH__USER_MODEL="account.User"

# Application definition

SIMPLE_JWT = {  
            'ACCESS_TOKEN_LIFETIME': timedelta(minutes=30),
            'REFERESH_TOKEN_LIFETIME': timedelta(days=180),
            'ROTATE_REFRESH_TOKENS': False,
            }


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',),
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'drf_yasg',
    'corsheaders',
]
EXTERNAL_APPS = [
    'botchats',
    'account',
    'forum',
    'portfolio',
    'codingchallenges',
    'jobportal',
    'LanguageExchange',
    'learningresources',
    'MentorshipMatching',
    'search',
    'notification',
    'ArtGallery',
    'blog',
    'codereview',
    'post',
    'ProjectRecommendations',
    'chat'
]

INSTALLED_APPS += EXTERNAL_APPS

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'codeconnect',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',  # Or your MySQL server IP address
        'PORT': '3306',       # MySQL default port
    }
}



# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


#cors
CORS_ALLOWED_ORIGINS=[
    'http://localhost:3000',
    'http://localhost:8000'
]
CSRF_TRUSTED_ORIGINS=[
    'http://localhost:3000',
    'http://localhost:8000'
]

CORS_ALLOWED_WHITELIST=[
    'http://localhost:3000',
    'http://localhost:8000'
]
import pusher

pusher_client = pusher.Pusher(
  app_id='1789204',
  key='c1da8ffce378b321fdd3',
  secret='2a65418ddb3ecbd2f166',
  cluster='ap2',
  ssl=True
)
