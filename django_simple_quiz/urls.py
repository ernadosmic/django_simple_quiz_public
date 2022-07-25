from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('brcko/javna_uprava_vss_brcko/',
         include('javna_uprava_vss_brcko.urls')),
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
]
