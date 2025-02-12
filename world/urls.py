from django.urls import path
from . import views

app_name = 'world'

urlpatterns = [
    path('world/create/', views.create_world, name='create_world'),
]
