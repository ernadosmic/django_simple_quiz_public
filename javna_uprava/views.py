from multiprocessing import context
from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from .models import Question
import random


def index(request):
    total_questions = Question.objects.all().count()
    return render(request, 'javna_uprava/index.html', {'total_questions': total_questions})


def quiz(request, question_num_in_quiz):
    questions = Question.objects
    number_of_questions = questions.all().count()
    item = Question.objects.get(question_num=random.randint(
        1, number_of_questions))
    return render(request, 'javna_uprava/quiz.html')
    return HttpResponse(f'{item.question_num}. {item} --> {item.choice_set.get(correct_choice=True)}')
