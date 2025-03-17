from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
import json
import logging


from .models import Course

logger = logging.getLogger('django')

@api_view(['POST'])
def add_course(request):
    Department = request.data.get('Department' , '')
    CourseTitle = request.data.get('CourseTitle' , '')
    Instructor = request.data.get('Instructor' , '')

    if Department and CourseTitle and Instructor:

        new_course = Course()
        new_course.Department = Department
        new_course.CourseTitle = CourseTitle
        new_course.Instructor = Instructor
        new_course.save()

        logger.debug(f"New course added: {CourseTitle} ")
        
        return Response({"data": f"{CourseTitle} added successfully"}, status=status.HTTP_201_CREATED)
    else:
        # 如果參數缺少，返回錯誤
        return Response({"res": "All parameters (Department, CourseTitle, Instructor) are required"}, 
                        status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all().values()

    return JsonResponse(list(courses), safe=False)
   