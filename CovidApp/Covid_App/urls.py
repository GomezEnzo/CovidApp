from django.urls import path, include
from . import views
from django.contrib.auth.views import LoginView, LogoutView, redirect_to_login
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('', views.index, name='index'),
    path('save/', views.saveInfo, name='saveInfo'),
]