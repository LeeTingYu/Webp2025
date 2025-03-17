from django.db import models

# Create your models here.

class Course(models.Model):
    Department = models.CharField(max_length=100)
    CourseTitle = models.CharField(max_length=200)
    Instructor = models.CharField(max_length=100)

