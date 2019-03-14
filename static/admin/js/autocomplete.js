(function($***REMOVED*** {
    'use strict';
    var init = function($element, options***REMOVED*** {
        var settings = $.extend({
            ajax: {
                data: function(params***REMOVED*** {
                    return {
                        term: params.term,
                        page: params.page
                ***REMOVED***;
            ***REMOVED***
        ***REMOVED***
***REMOVED*** options***REMOVED***;
        $element.select2(settings***REMOVED***;
***REMOVED***;

    $.fn.djangoAdminSelect2 = function(options***REMOVED*** {
        var settings = $.extend({***REMOVED***, options***REMOVED***;
        $.each(this, function(i, element***REMOVED*** {
            var $element = $(element***REMOVED***;
            init($element, settings***REMOVED***;
    ***REMOVED******REMOVED***;
        return this;
***REMOVED***;

    $(function(***REMOVED*** {
        // Initialize all autocomplete widgets except the one in the template
        // form used when a new formset is added.
        $('.admin-autocomplete'***REMOVED***.not('[name*=__prefix__***REMOVED***'***REMOVED***.djangoAdminSelect2(***REMOVED***;
***REMOVED******REMOVED***;

    $(document***REMOVED***.on('formset:added', (function(***REMOVED*** {
        return function(event, $newFormset***REMOVED*** {
            return $newFormset.find('.admin-autocomplete'***REMOVED***.djangoAdminSelect2(***REMOVED***;
    ***REMOVED***;
***REMOVED******REMOVED***(this***REMOVED******REMOVED***;
***REMOVED***(django.jQuery***REMOVED******REMOVED***;
