# views.py

from django.db.models import Q
from search.models import *
from search.ml import *
from django.shortcuts import render
def global_search(request):
    query = request.GET.get('q', '')
    user = request.user if request.user.is_authenticated else None

    # Update or create user search history
    if user and query:
        search_history, created = UserSearchHistory.objects.get_or_create(user=user, query=query)
        if not created:
            search_history.count += 1
            search_history.save()

    # Get the user's most frequent search query
    most_frequent_query = UserSearchHistory.objects.filter(user=user).values('query').annotate(count=Count('query')).order_by('-count').first()

    # Perform search based on the most frequent query
    recommended_results = generate_recommendations(query, UserSearchHistory.objects.filter(user=user))

    # Rest of the search logic
    blog_results = BlogPost.objects.filter(
        Q(title__icontains=query) | Q(content__icontains=query),
        is_published=True
    )

    job_results = JobPosting.objects.filter(
        Q(title__icontains=query) | Q(description__icontains=query),
        is_active=True
    )

    user_results = User.objects.filter(
        Q(username__icontains=query) | Q(first_name__icontains=query) | Q(last_name__icontains=query)
    )

    # ... Additional model results can be added as needed

    context = {
        'query': query,
        'blog_results': blog_results,
        'job_results': job_results,
        'user_results': user_results,
        'recommended_results': recommended_results,
    }

    return render(request, 'search_results.html', context)
