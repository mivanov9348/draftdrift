from django import forms
from .models import World

class WorldForm(forms.ModelForm):
    class Meta:
        model = World
        fields = ['name', 'description', 'history', 'geography', 'cultures', 'magic_and_technology', 'religions_and_mythologies', 'notes', 'image']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 4}),
            'history': forms.Textarea(attrs={'rows': 4}),
            'geography': forms.Textarea(attrs={'rows': 4}),
            'cultures': forms.Textarea(attrs={'rows': 4}),
            'magic_and_technology': forms.Textarea(attrs={'rows': 4}),
            'religions_and_mythologies': forms.Textarea(attrs={'rows': 4}),
            'notes': forms.Textarea(attrs={'rows': 4}),
        }
