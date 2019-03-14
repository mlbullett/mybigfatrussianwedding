(function($***REMOVED*** {
    'use strict';
    $(function(***REMOVED*** {
        $('.cancel-link'***REMOVED***.on('click', function(e***REMOVED*** {
            e.preventDefault(***REMOVED***;
            if (window.location.search.indexOf('&_popup=1'***REMOVED*** === -1***REMOVED*** {
                window.history.back(***REMOVED***;  // Go back if not a popup.
        ***REMOVED*** else {
                window.close(***REMOVED***; // Otherwise, close the popup.
        ***REMOVED***
    ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;
***REMOVED******REMOVED***(django.jQuery***REMOVED***;
