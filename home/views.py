from django.shortcuts import render_to_response
from legendario_website.settings import STATIC_URL


def home(request):
    return render_to_response('home.html', {'STATIC_URL': STATIC_URL})