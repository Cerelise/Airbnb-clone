from django.http import JsonResponse
from rest_framework.decorators import api_view
from useraccount.models import User

from .models import Conversation
from .serializers import (ConversationDetailSerializer,
                          ConversationListSerializer,
                          ConversationMessageSerializer)


@api_view(['GET'])
def Conversation_list(request):
    # 获取当前用户的聊天
    # User对象通过relate_name(conversations)反向查询Conversation的users字段
    # conversation_list = request.user.conversations.all()
    # print(conversation_list)
    serializer = ConversationListSerializer(request.user.conversations.all(),many=True)
    # print(serializer.data)

    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def conversations_detail(request,pk):
    conversation = request.user.conversations.get(pk=pk)
    print(conversation)
    conversation_serializer = ConversationDetailSerializer(conversation,many=False)
    messages_serializer = ConversationMessageSerializer(conversation.messages.all(),many=True)

    return JsonResponse({
      'conversation':conversation_serializer.data,
      'messages':messages_serializer.data
    },safe=False)

    # return JsonResponse(conversation_serializer.data)

@api_view(['GET'])
def conversations_start(request, user_id):
    # step 1 获取user_id的用户的所有聊天 发起聊天前你要找到这个人
    # step 2 在这个用户的所有对话中检查自己是否存在
    conversations = Conversation.objects.filter(users__in=[user_id]).filter(users__in=[request.user.id])

    if conversations.count() > 0:
        conversation = conversations.first()
        
        return JsonResponse({'success': True, 'conversation_id': conversation.id})
    else:
        user = User.objects.get(pk=user_id)
        conversation = Conversation.objects.create()
        conversation.users.add(request.user)
        conversation.users.add(user)

        return JsonResponse({'success': True, 'conversation_id': conversation.id})