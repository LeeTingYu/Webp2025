from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name', None)  # 這行縮進修正

        if my_name:
            retValue = {"data": "Hello " + my_name}  # 加上空格，避免"HelloJohn"
            return Response(retValue, status=status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )
