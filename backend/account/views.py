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
from django.core import serializers
from django.db.models import Q
def get_user_by_username(request):
    query = request.GET.get('username', '')

    if query:
        # Filter users whose first name or last name contains the query
        users = User.objects.filter(Q(first_name__icontains=query) | Q(last_name__icontains=query))
        users_data = [
            {
                'id': user.id,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'avatar': user.avatar.url if user.avatar else '',  # Assuming 'avatar' is a FileField
                # Add other fields as needed
            }
            for user in users
        ]
        return JsonResponse({'users': users_data})  # Return JSON response with 'users' key
    else:
        return JsonResponse({'error': 'Query parameter is required'})
