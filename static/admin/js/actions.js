/*global gettext, interpolate, ngettext*/
(function($***REMOVED*** {
    'use strict';
    var lastChecked;

    $.fn.actions = function(opts***REMOVED*** {
        var options = $.extend({***REMOVED***, $.fn.actions.defaults, opts***REMOVED***;
        var actionCheckboxes = $(this***REMOVED***;
        var list_editable_changed = false;
        var showQuestion = function(***REMOVED*** {
            $(options.acrossClears***REMOVED***.hide(***REMOVED***;
            $(options.acrossQuestions***REMOVED***.show(***REMOVED***;
            $(options.allContainer***REMOVED***.hide(***REMOVED***;
***REMOVED***
        showClear = function(***REMOVED*** {
            $(options.acrossClears***REMOVED***.show(***REMOVED***;
            $(options.acrossQuestions***REMOVED***.hide(***REMOVED***;
            $(options.actionContainer***REMOVED***.toggleClass(options.selectedClass***REMOVED***;
            $(options.allContainer***REMOVED***.show(***REMOVED***;
            $(options.counterContainer***REMOVED***.hide(***REMOVED***;
***REMOVED***
        reset = function(***REMOVED*** {
            $(options.acrossClears***REMOVED***.hide(***REMOVED***;
            $(options.acrossQuestions***REMOVED***.hide(***REMOVED***;
            $(options.allContainer***REMOVED***.hide(***REMOVED***;
            $(options.counterContainer***REMOVED***.show(***REMOVED***;
***REMOVED***
        clearAcross = function(***REMOVED*** {
            reset(***REMOVED***;
            $(options.acrossInput***REMOVED***.val(0***REMOVED***;
            $(options.actionContainer***REMOVED***.removeClass(options.selectedClass***REMOVED***;
***REMOVED***
        checker = function(checked***REMOVED*** {
            if (checked***REMOVED*** {
                showQuestion(***REMOVED***;
        ***REMOVED*** else {
                reset(***REMOVED***;
        ***REMOVED***
            $(actionCheckboxes***REMOVED***.prop("checked", checked***REMOVED***
                .parent(***REMOVED***.parent(***REMOVED***.toggleClass(options.selectedClass, checked***REMOVED***;
***REMOVED***
        updateCounter = function(***REMOVED*** {
            var sel = $(actionCheckboxes***REMOVED***.filter(":checked"***REMOVED***.length;
            // data-actions-icnt is defined in the generated HTML
            // and contains the total amount of objects in the queryset
            var actions_icnt = $('.action-counter'***REMOVED***.data('actionsIcnt'***REMOVED***;
            $(options.counterContainer***REMOVED***.html(interpolate(
            ngettext('%(sel***REMOVED***s of %(cnt***REMOVED***s selected', '%(sel***REMOVED***s of %(cnt***REMOVED***s selected', sel***REMOVED***, {
                sel: sel,
                cnt: actions_icnt
    ***REMOVED*** true***REMOVED******REMOVED***;
            $(options.allToggle***REMOVED***.prop("checked", function(***REMOVED*** {
                var value;
                if (sel === actionCheckboxes.length***REMOVED*** {
                    value = true;
                    showQuestion(***REMOVED***;
            ***REMOVED*** else {
                    value = false;
                    clearAcross(***REMOVED***;
            ***REMOVED***
                return value;
        ***REMOVED******REMOVED***;
    ***REMOVED***;
        // Show counter by default
        $(options.counterContainer***REMOVED***.show(***REMOVED***;
        // Check state of checkboxes and reinit state if needed
        $(this***REMOVED***.filter(":checked"***REMOVED***.each(function(i***REMOVED*** {
            $(this***REMOVED***.parent(***REMOVED***.parent(***REMOVED***.toggleClass(options.selectedClass***REMOVED***;
            updateCounter(***REMOVED***;
            if ($(options.acrossInput***REMOVED***.val(***REMOVED*** === 1***REMOVED*** {
                showClear(***REMOVED***;
        ***REMOVED***
    ***REMOVED******REMOVED***;
        $(options.allToggle***REMOVED***.show(***REMOVED***.on('click', function(***REMOVED*** {
            checker($(this***REMOVED***.prop("checked"***REMOVED******REMOVED***;
            updateCounter(***REMOVED***;
    ***REMOVED******REMOVED***;
        $("a", options.acrossQuestions***REMOVED***.on('click', function(event***REMOVED*** {
            event.preventDefault(***REMOVED***;
            $(options.acrossInput***REMOVED***.val(1***REMOVED***;
            showClear(***REMOVED***;
    ***REMOVED******REMOVED***;
        $("a", options.acrossClears***REMOVED***.on('click', function(event***REMOVED*** {
            event.preventDefault(***REMOVED***;
            $(options.allToggle***REMOVED***.prop("checked", false***REMOVED***;
            clearAcross(***REMOVED***;
            checker(0***REMOVED***;
            updateCounter(***REMOVED***;
    ***REMOVED******REMOVED***;
        lastChecked = null;
        $(actionCheckboxes***REMOVED***.on('click', function(event***REMOVED*** {
            if (!event***REMOVED*** { event = window.event; ***REMOVED***
            var target = event.target ? event.target : event.srcElement;
            if (lastChecked && $.data(lastChecked***REMOVED*** !== $.data(target***REMOVED*** && event.shiftKey === true***REMOVED*** {
                var inrange = false;
                $(lastChecked***REMOVED***.prop("checked", target.checked***REMOVED***
                    .parent(***REMOVED***.parent(***REMOVED***.toggleClass(options.selectedClass, target.checked***REMOVED***;
                $(actionCheckboxes***REMOVED***.each(function(***REMOVED*** {
                    if ($.data(this***REMOVED*** === $.data(lastChecked***REMOVED*** || $.data(this***REMOVED*** === $.data(target***REMOVED******REMOVED*** {
                        inrange = (inrange***REMOVED*** ? false : true;
                ***REMOVED***
                    if (inrange***REMOVED*** {
                        $(this***REMOVED***.prop("checked", target.checked***REMOVED***
                            .parent(***REMOVED***.parent(***REMOVED***.toggleClass(options.selectedClass, target.checked***REMOVED***;
                ***REMOVED***
            ***REMOVED******REMOVED***;
        ***REMOVED***
            $(target***REMOVED***.parent(***REMOVED***.parent(***REMOVED***.toggleClass(options.selectedClass, target.checked***REMOVED***;
            lastChecked = target;
            updateCounter(***REMOVED***;
    ***REMOVED******REMOVED***;
        $('form#changelist-form table#result_list tr'***REMOVED***.on('change', 'td:gt(0***REMOVED*** :input', function(***REMOVED*** {
            list_editable_changed = true;
    ***REMOVED******REMOVED***;
        $('form#changelist-form button[name="index"***REMOVED***'***REMOVED***.on('click', function(event***REMOVED*** {
            if (list_editable_changed***REMOVED*** {
                return confirm(gettext("You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost."***REMOVED******REMOVED***;
        ***REMOVED***
    ***REMOVED******REMOVED***;
        $('form#changelist-form input[name="_save"***REMOVED***'***REMOVED***.on('click', function(event***REMOVED*** {
            var action_changed = false;
            $('select option:selected', options.actionContainer***REMOVED***.each(function(***REMOVED*** {
                if ($(this***REMOVED***.val(***REMOVED******REMOVED*** {
                    action_changed = true;
            ***REMOVED***
        ***REMOVED******REMOVED***;
            if (action_changed***REMOVED*** {
                if (list_editable_changed***REMOVED*** {
                    return confirm(gettext("You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action."***REMOVED******REMOVED***;
            ***REMOVED*** else {
                    return confirm(gettext("You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button."***REMOVED******REMOVED***;
            ***REMOVED***
        ***REMOVED***
    ***REMOVED******REMOVED***;
***REMOVED***;
    /* Setup plugin defaults */
    $.fn.actions.defaults = {
        actionContainer: "div.actions",
        counterContainer: "span.action-counter",
        allContainer: "div.actions span.all",
        acrossInput: "div.actions input.select-across",
        acrossQuestions: "div.actions span.question",
        acrossClears: "div.actions span.clear",
        allToggle: "#action-toggle",
        selectedClass: "selected"
***REMOVED***;
    $(document***REMOVED***.ready(function(***REMOVED*** {
        var $actionsEls = $('tr input.action-select'***REMOVED***;
        if ($actionsEls.length > 0***REMOVED*** {
            $actionsEls.actions(***REMOVED***;
    ***REMOVED***
***REMOVED******REMOVED***;
***REMOVED******REMOVED***(django.jQuery***REMOVED***;
