from django.conf.urls import url, include
from rest_framework import routers
from dashboard.quickstart import views
from django.contrib import admin
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'signal', views.SignalViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include(
        'rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^dashboard/',  TemplateView.as_view(template_name="dashboard.html")),
]
