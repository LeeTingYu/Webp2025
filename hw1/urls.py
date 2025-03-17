from django.urls import path
from .views import course_list, add_course 

urlpatterns = [
    path('courselist/', course_list, name='course_list'), 
    path('addcourse/', add_course, name='add_course'), 
]
