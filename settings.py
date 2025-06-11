# (Relevant parts only)
INSTALLED_APPS = [
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    'blog',
    'django.contrib.admin',
    'django.contrib.auth',
    ...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]

CORS_ALLOW_ALL_ORIGINS = True

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}