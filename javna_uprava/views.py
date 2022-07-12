from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from .models import Question
import random


def index(request):
    item = Question.objects.get(question_num=random.randint(1, 351))
    return HttpResponse(f'{item.question_num}. {item} --> {item.choice_set.get(correct_choice=True)}')
