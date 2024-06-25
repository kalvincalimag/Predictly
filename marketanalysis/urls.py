from django.contrib import admin
from django.urls import path, include
from . import views
from .views import feedback_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('signup', views.signup, name='signup'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
    path('signin', views.signin, name='signin'),
    path('signout', views.signout, name='signout'),

    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('reset_password/<uidb64>/<token>/', views.reset_password, name='reset_password'),
    path('password_reset_done/', views.password_reset_done, name='password_reset_done'),
    path('password_reset_complete/', views.password_reset_complete, name='password_reset_complete'),

    path('faq/', views.faq, name='faq'),
    path('feedback/', feedback_view, name='feedback_view'),

    # path('my_watchlist', views.my_watchlist, name="my_watchlist"),
    # path('delete/<stock_id>', views.delete, name="delete"),
    path('market-glossary/', views.market_glossary, name='market-glossary'),
    
    path('last-trade-prices/<str:ticker_symbol>/', views.LastTradePricesAPIView.as_view(), name='last-trade-prices'),
    path('automated-crossover/<str:ticker_symbol>/', views.AutomatedCrossoverAPIView.as_view(), name='automated-crossover'),
    path('prediction-vs-actual/<str:ticker_symbol>/', views.PredictionVsActualAPIView.as_view(), name='prediction-vs-actual')
] 