from django.shortcuts import render
from django.http import HttpResponse

from books.models import Book

# Create your views here.

def hello_view(request):
    return HttpResponse("<h1>Hello, My name is Douglas</h1>")

def book_list_view(request):
    books = Book.objects.all()
    user = request.user
    
    context = {
        "books": books,
        "user": user,
    }
    return render(request, "books/book_list.html", context)
