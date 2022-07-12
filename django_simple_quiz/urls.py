from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('javna_uprava/', include('javna_uprava.urls')),
    path('admin/', admin.site.urls),
]
