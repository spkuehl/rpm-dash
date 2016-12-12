from django.contrib.auth.models import User, Group
from .models import Signal
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class SignalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Signal
        fields = ('id', 'time_recieved',)
