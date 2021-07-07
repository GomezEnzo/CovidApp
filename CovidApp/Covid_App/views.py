from django.shortcuts import redirect, render
from .models import *

# Create your views here.
def index(request):
    return render(request, 'layout.html')

def saveInfo(request):
    if request.method == 'POST':
        info = Info(pais=request.POST['country'], casosNuevos = request.POST['nuevos'], casosCriticos=request.POST['criticos'], casosRecuperados = request.POST['recuperados'], casosActivos = request.POST['activos'], casosTotales=request.POST['total'])
        info.save()
    return redirect('index')