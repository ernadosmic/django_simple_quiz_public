from multiprocessing import context
from sre_constants import SUCCESS
from django.http import HttpResponse
from django.shortcuts import render
from .models import Question
import random


def index(request):
    total_questions = Question.objects.all().count()
    return render(request, 'cistacice_brcko/index.html', {'total_questions': total_questions})


def quiz(request, question_num_in_quiz, rand):
    print(rand)
    print(type(rand))
    question_list = []
    total_questions = Question.objects.all().count()

    if rand == "rand":
        random_array = random.sample(
            range(1, total_questions + 1), question_num_in_quiz)
    else:
        random_array = range(1, total_questions + 1)

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
    return render(request, 'cistacice_brcko/quiz.html', context)
    return HttpResponse(f'{item.question_num}. {item} --> {item.choice_set.get(correct_choice=True)}')


def results(request):
    pass
