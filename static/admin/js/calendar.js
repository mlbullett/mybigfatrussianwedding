/*global gettext, pgettext, get_format, quickElement, removeChildren*/
/*
calendar.js - Calendar functions by Adrian Holovaty
depends on core.js for utility functions like removeChildren or quickElement
*/

(function(***REMOVED*** {
    'use strict';
    // CalendarNamespace -- Provides a collection of HTML calendar-related helper functions
    var CalendarNamespace = {
        monthsOfYear: [
            gettext('January'***REMOVED***,
            gettext('February'***REMOVED***,
            gettext('March'***REMOVED***,
            gettext('April'***REMOVED***,
            gettext('May'***REMOVED***,
            gettext('June'***REMOVED***,
            gettext('July'***REMOVED***,
            gettext('August'***REMOVED***,
            gettext('September'***REMOVED***,
            gettext('October'***REMOVED***,
            gettext('November'***REMOVED***,
            gettext('December'***REMOVED***
        ***REMOVED***,
        daysOfWeek: [
            pgettext('one letter Sunday', 'S'***REMOVED***,
            pgettext('one letter Monday', 'M'***REMOVED***,
            pgettext('one letter Tuesday', 'T'***REMOVED***,
            pgettext('one letter Wednesday', 'W'***REMOVED***,
            pgettext('one letter Thursday', 'T'***REMOVED***,
            pgettext('one letter Friday', 'F'***REMOVED***,
            pgettext('one letter Saturday', 'S'***REMOVED***
        ***REMOVED***,
        firstDayOfWeek: parseInt(get_format('FIRST_DAY_OF_WEEK'***REMOVED******REMOVED***,
        isLeapYear: function(year***REMOVED*** {
            return (((year % 4***REMOVED*** === 0***REMOVED*** && ((year % 100***REMOVED*** !== 0 ***REMOVED*** || ((year % 400***REMOVED*** === 0***REMOVED******REMOVED***;
***REMOVED***
        getDaysInMonth: function(month, year***REMOVED*** {
            var days;
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12***REMOVED*** {
                days = 31;
        ***REMOVED***
            else if (month === 4 || month === 6 || month === 9 || month === 11***REMOVED*** {
                days = 30;
        ***REMOVED***
            else if (month === 2 && CalendarNamespace.isLeapYear(year***REMOVED******REMOVED*** {
                days = 29;
        ***REMOVED***
            else {
                days = 28;
        ***REMOVED***
            return days;
***REMOVED***
        draw: function(month, year, div_id, callback, selected***REMOVED*** { // month = 1-12, year = 1-9999
            var today = new Date(***REMOVED***;
            var todayDay = today.getDate(***REMOVED***;
            var todayMonth = today.getMonth(***REMOVED*** + 1;
            var todayYear = today.getFullYear(***REMOVED***;
            var todayClass = '';

            // Use UTC functions here because the date field does not contain time
            // and using the UTC function variants prevent the local time offset
            // from altering the date, specifically the day field.  For example:
            //
            // ```
            // var x = new Date('2013-10-02'***REMOVED***;
            // var day = x.getDate(***REMOVED***;
            // ```
            //
            // The day variable above will be 1 instead of 2 in, say, US Pacific time
            // zone.
            var isSelectedMonth = false;
            if (typeof selected !== 'undefined'***REMOVED*** {
                isSelectedMonth = (selected.getUTCFullYear(***REMOVED*** === year && (selected.getUTCMonth(***REMOVED*** + 1***REMOVED*** === month***REMOVED***;
        ***REMOVED***

            month = parseInt(month***REMOVED***;
            year = parseInt(year***REMOVED***;
            var calDiv = document.getElementById(div_id***REMOVED***;
            removeChildren(calDiv***REMOVED***;
            var calTable = document.createElement('table'***REMOVED***;
            quickElement('caption', calTable, CalendarNamespace.monthsOfYear[month - 1***REMOVED*** + ' ' + year***REMOVED***;
            var tableBody = quickElement('tbody', calTable***REMOVED***;

            // Draw days-of-week header
            var tableRow = quickElement('tr', tableBody***REMOVED***;
            for (var i = 0; i < 7; i++***REMOVED*** {
                quickElement('th', tableRow, CalendarNamespace.daysOfWeek[(i + CalendarNamespace.firstDayOfWeek***REMOVED*** % 7***REMOVED******REMOVED***;
        ***REMOVED***

            var startingPos = new Date(year, month - 1, 1 - CalendarNamespace.firstDayOfWeek***REMOVED***.getDay(***REMOVED***;
            var days = CalendarNamespace.getDaysInMonth(month, year***REMOVED***;

            var nonDayCell;

            // Draw blanks before first of month
            tableRow = quickElement('tr', tableBody***REMOVED***;
            for (i = 0; i < startingPos; i++***REMOVED*** {
                nonDayCell = quickElement('td', tableRow, ' '***REMOVED***;
                nonDayCell.className = "nonday";
        ***REMOVED***

            function calendarMonth(y, m***REMOVED*** {
                function onClick(e***REMOVED*** {
                    e.preventDefault(***REMOVED***;
                    callback(y, m, this.textContent***REMOVED***;
            ***REMOVED***
                return onClick;
        ***REMOVED***

            // Draw days of month
            var currentDay = 1;
            for (i = startingPos; currentDay <= days; i++***REMOVED*** {
                if (i % 7 === 0 && currentDay !== 1***REMOVED*** {
                    tableRow = quickElement('tr', tableBody***REMOVED***;
            ***REMOVED***
                if ((currentDay === todayDay***REMOVED*** && (month === todayMonth***REMOVED*** && (year === todayYear***REMOVED******REMOVED*** {
                    todayClass = 'today';
            ***REMOVED*** else {
                    todayClass = '';
            ***REMOVED***

                // use UTC function; see above for explanation.
                if (isSelectedMonth && currentDay === selected.getUTCDate(***REMOVED******REMOVED*** {
                    if (todayClass !== ''***REMOVED*** {
                        todayClass += " ";
                ***REMOVED***
                    todayClass += "selected";
            ***REMOVED***

                var cell = quickElement('td', tableRow, '', 'class', todayClass***REMOVED***;
                var link = quickElement('a', cell, currentDay, 'href', '#'***REMOVED***;
                link.addEventListener('click', calendarMonth(year, month***REMOVED******REMOVED***;
                currentDay++;
        ***REMOVED***

            // Draw blanks after end of month (optional, but makes for valid code***REMOVED***
            while (tableRow.childNodes.length < 7***REMOVED*** {
                nonDayCell = quickElement('td', tableRow, ' '***REMOVED***;
                nonDayCell.className = "nonday";
        ***REMOVED***

            calDiv.appendChild(calTable***REMOVED***;
    ***REMOVED***
***REMOVED***;

    // Calendar -- A calendar instance
    function Calendar(div_id, callback, selected***REMOVED*** {
        // div_id (string***REMOVED*** is the ID of the element in which the calendar will
        //     be displayed
        // callback (string***REMOVED*** is the name of a JavaScript function that will be
        //     called with the parameters (year, month, day***REMOVED*** when a day in the
        //     calendar is clicked
        this.div_id = div_id;
        this.callback = callback;
        this.today = new Date(***REMOVED***;
        this.currentMonth = this.today.getMonth(***REMOVED*** + 1;
        this.currentYear = this.today.getFullYear(***REMOVED***;
        if (typeof selected !== 'undefined'***REMOVED*** {
            this.selected = selected;
    ***REMOVED***
***REMOVED***
    Calendar.prototype = {
        drawCurrent: function(***REMOVED*** {
            CalendarNamespace.draw(this.currentMonth, this.currentYear, this.div_id, this.callback, this.selected***REMOVED***;
***REMOVED***
        drawDate: function(month, year, selected***REMOVED*** {
            this.currentMonth = month;
            this.currentYear = year;

            if(selected***REMOVED*** {
                this.selected = selected;
        ***REMOVED***

            this.drawCurrent(***REMOVED***;
***REMOVED***
        drawPreviousMonth: function(***REMOVED*** {
            if (this.currentMonth === 1***REMOVED*** {
                this.currentMonth = 12;
                this.currentYear--;
        ***REMOVED***
            else {
                this.currentMonth--;
        ***REMOVED***
            this.drawCurrent(***REMOVED***;
***REMOVED***
        drawNextMonth: function(***REMOVED*** {
            if (this.currentMonth === 12***REMOVED*** {
                this.currentMonth = 1;
                this.currentYear++;
        ***REMOVED***
            else {
                this.currentMonth++;
        ***REMOVED***
            this.drawCurrent(***REMOVED***;
***REMOVED***
        drawPreviousYear: function(***REMOVED*** {
            this.currentYear--;
            this.drawCurrent(***REMOVED***;
***REMOVED***
        drawNextYear: function(***REMOVED*** {
            this.currentYear++;
            this.drawCurrent(***REMOVED***;
    ***REMOVED***
***REMOVED***;
    window.Calendar = Calendar;
    window.CalendarNamespace = CalendarNamespace;
***REMOVED******REMOVED***(***REMOVED***;
