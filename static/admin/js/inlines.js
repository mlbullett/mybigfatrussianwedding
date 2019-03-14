/*global DateTimeShortcuts, SelectFilter*/
/**
 * Django admin inlines
 *
 * Based on jQuery Formset 1.1
 * @author Stanislaus Madueke (stan DOT madueke AT gmail DOT com***REMOVED***
 * @requires jQuery 1.2.6 or later
 *
 * Copyright (c***REMOVED*** 2009, Stanislaus Madueke
 * All rights reserved.
 *
 * Spiced up with Code from Zain Memon's GSoC project 2009
 * and modified for Django by Jannis Leidel, Travis Swicegood and Julien Phalip.
 *
 * Licensed under the New BSD License
 * See: https://opensource.org/licenses/bsd-license.php
 */
(function($***REMOVED*** {
    'use strict';
    $.fn.formset = function(opts***REMOVED*** {
        var options = $.extend({***REMOVED***, $.fn.formset.defaults, opts***REMOVED***;
        var $this = $(this***REMOVED***;
        var $parent = $this.parent(***REMOVED***;
        var updateElementIndex = function(el, prefix, ndx***REMOVED*** {
            var id_regex = new RegExp("(" + prefix + "-(\\d+|__prefix__***REMOVED******REMOVED***"***REMOVED***;
            var replacement = prefix + "-" + ndx;
            if ($(el***REMOVED***.prop("for"***REMOVED******REMOVED*** {
                $(el***REMOVED***.prop("for", $(el***REMOVED***.prop("for"***REMOVED***.replace(id_regex, replacement***REMOVED******REMOVED***;
        ***REMOVED***
            if (el.id***REMOVED*** {
                el.id = el.id.replace(id_regex, replacement***REMOVED***;
        ***REMOVED***
            if (el.name***REMOVED*** {
                el.name = el.name.replace(id_regex, replacement***REMOVED***;
        ***REMOVED***
    ***REMOVED***;
        var totalForms = $("#id_" + options.prefix + "-TOTAL_FORMS"***REMOVED***.prop("autocomplete", "off"***REMOVED***;
        var nextIndex = parseInt(totalForms.val(***REMOVED***, 10***REMOVED***;
        var maxForms = $("#id_" + options.prefix + "-MAX_NUM_FORMS"***REMOVED***.prop("autocomplete", "off"***REMOVED***;
        // only show the add button if we are allowed to add more items,
        // note that max_num = None translates to a blank string.
        var showAddButton = maxForms.val(***REMOVED*** === '' || (maxForms.val(***REMOVED*** - totalForms.val(***REMOVED******REMOVED*** > 0;
        $this.each(function(i***REMOVED*** {
            $(this***REMOVED***.not("." + options.emptyCssClass***REMOVED***.addClass(options.formCssClass***REMOVED***;
    ***REMOVED******REMOVED***;
        if ($this.length && showAddButton***REMOVED*** {
            var addButton = options.addButton;
            if (addButton === null***REMOVED*** {
                if ($this.prop("tagName"***REMOVED*** === "TR"***REMOVED*** {
                    // If forms are laid out as table rows, insert the
                    // "add" button in a new table row:
                    var numCols = this.eq(-1***REMOVED***.children(***REMOVED***.length;
                    $parent.append('<tr class="' + options.addCssClass + '"><td colspan="' + numCols + '"><a href="#">' + options.addText + "</a></tr>"***REMOVED***;
                    addButton = $parent.find("tr:last a"***REMOVED***;
            ***REMOVED*** else {
                    // Otherwise, insert it immediately after the last form:
                    $this.filter(":last"***REMOVED***.after('<div class="' + options.addCssClass + '"><a href="#">' + options.addText + "</a></div>"***REMOVED***;
                    addButton = $this.filter(":last"***REMOVED***.next(***REMOVED***.find("a"***REMOVED***;
            ***REMOVED***
        ***REMOVED***
            addButton.on('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                var template = $("#" + options.prefix + "-empty"***REMOVED***;
                var row = template.clone(true***REMOVED***;
                row.removeClass(options.emptyCssClass***REMOVED***
                .addClass(options.formCssClass***REMOVED***
                .attr("id", options.prefix + "-" + nextIndex***REMOVED***;
                if (row.is("tr"***REMOVED******REMOVED*** {
                    // If the forms are laid out in table rows, insert
                    // the remove button into the last table cell:
                    row.children(":last"***REMOVED***.append('<div><a class="' + options.deleteCssClass + '" href="#">' + options.deleteText + "</a></div>"***REMOVED***;
            ***REMOVED*** else if (row.is("ul"***REMOVED*** || row.is("ol"***REMOVED******REMOVED*** {
                    // If they're laid out as an ordered/unordered list,
                    // insert an <li> after the last list item:
                    row.append('<li><a class="' + options.deleteCssClass + '" href="#">' + options.deleteText + "</a></li>"***REMOVED***;
            ***REMOVED*** else {
                    // Otherwise, just insert the remove button as the
                    // last child element of the form's container:
                    row.children(":first"***REMOVED***.append('<span><a class="' + options.deleteCssClass + '" href="#">' + options.deleteText + "</a></span>"***REMOVED***;
            ***REMOVED***
                row.find("*"***REMOVED***.each(function(***REMOVED*** {
                    updateElementIndex(this, options.prefix, totalForms.val(***REMOVED******REMOVED***;
            ***REMOVED******REMOVED***;
                // Insert the new form when it has been fully edited
                row.insertBefore($(template***REMOVED******REMOVED***;
                // Update number of total forms
                $(totalForms***REMOVED***.val(parseInt(totalForms.val(***REMOVED***, 10***REMOVED*** + 1***REMOVED***;
                nextIndex += 1;
                // Hide add button in case we've hit the max, except we want to add infinitely
                if ((maxForms.val(***REMOVED*** !== ''***REMOVED*** && (maxForms.val(***REMOVED*** - totalForms.val(***REMOVED******REMOVED*** <= 0***REMOVED*** {
                    addButton.parent(***REMOVED***.hide(***REMOVED***;
            ***REMOVED***
                // The delete button of each row triggers a bunch of other things
                row.find("a." + options.deleteCssClass***REMOVED***.on('click', function(e1***REMOVED*** {
                    e1.preventDefault(***REMOVED***;
                    // Remove the parent form containing this button:
                    row.remove(***REMOVED***;
                    nextIndex -= 1;
                    // If a post-delete callback was provided, call it with the deleted form:
                    if (options.removed***REMOVED*** {
                        options.removed(row***REMOVED***;
                ***REMOVED***
                    $(document***REMOVED***.trigger('formset:removed', [row, options.prefix***REMOVED******REMOVED***;
                    // Update the TOTAL_FORMS form count.
                    var forms = $("." + options.formCssClass***REMOVED***;
                    $("#id_" + options.prefix + "-TOTAL_FORMS"***REMOVED***.val(forms.length***REMOVED***;
                    // Show add button again once we drop below max
                    if ((maxForms.val(***REMOVED*** === ''***REMOVED*** || (maxForms.val(***REMOVED*** - forms.length***REMOVED*** > 0***REMOVED*** {
                        addButton.parent(***REMOVED***.show(***REMOVED***;
                ***REMOVED***
                    // Also, update names and ids for all remaining form controls
                    // so they remain in sequence:
                    var i, formCount;
                    var updateElementCallback = function(***REMOVED*** {
                        updateElementIndex(this, options.prefix, i***REMOVED***;
                ***REMOVED***;
                    for (i = 0, formCount = forms.length; i < formCount; i++***REMOVED*** {
                        updateElementIndex($(forms***REMOVED***.get(i***REMOVED***, options.prefix, i***REMOVED***;
                        $(forms.get(i***REMOVED******REMOVED***.find("*"***REMOVED***.each(updateElementCallback***REMOVED***;
                ***REMOVED***
            ***REMOVED******REMOVED***;
                // If a post-add callback was supplied, call it with the added form:
                if (options.added***REMOVED*** {
                    options.added(row***REMOVED***;
            ***REMOVED***
                $(document***REMOVED***.trigger('formset:added', [row, options.prefix***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
    ***REMOVED***
        return this;
***REMOVED***;

    /* Setup plugin defaults */
    $.fn.formset.defaults = {
        prefix: "form",          // The form prefix for your django formset
        addText: "add another",      // Text for the add link
        deleteText: "remove",      // Text for the delete link
        addCssClass: "add-row",      // CSS class applied to the add link
        deleteCssClass: "delete-row",  // CSS class applied to the delete link
        emptyCssClass: "empty-row",    // CSS class applied to the empty row
        formCssClass: "dynamic-form",  // CSS class applied to each form in a formset
        added: null,          // Function called each time a new form is added
        removed: null,          // Function called each time a form is deleted
        addButton: null       // Existing add button to use
***REMOVED***;


    // Tabular inlines ---------------------------------------------------------
    $.fn.tabularFormset = function(selector, options***REMOVED*** {
        var $rows = $(this***REMOVED***;
        var alternatingRows = function(row***REMOVED*** {
            $(selector***REMOVED***.not(".add-row"***REMOVED***.removeClass("row1 row2"***REMOVED***
            .filter(":even"***REMOVED***.addClass("row1"***REMOVED***.end(***REMOVED***
            .filter(":odd"***REMOVED***.addClass("row2"***REMOVED***;
    ***REMOVED***;

        var reinitDateTimeShortCuts = function(***REMOVED*** {
            // Reinitialize the calendar and clock widgets by force
            if (typeof DateTimeShortcuts !== "undefined"***REMOVED*** {
                $(".datetimeshortcuts"***REMOVED***.remove(***REMOVED***;
                DateTimeShortcuts.init(***REMOVED***;
        ***REMOVED***
    ***REMOVED***;

        var updateSelectFilter = function(***REMOVED*** {
            // If any SelectFilter widgets are a part of the new form,
            // instantiate a new SelectFilter instance for it.
            if (typeof SelectFilter !== 'undefined'***REMOVED*** {
                $('.selectfilter'***REMOVED***.each(function(index, value***REMOVED*** {
                    var namearr = value.name.split('-'***REMOVED***;
                    SelectFilter.init(value.id, namearr[namearr.length - 1***REMOVED***, false***REMOVED***;
            ***REMOVED******REMOVED***;
                $('.selectfilterstacked'***REMOVED***.each(function(index, value***REMOVED*** {
                    var namearr = value.name.split('-'***REMOVED***;
                    SelectFilter.init(value.id, namearr[namearr.length - 1***REMOVED***, true***REMOVED***;
            ***REMOVED******REMOVED***;
        ***REMOVED***
    ***REMOVED***;

        var initPrepopulatedFields = function(row***REMOVED*** {
            row.find('.prepopulated_field'***REMOVED***.each(function(***REMOVED*** {
                var field = $(this***REMOVED***,
                    input = field.find('input, select, textarea'***REMOVED***,
                    dependency_list = input.data('dependency_list'***REMOVED*** || [***REMOVED***,
                    dependencies = [***REMOVED***;
                $.each(dependency_list, function(i, field_name***REMOVED*** {
                    dependencies.push('#' + row.find('.field-' + field_name***REMOVED***.find('input, select, textarea'***REMOVED***.attr('id'***REMOVED******REMOVED***;
            ***REMOVED******REMOVED***;
                if (dependencies.length***REMOVED*** {
                    input.prepopulate(dependencies, input.attr('maxlength'***REMOVED******REMOVED***;
            ***REMOVED***
        ***REMOVED******REMOVED***;
    ***REMOVED***;

        $rows.formset({
            prefix: options.prefix,
            addText: options.addText,
            formCssClass: "dynamic-" + options.prefix,
            deleteCssClass: "inline-deletelink",
            deleteText: options.deleteText,
            emptyCssClass: "empty-form",
            removed: alternatingRows,
            added: function(row***REMOVED*** {
                initPrepopulatedFields(row***REMOVED***;
                reinitDateTimeShortCuts(***REMOVED***;
                updateSelectFilter(***REMOVED***;
                alternatingRows(row***REMOVED***;
    ***REMOVED***
            addButton: options.addButton
    ***REMOVED******REMOVED***;

        return $rows;
***REMOVED***;

    // Stacked inlines ---------------------------------------------------------
    $.fn.stackedFormset = function(selector, options***REMOVED*** {
        var $rows = $(this***REMOVED***;
        var updateInlineLabel = function(row***REMOVED*** {
            $(selector***REMOVED***.find(".inline_label"***REMOVED***.each(function(i***REMOVED*** {
                var count = i + 1;
                $(this***REMOVED***.html($(this***REMOVED***.html(***REMOVED***.replace(/(#\d+***REMOVED***/g, "#" + count***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;
    ***REMOVED***;

        var reinitDateTimeShortCuts = function(***REMOVED*** {
            // Reinitialize the calendar and clock widgets by force, yuck.
            if (typeof DateTimeShortcuts !== "undefined"***REMOVED*** {
                $(".datetimeshortcuts"***REMOVED***.remove(***REMOVED***;
                DateTimeShortcuts.init(***REMOVED***;
        ***REMOVED***
    ***REMOVED***;

        var updateSelectFilter = function(***REMOVED*** {
            // If any SelectFilter widgets were added, instantiate a new instance.
            if (typeof SelectFilter !== "undefined"***REMOVED*** {
                $(".selectfilter"***REMOVED***.each(function(index, value***REMOVED*** {
                    var namearr = value.name.split('-'***REMOVED***;
                    SelectFilter.init(value.id, namearr[namearr.length - 1***REMOVED***, false***REMOVED***;
            ***REMOVED******REMOVED***;
                $(".selectfilterstacked"***REMOVED***.each(function(index, value***REMOVED*** {
                    var namearr = value.name.split('-'***REMOVED***;
                    SelectFilter.init(value.id, namearr[namearr.length - 1***REMOVED***, true***REMOVED***;
            ***REMOVED******REMOVED***;
        ***REMOVED***
    ***REMOVED***;

        var initPrepopulatedFields = function(row***REMOVED*** {
            row.find('.prepopulated_field'***REMOVED***.each(function(***REMOVED*** {
                var field = $(this***REMOVED***,
                    input = field.find('input, select, textarea'***REMOVED***,
                    dependency_list = input.data('dependency_list'***REMOVED*** || [***REMOVED***,
                    dependencies = [***REMOVED***;
                $.each(dependency_list, function(i, field_name***REMOVED*** {
                    dependencies.push('#' + row.find('.form-row .field-' + field_name***REMOVED***.find('input, select, textarea'***REMOVED***.attr('id'***REMOVED******REMOVED***;
            ***REMOVED******REMOVED***;
                if (dependencies.length***REMOVED*** {
                    input.prepopulate(dependencies, input.attr('maxlength'***REMOVED******REMOVED***;
            ***REMOVED***
        ***REMOVED******REMOVED***;
    ***REMOVED***;

        $rows.formset({
            prefix: options.prefix,
            addText: options.addText,
            formCssClass: "dynamic-" + options.prefix,
            deleteCssClass: "inline-deletelink",
            deleteText: options.deleteText,
            emptyCssClass: "empty-form",
            removed: updateInlineLabel,
            added: function(row***REMOVED*** {
                initPrepopulatedFields(row***REMOVED***;
                reinitDateTimeShortCuts(***REMOVED***;
                updateSelectFilter(***REMOVED***;
                updateInlineLabel(row***REMOVED***;
    ***REMOVED***
            addButton: options.addButton
    ***REMOVED******REMOVED***;

        return $rows;
***REMOVED***;

    $(document***REMOVED***.ready(function(***REMOVED*** {
        $(".js-inline-admin-formset"***REMOVED***.each(function(***REMOVED*** {
            var data = $(this***REMOVED***.data(***REMOVED***,
                inlineOptions = data.inlineFormset,
                selector;
            switch(data.inlineType***REMOVED*** {
            case "stacked":
                selector = inlineOptions.name + "-group .inline-related";
                $(selector***REMOVED***.stackedFormset(selector, inlineOptions.options***REMOVED***;
                break;
            case "tabular":
                selector = inlineOptions.name + "-group .tabular.inline-related tbody:first > tr";
                $(selector***REMOVED***.tabularFormset(selector, inlineOptions.options***REMOVED***;
                break;
        ***REMOVED***
    ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;
***REMOVED******REMOVED***(django.jQuery***REMOVED***;
