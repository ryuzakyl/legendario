from django.conf.urls import patterns, url



urlpatterns = patterns('',
    # home
    url(r'^$', 'home.views.home', name='home'),
)
