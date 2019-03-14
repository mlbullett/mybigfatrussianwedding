/*global Calendar, findPosX, findPosY, getStyle, get_format, gettext, gettext_noop, interpolate, ngettext, quickElement*/
// Inserts shortcut buttons after all of the following:
//     <input type="text" class="vDateField">
//     <input type="text" class="vTimeField">
(function(***REMOVED*** {
    'use strict';
    var DateTimeShortcuts = {
        calendars: [***REMOVED***,
        calendarInputs: [***REMOVED***,
        clockInputs: [***REMOVED***,
        clockHours: {
            default_: [
                [gettext_noop('Now'***REMOVED***, -1***REMOVED***,
                [gettext_noop('Midnight'***REMOVED***, 0***REMOVED***,
                [gettext_noop('6 a.m.'***REMOVED***, 6***REMOVED***,
                [gettext_noop('Noon'***REMOVED***, 12***REMOVED***,
                [gettext_noop('6 p.m.'***REMOVED***, 18***REMOVED***
            ***REMOVED***
***REMOVED***
        dismissClockFunc: [***REMOVED***,
        dismissCalendarFunc: [***REMOVED***,
        calendarDivName1: 'calendarbox', // name of calendar <div> that gets toggled
        calendarDivName2: 'calendarin',  // name of <div> that contains calendar
        calendarLinkName: 'calendarlink',// name of the link that is used to toggle
        clockDivName: 'clockbox',        // name of clock <div> that gets toggled
        clockLinkName: 'clocklink',      // name of the link that is used to toggle
        shortCutsClass: 'datetimeshortcuts', // class of the clock and cal shortcuts
        timezoneWarningClass: 'timezonewarning', // class of the warning for timezone mismatch
        timezoneOffset: 0,
        init: function(***REMOVED*** {
            var body = document.getElementsByTagName('body'***REMOVED***[0***REMOVED***;
            var serverOffset = body.getAttribute('data-admin-utc-offset'***REMOVED***;
            if (serverOffset***REMOVED*** {
                var localOffset = new Date(***REMOVED***.getTimezoneOffset(***REMOVED*** * -60;
                DateTimeShortcuts.timezoneOffset = localOffset - serverOffset;
        ***REMOVED***

            var inputs = document.getElementsByTagName('input'***REMOVED***;
            for (var i = 0; i < inputs.length; i++***REMOVED*** {
                var inp = inputs[i***REMOVED***;
                if (inp.getAttribute('type'***REMOVED*** === 'text' && inp.className.match(/vTimeField/***REMOVED******REMOVED*** {
                    DateTimeShortcuts.addClock(inp***REMOVED***;
                    DateTimeShortcuts.addTimezoneWarning(inp***REMOVED***;
            ***REMOVED***
                else if (inp.getAttribute('type'***REMOVED*** === 'text' && inp.className.match(/vDateField/***REMOVED******REMOVED*** {
                    DateTimeShortcuts.addCalendar(inp***REMOVED***;
                    DateTimeShortcuts.addTimezoneWarning(inp***REMOVED***;
            ***REMOVED***
        ***REMOVED***
***REMOVED***
        // Return the current time while accounting for the server timezone.
        now: function(***REMOVED*** {
            var body = document.getElementsByTagName('body'***REMOVED***[0***REMOVED***;
            var serverOffset = body.getAttribute('data-admin-utc-offset'***REMOVED***;
            if (serverOffset***REMOVED*** {
                var localNow = new Date(***REMOVED***;
                var localOffset = localNow.getTimezoneOffset(***REMOVED*** * -60;
                localNow.setTime(localNow.getTime(***REMOVED*** + 1000 * (serverOffset - localOffset***REMOVED******REMOVED***;
                return localNow;
        ***REMOVED*** else {
                return new Date(***REMOVED***;
        ***REMOVED***
***REMOVED***
        // Add a warning when the time zone in the browser and backend do not match.
        addTimezoneWarning: function(inp***REMOVED*** {
            var $ = django.jQuery;
            var warningClass = DateTimeShortcuts.timezoneWarningClass;
            var timezoneOffset = DateTimeShortcuts.timezoneOffset / 3600;

            // Only warn if there is a time zone mismatch.
            if (!timezoneOffset***REMOVED*** {
                return;
        ***REMOVED***

            // Check if warning is already there.
            if ($(inp***REMOVED***.siblings('.' + warningClass***REMOVED***.length***REMOVED*** {
                return;
        ***REMOVED***

            var message;
            if (timezoneOffset > 0***REMOVED*** {
                message = ngettext(
                    'Note: You are %s hour ahead of server time.',
                    'Note: You are %s hours ahead of server time.',
                    timezoneOffset
                ***REMOVED***;
        ***REMOVED***
            else {
                timezoneOffset *= -1;
                message = ngettext(
                    'Note: You are %s hour behind server time.',
                    'Note: You are %s hours behind server time.',
                    timezoneOffset
                ***REMOVED***;
        ***REMOVED***
            message = interpolate(message, [timezoneOffset***REMOVED******REMOVED***;

            var $warning = $('<span>'***REMOVED***;
            $warning.attr('class', warningClass***REMOVED***;
            $warning.text(message***REMOVED***;

            $(inp***REMOVED***.parent(***REMOVED***
                .append($('<br>'***REMOVED******REMOVED***
                .append($warning***REMOVED***;
***REMOVED***
        // Add clock widget to a given field
        addClock: function(inp***REMOVED*** {
            var num = DateTimeShortcuts.clockInputs.length;
            DateTimeShortcuts.clockInputs[num***REMOVED*** = inp;
            DateTimeShortcuts.dismissClockFunc[num***REMOVED*** = function(***REMOVED*** { DateTimeShortcuts.dismissClock(num***REMOVED***; return true; ***REMOVED***;

            // Shortcut links (clock icon and "Now" link***REMOVED***
            var shortcuts_span = document.createElement('span'***REMOVED***;
            shortcuts_span.className = DateTimeShortcuts.shortCutsClass;
            inp.parentNode.insertBefore(shortcuts_span, inp.nextSibling***REMOVED***;
            var now_link = document.createElement('a'***REMOVED***;
            now_link.setAttribute('href', "#"***REMOVED***;
            now_link.appendChild(document.createTextNode(gettext('Now'***REMOVED******REMOVED******REMOVED***;
            now_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.handleClockQuicklink(num, -1***REMOVED***;
        ***REMOVED******REMOVED***;
            var clock_link = document.createElement('a'***REMOVED***;
            clock_link.setAttribute('href', '#'***REMOVED***;
            clock_link.id = DateTimeShortcuts.clockLinkName + num;
            clock_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                // avoid triggering the document click handler to dismiss the clock
                e.stopPropagation(***REMOVED***;
                DateTimeShortcuts.openClock(num***REMOVED***;
        ***REMOVED******REMOVED***;

            quickElement(
                'span', clock_link, '',
                'class', 'clock-icon',
                'title', gettext('Choose a Time'***REMOVED***
            ***REMOVED***;
            shortcuts_span.appendChild(document.createTextNode('\u00A0'***REMOVED******REMOVED***;
            shortcuts_span.appendChild(now_link***REMOVED***;
            shortcuts_span.appendChild(document.createTextNode('\u00A0|\u00A0'***REMOVED******REMOVED***;
            shortcuts_span.appendChild(clock_link***REMOVED***;

            // Create clock link div
            //
            // Markup looks like:
            // <div id="clockbox1" class="clockbox module">
            //     <h2>Choose a time</h2>
            //     <ul class="timelist">
            //         <li><a href="#">Now</a></li>
            //         <li><a href="#">Midnight</a></li>
            //         <li><a href="#">6 a.m.</a></li>
            //         <li><a href="#">Noon</a></li>
            //         <li><a href="#">6 p.m.</a></li>
            //     </ul>
            //     <p class="calendar-cancel"><a href="#">Cancel</a></p>
            // </div>

            var clock_box = document.createElement('div'***REMOVED***;
            clock_box.style.display = 'none';
            clock_box.style.position = 'absolute';
            clock_box.className = 'clockbox module';
            clock_box.setAttribute('id', DateTimeShortcuts.clockDivName + num***REMOVED***;
            document.body.appendChild(clock_box***REMOVED***;
            clock_box.addEventListener('click', function(e***REMOVED*** { e.stopPropagation(***REMOVED***; ***REMOVED******REMOVED***;

            quickElement('h2', clock_box, gettext('Choose a time'***REMOVED******REMOVED***;
            var time_list = quickElement('ul', clock_box***REMOVED***;
            time_list.className = 'timelist';
            // The list of choices can be overridden in JavaScript like this:
            // DateTimeShortcuts.clockHours.name = [['3 a.m.', 3***REMOVED******REMOVED***;
            // where name is the name attribute of the <input>.
            var name = typeof DateTimeShortcuts.clockHours[inp.name***REMOVED*** === 'undefined' ? 'default_' : inp.name;
            DateTimeShortcuts.clockHours[name***REMOVED***.forEach(function(element***REMOVED*** {
                var time_link = quickElement('a', quickElement('li', time_list***REMOVED***, gettext(element[0***REMOVED******REMOVED***, 'href', '#'***REMOVED***;
                time_link.addEventListener('click', function(e***REMOVED*** {
                    e.preventDefault(***REMOVED***;
                    DateTimeShortcuts.handleClockQuicklink(num, element[1***REMOVED******REMOVED***;
            ***REMOVED******REMOVED***;
        ***REMOVED******REMOVED***;

            var cancel_p = quickElement('p', clock_box***REMOVED***;
            cancel_p.className = 'calendar-cancel';
            var cancel_link = quickElement('a', cancel_p, gettext('Cancel'***REMOVED***, 'href', '#'***REMOVED***;
            cancel_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.dismissClock(num***REMOVED***;
        ***REMOVED******REMOVED***;

            document.addEventListener('keyup', function(event***REMOVED*** {
                if (event.which === 27***REMOVED*** {
                    // ESC key closes popup
                    DateTimeShortcuts.dismissClock(num***REMOVED***;
                    event.preventDefault(***REMOVED***;
            ***REMOVED***
        ***REMOVED******REMOVED***;
***REMOVED***
        openClock: function(num***REMOVED*** {
            var clock_box = document.getElementById(DateTimeShortcuts.clockDivName + num***REMOVED***;
            var clock_link = document.getElementById(DateTimeShortcuts.clockLinkName + num***REMOVED***;

            // Recalculate the clockbox position
            // is it left-to-right or right-to-left layout ?
            if (getStyle(document.body, 'direction'***REMOVED*** !== 'rtl'***REMOVED*** {
                clock_box.style.left = findPosX(clock_link***REMOVED*** + 17 + 'px';
        ***REMOVED***
            else {
                // since style's width is in em, it'd be tough to calculate
                // px value of it. let's use an estimated px for now
                // TODO: IE returns wrong value for findPosX when in rtl mode
                //       (it returns as it was left aligned***REMOVED***, needs to be fixed.
                clock_box.style.left = findPosX(clock_link***REMOVED*** - 110 + 'px';
        ***REMOVED***
            clock_box.style.top = Math.max(0, findPosY(clock_link***REMOVED*** - 30***REMOVED*** + 'px';

            // Show the clock box
            clock_box.style.display = 'block';
            document.addEventListener('click', DateTimeShortcuts.dismissClockFunc[num***REMOVED******REMOVED***;
***REMOVED***
        dismissClock: function(num***REMOVED*** {
            document.getElementById(DateTimeShortcuts.clockDivName + num***REMOVED***.style.display = 'none';
            document.removeEventListener('click', DateTimeShortcuts.dismissClockFunc[num***REMOVED******REMOVED***;
***REMOVED***
        handleClockQuicklink: function(num, val***REMOVED*** {
            var d;
            if (val === -1***REMOVED*** {
                d = DateTimeShortcuts.now(***REMOVED***;
        ***REMOVED***
            else {
                d = new Date(1970, 1, 1, val, 0, 0, 0***REMOVED***;
        ***REMOVED***
            DateTimeShortcuts.clockInputs[num***REMOVED***.value = d.strftime(get_format('TIME_INPUT_FORMATS'***REMOVED***[0***REMOVED******REMOVED***;
            DateTimeShortcuts.clockInputs[num***REMOVED***.focus(***REMOVED***;
            DateTimeShortcuts.dismissClock(num***REMOVED***;
***REMOVED***
        // Add calendar widget to a given field.
        addCalendar: function(inp***REMOVED*** {
            var num = DateTimeShortcuts.calendars.length;

            DateTimeShortcuts.calendarInputs[num***REMOVED*** = inp;
            DateTimeShortcuts.dismissCalendarFunc[num***REMOVED*** = function(***REMOVED*** { DateTimeShortcuts.dismissCalendar(num***REMOVED***; return true; ***REMOVED***;

            // Shortcut links (calendar icon and "Today" link***REMOVED***
            var shortcuts_span = document.createElement('span'***REMOVED***;
            shortcuts_span.className = DateTimeShortcuts.shortCutsClass;
            inp.parentNode.insertBefore(shortcuts_span, inp.nextSibling***REMOVED***;
            var today_link = document.createElement('a'***REMOVED***;
            today_link.setAttribute('href', '#'***REMOVED***;
            today_link.appendChild(document.createTextNode(gettext('Today'***REMOVED******REMOVED******REMOVED***;
            today_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.handleCalendarQuickLink(num, 0***REMOVED***;
        ***REMOVED******REMOVED***;
            var cal_link = document.createElement('a'***REMOVED***;
            cal_link.setAttribute('href', '#'***REMOVED***;
            cal_link.id = DateTimeShortcuts.calendarLinkName + num;
            cal_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                // avoid triggering the document click handler to dismiss the calendar
                e.stopPropagation(***REMOVED***;
                DateTimeShortcuts.openCalendar(num***REMOVED***;
        ***REMOVED******REMOVED***;
            quickElement(
                'span', cal_link, '',
                'class', 'date-icon',
                'title', gettext('Choose a Date'***REMOVED***
            ***REMOVED***;
            shortcuts_span.appendChild(document.createTextNode('\u00A0'***REMOVED******REMOVED***;
            shortcuts_span.appendChild(today_link***REMOVED***;
            shortcuts_span.appendChild(document.createTextNode('\u00A0|\u00A0'***REMOVED******REMOVED***;
            shortcuts_span.appendChild(cal_link***REMOVED***;

            // Create calendarbox div.
            //
            // Markup looks like:
            //
            // <div id="calendarbox3" class="calendarbox module">
            //     <h2>
            //           <a href="#" class="link-previous">&lsaquo;</a>
            //           <a href="#" class="link-next">&rsaquo;</a> February 2003
            //     </h2>
            //     <div class="calendar" id="calendarin3">
            //         <!-- (cal***REMOVED*** -->
            //     </div>
            //     <div class="calendar-shortcuts">
            //          <a href="#">Yesterday</a> | <a href="#">Today</a> | <a href="#">Tomorrow</a>
            //     </div>
            //     <p class="calendar-cancel"><a href="#">Cancel</a></p>
            // </div>
            var cal_box = document.createElement('div'***REMOVED***;
            cal_box.style.display = 'none';
            cal_box.style.position = 'absolute';
            cal_box.className = 'calendarbox module';
            cal_box.setAttribute('id', DateTimeShortcuts.calendarDivName1 + num***REMOVED***;
            document.body.appendChild(cal_box***REMOVED***;
            cal_box.addEventListener('click', function(e***REMOVED*** { e.stopPropagation(***REMOVED***; ***REMOVED******REMOVED***;

            // next-prev links
            var cal_nav = quickElement('div', cal_box***REMOVED***;
            var cal_nav_prev = quickElement('a', cal_nav, '<', 'href', '#'***REMOVED***;
            cal_nav_prev.className = 'calendarnav-previous';
            cal_nav_prev.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.drawPrev(num***REMOVED***;
        ***REMOVED******REMOVED***;

            var cal_nav_next = quickElement('a', cal_nav, '>', 'href', '#'***REMOVED***;
            cal_nav_next.className = 'calendarnav-next';
            cal_nav_next.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.drawNext(num***REMOVED***;
        ***REMOVED******REMOVED***;

            // main box
            var cal_main = quickElement('div', cal_box, '', 'id', DateTimeShortcuts.calendarDivName2 + num***REMOVED***;
            cal_main.className = 'calendar';
            DateTimeShortcuts.calendars[num***REMOVED*** = new Calendar(DateTimeShortcuts.calendarDivName2 + num, DateTimeShortcuts.handleCalendarCallback(num***REMOVED******REMOVED***;
            DateTimeShortcuts.calendars[num***REMOVED***.drawCurrent(***REMOVED***;

            // calendar shortcuts
            var shortcuts = quickElement('div', cal_box***REMOVED***;
            shortcuts.className = 'calendar-shortcuts';
            var day_link = quickElement('a', shortcuts, gettext('Yesterday'***REMOVED***, 'href', '#'***REMOVED***;
            day_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.handleCalendarQuickLink(num, -1***REMOVED***;
        ***REMOVED******REMOVED***;
            shortcuts.appendChild(document.createTextNode('\u00A0|\u00A0'***REMOVED******REMOVED***;
            day_link = quickElement('a', shortcuts, gettext('Today'***REMOVED***, 'href', '#'***REMOVED***;
            day_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.handleCalendarQuickLink(num, 0***REMOVED***;
        ***REMOVED******REMOVED***;
            shortcuts.appendChild(document.createTextNode('\u00A0|\u00A0'***REMOVED******REMOVED***;
            day_link = quickElement('a', shortcuts, gettext('Tomorrow'***REMOVED***, 'href', '#'***REMOVED***;
            day_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.handleCalendarQuickLink(num, +1***REMOVED***;
        ***REMOVED******REMOVED***;

            // cancel bar
            var cancel_p = quickElement('p', cal_box***REMOVED***;
            cancel_p.className = 'calendar-cancel';
            var cancel_link = quickElement('a', cancel_p, gettext('Cancel'***REMOVED***, 'href', '#'***REMOVED***;
            cancel_link.addEventListener('click', function(e***REMOVED*** {
                e.preventDefault(***REMOVED***;
                DateTimeShortcuts.dismissCalendar(num***REMOVED***;
        ***REMOVED******REMOVED***;
            django.jQuery(document***REMOVED***.on('keyup', function(event***REMOVED*** {
                if (event.which === 27***REMOVED*** {
                    // ESC key closes popup
                    DateTimeShortcuts.dismissCalendar(num***REMOVED***;
                    event.preventDefault(***REMOVED***;
            ***REMOVED***
        ***REMOVED******REMOVED***;
***REMOVED***
        openCalendar: function(num***REMOVED*** {
            var cal_box = document.getElementById(DateTimeShortcuts.calendarDivName1 + num***REMOVED***;
            var cal_link = document.getElementById(DateTimeShortcuts.calendarLinkName + num***REMOVED***;
            var inp = DateTimeShortcuts.calendarInputs[num***REMOVED***;

            // Determine if the current value in the input has a valid date.
            // If so, draw the calendar with that date's year and month.
            if (inp.value***REMOVED*** {
                var format = get_format('DATE_INPUT_FORMATS'***REMOVED***[0***REMOVED***;
                var selected = inp.value.strptime(format***REMOVED***;
                var year = selected.getUTCFullYear(***REMOVED***;
                var month = selected.getUTCMonth(***REMOVED*** + 1;
                var re = /\d{4***REMOVED***/;
                if (re.test(year.toString(***REMOVED******REMOVED*** && month >= 1 && month <= 12***REMOVED*** {
                    DateTimeShortcuts.calendars[num***REMOVED***.drawDate(month, year, selected***REMOVED***;
            ***REMOVED***
        ***REMOVED***

            // Recalculate the clockbox position
            // is it left-to-right or right-to-left layout ?
            if (getStyle(document.body, 'direction'***REMOVED*** !== 'rtl'***REMOVED*** {
                cal_box.style.left = findPosX(cal_link***REMOVED*** + 17 + 'px';
        ***REMOVED***
            else {
                // since style's width is in em, it'd be tough to calculate
                // px value of it. let's use an estimated px for now
                // TODO: IE returns wrong value for findPosX when in rtl mode
                //       (it returns as it was left aligned***REMOVED***, needs to be fixed.
                cal_box.style.left = findPosX(cal_link***REMOVED*** - 180 + 'px';
        ***REMOVED***
            cal_box.style.top = Math.max(0, findPosY(cal_link***REMOVED*** - 75***REMOVED*** + 'px';

            cal_box.style.display = 'block';
            document.addEventListener('click', DateTimeShortcuts.dismissCalendarFunc[num***REMOVED******REMOVED***;
***REMOVED***
        dismissCalendar: function(num***REMOVED*** {
            document.getElementById(DateTimeShortcuts.calendarDivName1 + num***REMOVED***.style.display = 'none';
            document.removeEventListener('click', DateTimeShortcuts.dismissCalendarFunc[num***REMOVED******REMOVED***;
***REMOVED***
        drawPrev: function(num***REMOVED*** {
            DateTimeShortcuts.calendars[num***REMOVED***.drawPreviousMonth(***REMOVED***;
***REMOVED***
        drawNext: function(num***REMOVED*** {
            DateTimeShortcuts.calendars[num***REMOVED***.drawNextMonth(***REMOVED***;
***REMOVED***
        handleCalendarCallback: function(num***REMOVED*** {
            var format = get_format('DATE_INPUT_FORMATS'***REMOVED***[0***REMOVED***;
            // the format needs to be escaped a little
            format = format.replace('\\', '\\\\'***REMOVED***;
            format = format.replace('\r', '\\r'***REMOVED***;
            format = format.replace('\n', '\\n'***REMOVED***;
            format = format.replace('\t', '\\t'***REMOVED***;
            format = format.replace("'", "\\'"***REMOVED***;
            return function(y, m, d***REMOVED*** {
                DateTimeShortcuts.calendarInputs[num***REMOVED***.value = new Date(y, m - 1, d***REMOVED***.strftime(format***REMOVED***;
                DateTimeShortcuts.calendarInputs[num***REMOVED***.focus(***REMOVED***;
                document.getElementById(DateTimeShortcuts.calendarDivName1 + num***REMOVED***.style.display = 'none';
        ***REMOVED***;
***REMOVED***
        handleCalendarQuickLink: function(num, offset***REMOVED*** {
            var d = DateTimeShortcuts.now(***REMOVED***;
            d.setDate(d.getDate(***REMOVED*** + offset***REMOVED***;
            DateTimeShortcuts.calendarInputs[num***REMOVED***.value = d.strftime(get_format('DATE_INPUT_FORMATS'***REMOVED***[0***REMOVED******REMOVED***;
            DateTimeShortcuts.calendarInputs[num***REMOVED***.focus(***REMOVED***;
            DateTimeShortcuts.dismissCalendar(num***REMOVED***;
    ***REMOVED***
***REMOVED***;

    window.addEventListener('load', DateTimeShortcuts.init***REMOVED***;
    window.DateTimeShortcuts = DateTimeShortcuts;
***REMOVED******REMOVED***(***REMOVED***;
