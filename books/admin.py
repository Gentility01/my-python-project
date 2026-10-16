from django.contrib import admin
from books.models import Book
# Register your models here.

class BookAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "price", "published_date", "language")
    search_fields = ("title", "author", "price")
    
admin.site.register(Book, BookAdmin)