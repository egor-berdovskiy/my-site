from django.shortcuts import render
from .serializers import CategorySerializer, ProjectSerializer
from .models import Category
from rest_framework.views import APIView
from rest_framework.response import Response


class ProjectsAPI(APIView):
    def get(self, request):
        categories = Category.objects.filter(active=True)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
