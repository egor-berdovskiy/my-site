from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=50)
    active = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=30, null=False)
    example = models.CharField(max_length=30, null=True)
    url = models.TextField(null=True)
    description = models.CharField(max_length=160)

    category = models.ForeignKey(Category, related_name='projects', on_delete=models.CASCADE)

    active = models.BooleanField(default=False, null=False)
