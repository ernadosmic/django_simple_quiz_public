from django.shortcuts import render


def index(request):
    return render(request, 'home/index.html')


def brcko(request):
    return render(request, 'home/brcko.html')


def federacija(request):
    return render(request, 'home/federacija.html')


def rs(request):
    return render(request, 'home/rs.html')
