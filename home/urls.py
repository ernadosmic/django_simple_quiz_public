from django.urls import path
from . import views

app_name = 'home'
urlpatterns = [
    path('', views.index, name='index'),
    path('brcko/', views.brcko, name='brcko'),
    path('federacija/', views.federacija, name='federacija'),
    path('rs/', views.rs, name='rs'),
    path('o_nama/', views.o_nama, name='o_nama'),
    path('uvjeti_koristenja/', views.uvjeti_koristenja, name='uvjeti_koristenja'),
    path('politika_privatnosti/', views.politika_privatnosti,
         name='politika_privatnosti'),
    path('pomoc/', views.pomoc, name='pomoc'),
]
