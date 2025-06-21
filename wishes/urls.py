from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get-new-wish/', views.get_new_wish, name='get_new_wish'),
] 