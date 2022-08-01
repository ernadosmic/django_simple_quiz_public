from django.shortcuts import render


def index(request):
    return render(request, 'home/index.html')


def brcko(request):
    return render(request, 'home/brcko_index.html')


def federacija(request):
    return render(request, 'home/federacija_index.html')


def rs(request):
    return render(request, 'home/rs_index.html')


def o_nama(request):
    return render(request, 'home/o-nama.html')


def uvjeti_koristenja(request):
    return render(request, 'home/uvjeti-koristenja.html')


def politika_privatnosti(request):
    return render(request, 'home/politika-privatnosti.html')


def pomoc(request):
    return render(request, 'home/pomoc.html')
