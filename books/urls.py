from django.urls import path

from books.views import book_list_view, hello_view


urlpatterns = [
    path("books/", book_list_view, name="book-list"),
    path("hello/", hello_view, name="hello"),
]