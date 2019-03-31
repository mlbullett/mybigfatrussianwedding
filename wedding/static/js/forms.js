/* Mybigfatrussian.wedding by Maximilien Bullett is licensed under a CCA 4.0 international license (https://creativecommons.org/licenses/by/4.0/) */
/* Dynamic form handling */
$(document).ready(function () {
    var form = $('#rsvpform')
    var emptyForm = $('.empty-form').children();
    var totalForms = $(form).children('input[name$=TOTAL_FORMS]');
    var initialForms = $(form).children('input[name$=INITIAL_FORMS]');
    var prefix = initialForms.attr('name').replace(/-INITIAL_FORMS$/, '');

    function addForm() {
        var newForm = emptyForm.clone(true);
        newForm.addClass('guest');
        var total = totalForms.val();
        newForm.find('input').each(function () {
            var name = $(this).attr('name').replace('__prefix__', total);
            var id = 'id_' + name;
            $(this).attr({ 'name': name, 'id': id }).val('');
        });
        newForm.find('[id$="_name"]').attr('required', true);
        newForm.find('[data-formset-remove-form]').click(function () {
            removeForm($(this), total);
        });
        total++;
        totalForms.val(total);
        last = $('.guest').filter(':last');
        newForm.insertAfter(last);
    }

    function removeForm(btn, num) {
        var total = totalForms.val();
        total--;
        totalForms.val(total);
        btn.parent().parent().remove();
        var i = 0;
        form.find('.guest').each(function () {
            $(this).find('input').each(function () {
                var name = $(this).attr('name').replace(/\d+/, i);
                var id = 'id_' + name;
                $(this).attr({ 'name': name, 'id': id });
            });
            i++;
        });
    }

    $('[data-formset-add-form]').click(function () {
        addForm();
    });

    $('.empty-form :input[required]').removeAttr('required');
});

/* AJAX form handling*/
$(document).ready(function () {

    // AJAX for RSVP form
    function send_rsvp() {
        var guests = [];
        $('.guest').each(function () {
            var guest = {};
            guest['first_name'] = $(this).find('input[name$="-first_name"]').val();
            guest['last_name'] = $(this).find('input[name$="-last_name"]').val();
            guest['dietary'] = $(this).find('input[name$="-dietary"]').val();
            guests.push(guest);
        });
        var is_attending = $("input[name='rsvp-is_attending']:checked").val();
        var email = $('#id_rsvp-email').val();
        var song = $('#id_rsvp-song').val();
        var message = $('#id_rsvp-message').val();

        $.ajax({
            type: 'POST',
            url: 'rsvp',
            data: {
                'guests': JSON.stringify(guests),
                'is_attending': is_attending,
                'email': email,
                'song': song,
                'message': message
            },

            success: function (json) {
                $('input[name$="-first_name"]').val("");
                $('input[name$="-last_name"]').val("");
                $('input[name$="-dietary"]').val("");
                $("input[name='rsvp-is_attending']").removeAttr("checked");
                $('#id_rsvp-email').val("");
                $('#id_rsvp-song').val("");
                $('#id_rsvp-message').val("");
                $('#rsvpresult').text(json.success);
            },

            error: function (json) {
                $('#rsvpresult').text(json.responseJSON.error);
            }
        });
    }

    // Submit RSVP form
    $('#rsvpform').submit(function (event) {
        event.preventDefault();
        send_rsvp();
    });

    // AJAX for contact form
    function send_contact() {
        var name = $('#name').val();
        var from_email = $('#from_email').val();
        var message = $('#message').val();

        $.ajax({
            type: 'POST',
            url: 'contactus',
            data: {
                'name': name,
                'from_email': from_email,
                'message': message
            },

            success: function (json) {
                $('#name').val('');
                $('#from_email').val('');
                $('#message').val('');
                $('#contactresult').text(json.success);
            },

            error: function (json) {
                $('#contactresult').text(json.responseJSON.error);
            }
        });
    };

    // Submit contact form
    $('#contactform').submit(function (event) {
        console.log(event);
        event.preventDefault();
        send_contact();
    });

});

/* csrf handling */
$(function () {


    // This function gets cookie with a given name
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader('X-CSRFToken', csrftoken);
            }
        }
    });

});