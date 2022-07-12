from django.urls import path
from . import views

app_name = 'javna_uprava'
urlpatterns = [
    path('', views.index, name='index'),
]
