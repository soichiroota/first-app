from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.trailing_slash = '/?'

router.register('users', views.UserViewSet)
router.register('books', views.BookViewSet)

app_name = 'api'
urlpatterns = [
    path('', include(router.urls)),
]
