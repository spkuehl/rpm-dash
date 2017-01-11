from .models import Signal
from rest_framework import viewsets
from dashboard.quickstart.serializers import SignalSerializer
from django.utils import timezone


class SignalViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Signal to be viewed or edited.
    """
    queryset = Signal.objects.filter(
        time_recieved__startswith=timezone.now().date())
    serializer_class = SignalSerializer
