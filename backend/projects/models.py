from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=50)


class Project(models.Model):
    title = models.CharField(max_length=30, null=False)
    example = models.CharField(max_length=30, null=True)
    url = models.CharField(null=True)
    description = models.CharField(max_length=160)

    category = models.ForeignKey(Category)
