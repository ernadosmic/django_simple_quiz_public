from django.urls import path
from . import views

app_name = 'javna_uprava_vss_brcko'
urlpatterns = [
    path('', views.index, name='index'),
    path('quiz/<int:question_num_in_quiz>/<rand>/',
         views.quiz, name='quiz'),
    path('results/', views.results, name='results'),
]
