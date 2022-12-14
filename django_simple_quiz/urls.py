from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView

urlpatterns = [
    path('brcko/javna_uprava_vss_brcko/',
         include('javna_uprava_vss_brcko.urls')),
    path('brcko/namjestenik_brcko/',
         include('namjestenik_brcko.urls')),
    path('brcko/cistacice_brcko/',
         include('cistacice_brcko.urls')),
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
    path(
        "robots.txt",
        TemplateView.as_view(template_name="robots.txt",
                             content_type="text/plain"),
    ),
]
