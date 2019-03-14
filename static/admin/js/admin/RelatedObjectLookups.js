/*global SelectBox, interpolate*/
// Handles related-objects functionality: lookup link for raw_id_fields
// and Add Another links.

(function($***REMOVED*** {
    'use strict';

    // IE doesn't accept periods or dashes in the window name, but the element IDs
    // we use to generate popup window names may contain them, therefore we map them
    // to allowed characters in a reversible way so that we can locate the correct
    // element when the popup window is dismissed.
    function id_to_windowname(text***REMOVED*** {
        text = text.replace(/\./g, '__dot__'***REMOVED***;
        text = text.replace(/\-/g, '__dash__'***REMOVED***;
        return text;
***REMOVED***

    function windowname_to_id(text***REMOVED*** {
        text = text.replace(/__dot__/g, '.'***REMOVED***;
        text = text.replace(/__dash__/g, '-'***REMOVED***;
        return text;
***REMOVED***

    function showAdminPopup(triggeringLink, name_regexp, add_popup***REMOVED*** {
        var name = triggeringLink.id.replace(name_regexp, ''***REMOVED***;
        name = id_to_windowname(name***REMOVED***;
        var href = triggeringLink.href;
        if (add_popup***REMOVED*** {
            if (href.indexOf('?'***REMOVED*** === -1***REMOVED*** {
                href += '?_popup=1';
        ***REMOVED*** else {
                href += '&_popup=1';
        ***REMOVED***
    ***REMOVED***
        var win = window.open(href, name, 'height=500,width=800,resizable=yes,scrollbars=yes'***REMOVED***;
        win.focus(***REMOVED***;
        return false;
***REMOVED***

    function showRelatedObjectLookupPopup(triggeringLink***REMOVED*** {
        return showAdminPopup(triggeringLink, /^lookup_/, true***REMOVED***;
***REMOVED***

    function dismissRelatedLookupPopup(win, chosenId***REMOVED*** {
        var name = windowname_to_id(win.name***REMOVED***;
        var elem = document.getElementById(name***REMOVED***;
        if (elem.className.indexOf('vManyToManyRawIdAdminField'***REMOVED*** !== -1 && elem.value***REMOVED*** {
            elem.value += ',' + chosenId;
    ***REMOVED*** else {
            document.getElementById(name***REMOVED***.value = chosenId;
    ***REMOVED***
        win.close(***REMOVED***;
***REMOVED***

    function showRelatedObjectPopup(triggeringLink***REMOVED*** {
        return showAdminPopup(triggeringLink, /^(change|add|delete***REMOVED***_/, false***REMOVED***;
***REMOVED***

    function updateRelatedObjectLinks(triggeringLink***REMOVED*** {
        var $this = $(triggeringLink***REMOVED***;
        var siblings = $this.nextAll('.view-related, .change-related, .delete-related'***REMOVED***;
        if (!siblings.length***REMOVED*** {
            return;
    ***REMOVED***
        var value = $this.val(***REMOVED***;
        if (value***REMOVED*** {
            siblings.each(function(***REMOVED*** {
                var elm = $(this***REMOVED***;
                elm.attr('href', elm.attr('data-href-template'***REMOVED***.replace('__fk__', value***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
    ***REMOVED*** else {
            siblings.removeAttr('href'***REMOVED***;
    ***REMOVED***
***REMOVED***

    function dismissAddRelatedObjectPopup(win, newId, newRepr***REMOVED*** {
        var name = windowname_to_id(win.name***REMOVED***;
        var elem = document.getElementById(name***REMOVED***;
        if (elem***REMOVED*** {
            var elemName = elem.nodeName.toUpperCase(***REMOVED***;
            if (elemName === 'SELECT'***REMOVED*** {
                elem.options[elem.options.length***REMOVED*** = new Option(newRepr, newId, true, true***REMOVED***;
        ***REMOVED*** else if (elemName === 'INPUT'***REMOVED*** {
                if (elem.className.indexOf('vManyToManyRawIdAdminField'***REMOVED*** !== -1 && elem.value***REMOVED*** {
                    elem.value += ',' + newId;
            ***REMOVED*** else {
                    elem.value = newId;
            ***REMOVED***
        ***REMOVED***
            // Trigger a change event to update related links if required.
            $(elem***REMOVED***.trigger('change'***REMOVED***;
    ***REMOVED*** else {
            var toId = name + "_to";
            var o = new Option(newRepr, newId***REMOVED***;
            SelectBox.add_to_cache(toId, o***REMOVED***;
            SelectBox.redisplay(toId***REMOVED***;
    ***REMOVED***
        win.close(***REMOVED***;
***REMOVED***

    function dismissChangeRelatedObjectPopup(win, objId, newRepr, newId***REMOVED*** {
        var id = windowname_to_id(win.name***REMOVED***.replace(/^edit_/, ''***REMOVED***;
        var selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id***REMOVED******REMOVED***;
        var selects = $(selectsSelector***REMOVED***;
        selects.find('option'***REMOVED***.each(function(***REMOVED*** {
            if (this.value === objId***REMOVED*** {
                this.textContent = newRepr;
                this.value = newId;
        ***REMOVED***
    ***REMOVED******REMOVED***;
        selects.next(***REMOVED***.find('.select2-selection__rendered'***REMOVED***.each(function(***REMOVED*** {
            // The element can have a clear button as a child.
            // Use the lastChild to modify only the displayed value.
            this.lastChild.textContent = newRepr;
            this.title = newRepr;
    ***REMOVED******REMOVED***;
        win.close(***REMOVED***;
***REMOVED***

    function dismissDeleteRelatedObjectPopup(win, objId***REMOVED*** {
        var id = windowname_to_id(win.name***REMOVED***.replace(/^delete_/, ''***REMOVED***;
        var selectsSelector = interpolate('#%s, #%s_from, #%s_to', [id, id, id***REMOVED******REMOVED***;
        var selects = $(selectsSelector***REMOVED***;
        selects.find('option'***REMOVED***.each(function(***REMOVED*** {
            if (this.value === objId***REMOVED*** {
                $(this***REMOVED***.remove(***REMOVED***;
        ***REMOVED***
    ***REMOVED******REMOVED***.trigger('change'***REMOVED***;
        win.close(***REMOVED***;
***REMOVED***

    // Global for testing purposes
    window.id_to_windowname = id_to_windowname;
    window.windowname_to_id = windowname_to_id;

    window.showRelatedObjectLookupPopup = showRelatedObjectLookupPopup;
    window.dismissRelatedLookupPopup = dismissRelatedLookupPopup;
    window.showRelatedObjectPopup = showRelatedObjectPopup;
    window.updateRelatedObjectLinks = updateRelatedObjectLinks;
    window.dismissAddRelatedObjectPopup = dismissAddRelatedObjectPopup;
    window.dismissChangeRelatedObjectPopup = dismissChangeRelatedObjectPopup;
    window.dismissDeleteRelatedObjectPopup = dismissDeleteRelatedObjectPopup;

    // Kept for backward compatibility
    window.showAddAnotherPopup = showRelatedObjectPopup;
    window.dismissAddAnotherPopup = dismissAddRelatedObjectPopup;

    $(document***REMOVED***.ready(function(***REMOVED*** {
        $("a[data-popup-opener***REMOVED***"***REMOVED***.on('click', function(event***REMOVED*** {
            event.preventDefault(***REMOVED***;
            opener.dismissRelatedLookupPopup(window, $(this***REMOVED***.data("popup-opener"***REMOVED******REMOVED***;
    ***REMOVED******REMOVED***;
        $('body'***REMOVED***.on('click', '.related-widget-wrapper-link', function(e***REMOVED*** {
            e.preventDefault(***REMOVED***;
            if (this.href***REMOVED*** {
                var event = $.Event('django:show-related', {href: this.href***REMOVED******REMOVED***;
                $(this***REMOVED***.trigger(event***REMOVED***;
                if (!event.isDefaultPrevented(***REMOVED******REMOVED*** {
                    showRelatedObjectPopup(this***REMOVED***;
            ***REMOVED***
        ***REMOVED***
    ***REMOVED******REMOVED***;
        $('body'***REMOVED***.on('change', '.related-widget-wrapper select', function(e***REMOVED*** {
            var event = $.Event('django:update-related'***REMOVED***;
            $(this***REMOVED***.trigger(event***REMOVED***;
            if (!event.isDefaultPrevented(***REMOVED******REMOVED*** {
                updateRelatedObjectLinks(this***REMOVED***;
        ***REMOVED***
    ***REMOVED******REMOVED***;
        $('.related-widget-wrapper select'***REMOVED***.trigger('change'***REMOVED***;
        $('body'***REMOVED***.on('click', '.related-lookup', function(e***REMOVED*** {
            e.preventDefault(***REMOVED***;
            var event = $.Event('django:lookup-related'***REMOVED***;
            $(this***REMOVED***.trigger(event***REMOVED***;
            if (!event.isDefaultPrevented(***REMOVED******REMOVED*** {
                showRelatedObjectLookupPopup(this***REMOVED***;
        ***REMOVED***
    ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

***REMOVED******REMOVED***(django.jQuery***REMOVED***;
