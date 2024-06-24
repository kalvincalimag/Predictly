from django import forms
from .models import Stock

# Email for Password Reset Form 
class PasswordResetForm(forms.Form):
    email = forms.EmailField(label='Email', max_length=254, widget=forms.EmailInput(attrs={'autocomplete': 'email', 'autofocus': True}))

# Add Stock to Watchlist Form    
class StockForm(forms.ModelForm):
    class Meta:
        model = Stock
        fields = [
            "ticker"
        ]

# Submit Feedback Form
class FeedbackForm(forms.Form):
    email = forms.EmailField(label='Your Email')
    feedback = forms.CharField(widget=forms.Textarea, label='Feedback')