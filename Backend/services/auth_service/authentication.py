INSTALLED_APPS += [
    'rest_framework',
    'rest_framework_simplejwt',
    'services.auth_service',  # Authentication microservice
]

AUTH_USER_MODEL = 'auth_service.User'  # Use custom user model

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': 'ledgrbook123',
    'AUTH_HEADER_TYPES': ('Bearer',),
}
