from django.http import HttpResponse
from django.shortcuts import render

from account.models import User


def activateemail(request):
    email = request.GET.get('email', '')
    id = request.GET.get('id', '')

    if email and id:
        user = User.objects.get(id=id, email=email)
        user.is_active = True
        user.save()
    
        return HttpResponse('The user is now activated. You can go ahead and log in!')
    else:
        return HttpResponse('The parameters is not valid!')
from django.http import JsonResponse
def get_user_by_username(request):
    username = request.GET.get('username', '')

    if username:
        users = User.objects.filter(username__icontains=username)
        users_data = [{'id': user.id, 'username': user.username} for user in users]
        return JsonResponse({'users': users_data})
    else:
        return JsonResponse({'error': 'No username provided'})