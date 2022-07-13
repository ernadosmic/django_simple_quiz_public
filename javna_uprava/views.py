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
    question_list = []
    total_questions = Question.objects.all().count()
    random_array = random.sample(
        range(1, total_questions + 1), question_num_in_quiz)

    for i in random_array:
        q = Question.objects.get(question_num=i)
        question_list.append(q)

    context = {
        'total_questions': total_questions,
        'question_num_in_quiz': question_num_in_quiz,
        'random_array': random_array,
        'question_list': question_list,
    }

    # for i in range (question_num_in_quiz):
    return render(request, 'javna_uprava/quiz.html', context)
    return HttpResponse(f'{item.question_num}. {item} --> {item.choice_set.get(correct_choice=True)}')
