from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey('users.User', on_delete=models.CASCADE)
    description = models.TextField()
    published_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    pages = models.IntegerField()
    price = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )
    cover_image = models.ImageField(
        upload_to='book_covers/', blank=True, null=True
    )
    language = models.CharField(max_length=30)

    def __str__(self):
        return self.title
    
