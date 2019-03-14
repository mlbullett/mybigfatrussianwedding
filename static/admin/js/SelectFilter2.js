/*global SelectBox, gettext, interpolate, quickElement, SelectFilter*/
/*
SelectFilter2 - Turns a multiple-select box into a filter interface.

Requires jQuery, core.js, and SelectBox.js.
*/
(function($***REMOVED*** {
    'use strict';
    function findForm(node***REMOVED*** {
        // returns the node of the form containing the given node
        if (node.tagName.toLowerCase(***REMOVED*** !== 'form'***REMOVED*** {
            return findForm(node.parentNode***REMOVED***;
    ***REMOVED***
        return node;
***REMOVED***

    window.SelectFilter = {
        init: function(field_id, field_name, is_stacked***REMOVED*** {
            if (field_id.match(/__prefix__/***REMOVED******REMOVED*** {
                // Don't initialize on empty forms.
                return;
        ***REMOVED***
            var from_box = document.getElementById(field_id***REMOVED***;
            from_box.id += '_from'; // change its ID
            from_box.className = 'filtered';

            var ps = from_box.parentNode.getElementsByTagName('p'***REMOVED***;
            for (var i = 0; i < ps.length; i++***REMOVED*** {
                if (ps[i***REMOVED***.className.indexOf("info"***REMOVED*** !== -1***REMOVED*** {
                    // Remove <p class="info">, because it just gets in the way.
                    from_box.parentNode.removeChild(ps[i***REMOVED******REMOVED***;
            ***REMOVED*** else if (ps[i***REMOVED***.className.indexOf("help"***REMOVED*** !== -1***REMOVED*** {
                    // Move help text up to the top so it isn't below the select
                    // boxes or wrapped off on the side to the right of the add
                    // button:
                    from_box.parentNode.insertBefore(ps[i***REMOVED***, from_box.parentNode.firstChild***REMOVED***;
            ***REMOVED***
        ***REMOVED***

            // <div class="selector"> or <div class="selector stacked">
            var selector_div = quickElement('div', from_box.parentNode***REMOVED***;
            selector_div.className = is_stacked ? 'selector stacked' : 'selector';

            // <div class="selector-available">
            var selector_available = quickElement('div', selector_div***REMOVED***;
            selector_available.className = 'selector-available';
            var title_available = quickElement('h2', selector_available, interpolate(gettext('Available %s'***REMOVED*** + ' ', [field_name***REMOVED******REMOVED******REMOVED***;
            quickElement(
                'span', title_available, '',
                'class', 'help help-tooltip help-icon',
                'title', interpolate(
                    gettext(
                        'This is the list of available %s. You may choose some by ' +
                        'selecting them in the box below and then clicking the ' +
                        '"Choose" arrow between the two boxes.'
                    ***REMOVED***,
                    [field_name***REMOVED***
                ***REMOVED***
            ***REMOVED***;

            var filter_p = quickElement('p', selector_available, '', 'id', field_id + '_filter'***REMOVED***;
            filter_p.className = 'selector-filter';

            var search_filter_label = quickElement('label', filter_p, '', 'for', field_id + '_input'***REMOVED***;

            quickElement(
                'span', search_filter_label, '',
                'class', 'help-tooltip search-label-icon',
                'title', interpolate(gettext("Type into this box to filter down the list of available %s."***REMOVED***, [field_name***REMOVED******REMOVED***
            ***REMOVED***;

            filter_p.appendChild(document.createTextNode(' '***REMOVED******REMOVED***;

            var filter_input = quickElement('input', filter_p, '', 'type', 'text', 'placeholder', gettext("Filter"***REMOVED******REMOVED***;
            filter_input.id = field_id + '_input';

            selector_available.appendChild(from_box***REMOVED***;
            var choose_all = quickElement('a', selector_available, gettext('Choose all'***REMOVED***, 'title', interpolate(gettext('Click to choose all %s at once.'***REMOVED***, [field_name***REMOVED******REMOVED***, 'href', '#', 'id', field_id + '_add_all_link'***REMOVED***;
            choose_all.className = 'selector-chooseall';

            // <ul class="selector-chooser">
            var selector_chooser = quickElement('ul', selector_div***REMOVED***;
            selector_chooser.className = 'selector-chooser';
            var add_link = quickElement('a', quickElement('li', selector_chooser***REMOVED***, gettext('Choose'***REMOVED***, 'title', gettext('Choose'***REMOVED***, 'href', '#', 'id', field_id + '_add_link'***REMOVED***;
            add_link.className = 'selector-add';
            var remove_link = quickElement('a', quickElement('li', selector_chooser***REMOVED***, gettext('Remove'***REMOVED***, 'title', gettext('Remove'***REMOVED***, 'href', '#', 'id', field_id + '_remove_link'***REMOVED***;
            remove_link.className = 'selector-remove';

            // <div class="selector-chosen">
            var selector_chosen = quickElement('div', selector_div***REMOVED***;
            selector_chosen.className = 'selector-chosen';
            var title_chosen = quickElement('h2', selector_chosen, interpolate(gettext('Chosen %s'***REMOVED*** + ' ', [field_name***REMOVED******REMOVED******REMOVED***;
            quickElement(
                'span', title_chosen, '',
                'class', 'help help-tooltip help-icon',
                'title', interpolate(
                    gettext(
                        'This is the list of chosen %s. You may remove some by ' +
                        'selecting them in the box below and then clicking the ' +
                        '"Remove" arrow between the two boxes.'
                    ***REMOVED***,
                    [field_name***REMOVED***
                ***REMOVED***
            ***REMOVED***;

            var to_box = quickElement('select', selector_chosen, '', 'id', field_id + '_to', 'multiple', 'multiple', 'size', from_box.size, 'name', from_box.getAttribute('name'***REMOVED******REMOVED***;
            to_box.className = 'filtered';
            var clear_all = quickElement('a', selector_chosen, gettext('Remove all'***REMOVED***, 'title', interpolate(gettext('Click to remove all chosen %s at once.'***REMOVED***, [field_name***REMOVED******REMOVED***, 'href', '#', 'id', field_id + '_remove_all_link'***REMOVED***;
            clear_all.className = 'selector-clearall';

            from_box.setAttribute('name', from_box.getAttribute('name'***REMOVED*** + '_old'***REMOVED***;

            // Set up the JavaScript event handlers for the select box filter interface
            var move_selection = function(e, elem, move_func, from, to***REMOVED*** {
                if (elem.className.indexOf('active'***REMOVED*** !== -1***REMOVED*** {
                    move_func(from, to***REMOVED***;
                    SelectFilter.refresh_icons(field_id***REMOVED***;
            ***REMOVED***
                e.preventDefault(***REMOVED***;
        ***REMOVED***;
            choose_all.addEventListener('click', function(e***REMOVED*** {
                move_selection(e, this, SelectBox.move_all, field_id + '_from', field_id + '_to'***REMOVED***;
        ***REMOVED******REMOVED***;
            add_link.addEventListener('click', function(e***REMOVED*** {
                move_selection(e, this, SelectBox.move, field_id + '_from', field_id + '_to'***REMOVED***;
        ***REMOVED******REMOVED***;
            remove_link.addEventListener('click', function(e***REMOVED*** {
                move_selection(e, this, SelectBox.move, field_id + '_to', field_id + '_from'***REMOVED***;
        ***REMOVED******REMOVED***;
            clear_all.addEventListener('click', function(e***REMOVED*** {
                move_selection(e, this, SelectBox.move_all, field_id + '_to', field_id + '_from'***REMOVED***;
        ***REMOVED******REMOVED***;
            filter_input.addEventListener('keypress', function(e***REMOVED*** {
                SelectFilter.filter_key_press(e, field_id***REMOVED***;
        ***REMOVED******REMOVED***;
            filter_input.addEventListener('keyup', function(e***REMOVED*** {
                SelectFilter.filter_key_up(e, field_id***REMOVED***;
        ***REMOVED******REMOVED***;
            filter_input.addEventListener('keydown', function(e***REMOVED*** {
                SelectFilter.filter_key_down(e, field_id***REMOVED***;
        ***REMOVED******REMOVED***;
            selector_div.addEventListener('change', function(e***REMOVED*** {
                if (e.target.tagName === 'SELECT'***REMOVED*** {
                    SelectFilter.refresh_icons(field_id***REMOVED***;
            ***REMOVED***
        ***REMOVED******REMOVED***;
            selector_div.addEventListener('dblclick', function(e***REMOVED*** {
                if (e.target.tagName === 'OPTION'***REMOVED*** {
                    if (e.target.closest('select'***REMOVED***.id === field_id + '_to'***REMOVED*** {
                        SelectBox.move(field_id + '_to', field_id + '_from'***REMOVED***;
                ***REMOVED*** else {
                        SelectBox.move(field_id + '_from', field_id + '_to'***REMOVED***;
                ***REMOVED***
                    SelectFilter.refresh_icons(field_id***REMOVED***;
            ***REMOVED***
        ***REMOVED******REMOVED***;
            findForm(from_box***REMOVED***.addEventListener('submit', function(***REMOVED*** {
                SelectBox.select_all(field_id + '_to'***REMOVED***;
        ***REMOVED******REMOVED***;
            SelectBox.init(field_id + '_from'***REMOVED***;
            SelectBox.init(field_id + '_to'***REMOVED***;
            // Move selected from_box options to to_box
            SelectBox.move(field_id + '_from', field_id + '_to'***REMOVED***;

            if (!is_stacked***REMOVED*** {
                // In horizontal mode, give the same height to the two boxes.
                var j_from_box = $('#' + field_id + '_from'***REMOVED***;
                var j_to_box = $('#' + field_id + '_to'***REMOVED***;
                var resize_filters = function(***REMOVED*** { j_to_box.height($(filter_p***REMOVED***.outerHeight(***REMOVED*** + j_from_box.outerHeight(***REMOVED******REMOVED***; ***REMOVED***;
                if (j_from_box.outerHeight(***REMOVED*** > 0***REMOVED*** {
                    resize_filters(***REMOVED***; // This fieldset is already open. Resize now.
            ***REMOVED*** else {
                    // This fieldset is probably collapsed. Wait for its 'show' event.
                    j_to_box.closest('fieldset'***REMOVED***.one('show.fieldset', resize_filters***REMOVED***;
            ***REMOVED***
        ***REMOVED***

            // Initial icon refresh
            SelectFilter.refresh_icons(field_id***REMOVED***;
***REMOVED***
        any_selected: function(field***REMOVED*** {
            var any_selected = false;
            try {
                // Temporarily add the required attribute and check validity.
                // This is much faster in WebKit browsers than the fallback.
                field.attr('required', 'required'***REMOVED***;
                any_selected = field.is(':valid'***REMOVED***;
                field.removeAttr('required'***REMOVED***;
        ***REMOVED*** catch (e***REMOVED*** {
                // Browsers that don't support :valid (IE < 10***REMOVED***
                any_selected = field.find('option:selected'***REMOVED***.length > 0;
        ***REMOVED***
            return any_selected;
***REMOVED***
        refresh_icons: function(field_id***REMOVED*** {
            var from = $('#' + field_id + '_from'***REMOVED***;
            var to = $('#' + field_id + '_to'***REMOVED***;
            // Active if at least one item is selected
            $('#' + field_id + '_add_link'***REMOVED***.toggleClass('active', SelectFilter.any_selected(from***REMOVED******REMOVED***;
            $('#' + field_id + '_remove_link'***REMOVED***.toggleClass('active', SelectFilter.any_selected(to***REMOVED******REMOVED***;
            // Active if the corresponding box isn't empty
            $('#' + field_id + '_add_all_link'***REMOVED***.toggleClass('active', from.find('option'***REMOVED***.length > 0***REMOVED***;
            $('#' + field_id + '_remove_all_link'***REMOVED***.toggleClass('active', to.find('option'***REMOVED***.length > 0***REMOVED***;
***REMOVED***
        filter_key_press: function(event, field_id***REMOVED*** {
            var from = document.getElementById(field_id + '_from'***REMOVED***;
            // don't submit form if user pressed Enter
            if ((event.which && event.which === 13***REMOVED*** || (event.keyCode && event.keyCode === 13***REMOVED******REMOVED*** {
                from.selectedIndex = 0;
                SelectBox.move(field_id + '_from', field_id + '_to'***REMOVED***;
                from.selectedIndex = 0;
                event.preventDefault(***REMOVED***;
                return false;
        ***REMOVED***
***REMOVED***
        filter_key_up: function(event, field_id***REMOVED*** {
            var from = document.getElementById(field_id + '_from'***REMOVED***;
            var temp = from.selectedIndex;
            SelectBox.filter(field_id + '_from', document.getElementById(field_id + '_input'***REMOVED***.value***REMOVED***;
            from.selectedIndex = temp;
            return true;
***REMOVED***
        filter_key_down: function(event, field_id***REMOVED*** {
            var from = document.getElementById(field_id + '_from'***REMOVED***;
            // right arrow -- move across
            if ((event.which && event.which === 39***REMOVED*** || (event.keyCode && event.keyCode === 39***REMOVED******REMOVED*** {
                var old_index = from.selectedIndex;
                SelectBox.move(field_id + '_from', field_id + '_to'***REMOVED***;
                from.selectedIndex = (old_index === from.length***REMOVED*** ? from.length - 1 : old_index;
                return false;
        ***REMOVED***
            // down arrow -- wrap around
            if ((event.which && event.which === 40***REMOVED*** || (event.keyCode && event.keyCode === 40***REMOVED******REMOVED*** {
                from.selectedIndex = (from.length === from.selectedIndex + 1***REMOVED*** ? 0 : from.selectedIndex + 1;
        ***REMOVED***
            // up arrow -- wrap around
            if ((event.which && event.which === 38***REMOVED*** || (event.keyCode && event.keyCode === 38***REMOVED******REMOVED*** {
                from.selectedIndex = (from.selectedIndex === 0***REMOVED*** ? from.length - 1 : from.selectedIndex - 1;
        ***REMOVED***
            return true;
    ***REMOVED***
***REMOVED***;

    window.addEventListener('load', function(e***REMOVED*** {
        $('select.selectfilter, select.selectfilterstacked'***REMOVED***.each(function(***REMOVED*** {
            var $el = $(this***REMOVED***,
                data = $el.data(***REMOVED***;
            SelectFilter.init($el.attr('id'***REMOVED***, data.fieldName, parseInt(data.isStacked, 10***REMOVED******REMOVED***;
    ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

***REMOVED******REMOVED***(django.jQuery***REMOVED***;
