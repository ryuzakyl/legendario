from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
import legendario

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'legendario_website.views.home', name='home'),
    # url(r'^legendario_website/', include('legendario_website.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    # home
    url(r'^$', 'legendario_website.views.home', name='home'),
)
