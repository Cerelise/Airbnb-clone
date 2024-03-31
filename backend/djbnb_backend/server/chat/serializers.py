from rest_framework import serializers
from useraccount.serializers import UserDetailSerializer

from .models import Conversation, ConversationMessage


class ConversationListSerializer(serializers.ModelSerializer):
    users = UserDetailSerializer(many=True,read_only=True)

    class Meta:
        model = Conversation
        fields = ('id','users','modified_at')


class ConversationDetailSerializer(serializers.ModelSerializer):
    users = UserDetailSerializer(many=True,read_only=True)

    class Meta:
        model = Conversation
        fields = ('id','users','modified_at')

class ConversationMessageSerializer(serializers.ModelSerializer):
    sent_to = UserDetailSerializer(many=False,read_only=True)
    created_by = UserDetailSerializer(many=False,read_only=True)

    class Meta:
        model = ConversationMessage
        fields = ('id','text','sent_to',"created_by",)