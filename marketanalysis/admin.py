# admin.py's main function is registering databse models made in models.py to make it viewable in the django admin panel 
from django.contrib import admin
from .models import Stock

# Register your models here.
admin.site.register(Stock)