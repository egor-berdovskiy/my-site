from django.urls import path
from .views import ProjectsAPI


urlpatterns = [
    path('projects/', ProjectsAPI.as_view(), name='projects_api')
]
