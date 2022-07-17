from django.urls import path
from . import views

app_name = 'javna_uprava'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_num_in_quiz>/quiz/', views.quiz, name='quiz'),
    path('results/', views.results, name='results'),
]
