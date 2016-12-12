from django.contrib.auth.models import User, Group
from .models import Signal
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView, DestroyAPIView
from dashboard.quickstart.serializers import (
    UserSerializer, GroupSerializer, SignalSerializer)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class SignalViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Signal to be viewed or edited.
    """
    queryset = Signal.objects.all()
    serializer_class = SignalSerializer


class SignalCreateAPIView(CreateAPIView):
    """
    API endpoint that allows Signal to be created.
    """
    queryset = Signal.objects.all()
    serializer_class = SignalSerializer


class SignalDestroyAPIView(DestroyAPIView):
    """
    API endpoint that allows Signal to be destroyed.
    """
    queryset = Signal.objects.all()
    serializer_class = SignalSerializer
