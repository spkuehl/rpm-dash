from django.contrib import admin
from .models import Signal


class SignalAdmin(admin.ModelAdmin):
    readonly_fields = ("time_recieved",)
    list_display = ('__str__', 'time_recieved',)


admin.site.register(Signal, SignalAdmin)
