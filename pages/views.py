""" pages/views.py """
from django.shortcuts import render


def index(request):
    """ Render index page """
    return render(request, 'pages/index.html')
