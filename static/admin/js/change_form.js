/*global showAddAnotherPopup, showRelatedObjectLookupPopup showRelatedObjectPopup updateRelatedObjectLinks*/

(function($***REMOVED*** {
    'use strict';
    $(document***REMOVED***.ready(function(***REMOVED*** {
        var modelName = $('#django-admin-form-add-constants'***REMOVED***.data('modelName'***REMOVED***;
        $('body'***REMOVED***.on('click', '.add-another', function(e***REMOVED*** {
            e.preventDefault(***REMOVED***;
            var event = $.Event('django:add-another-related'***REMOVED***;
            $(this***REMOVED***.trigger(event***REMOVED***;
            if (!event.isDefaultPrevented(***REMOVED******REMOVED*** {
                showAddAnotherPopup(this***REMOVED***;
        ***REMOVED***
    ***REMOVED******REMOVED***;

        if (modelName***REMOVED*** {
            $('form#' + modelName + '_form :input:visible:enabled:first'***REMOVED***.focus(***REMOVED***;
    ***REMOVED***
***REMOVED******REMOVED***;
***REMOVED******REMOVED***(django.jQuery***REMOVED***;
