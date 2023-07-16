from rest_framework import serializers
from .models import Category, Project


class ActiveSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = data.filter(active=True)
        return super().to_representation(data)


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('title', 'example', 'url', 'description', 'active')
        list_serializer_class = ActiveSerializer


class CategorySerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='title', read_only=True)
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('category', 'projects', 'active')
        list_serializer_class = ActiveSerializer
