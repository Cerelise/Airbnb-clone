from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.response import Response

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def testApi(request):
    if request.method == "POST":
        data = request.data
        print(data)

        response_data = {
            'message': 'ok'
        }

        return Response(response_data)
    else:
        response_data = {
            'message': 'post'
        }
        return Response(response_data)

