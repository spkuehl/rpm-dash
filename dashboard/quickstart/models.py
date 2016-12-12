from django.db import models


class Signal(models.Model):
    time_recieved = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return '{}'.format(self.pk)
