from django.urls import path
from . import views

app_name = 'home'
urlpatterns = [
    path('', views.index, name='index'),
    path('brcko/', views.brcko, name='brcko'),
    path('federacija/', views.federacija, name='federacija'),
    path('rs/', views.rs, name='rs'),
]
