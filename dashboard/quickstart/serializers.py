from .models import Signal
from rest_framework import serializers


class SignalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Signal
        fields = ('id', 'time_recieved',)
