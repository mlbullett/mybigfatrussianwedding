#!/usr/bin/env python
***REMOVED***
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wedding.settings'***REMOVED***
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ***REMOVED*** from exc
    execute_from_command_line(sys.argv***REMOVED***
