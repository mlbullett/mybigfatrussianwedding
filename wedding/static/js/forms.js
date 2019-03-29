$(document).ready(function () {

    // Send contact form on submit
    $("#contactform").submit(function (event) {
        event.preventDefault();
        send_contact();
    });

    // AJAX for contact
    function send_contact() {
        var name = $('#name').val();
        var from_email = $('#from_email').val();
        var message = $('#message').val();

        $.ajax({
            type: "POST",
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
                $('#contactresult').html("<div id='alerts'>" + json.result + " <a href='#' class='close'>&times;</a></div>");
            },

            error: function (xhr, errmsg, err) {
                $('#contactresult').html("<div id='alerts'>Oops! We have encountered an error: " + errmsg + " <a href='#' class='close'>&times;</a></div>");
            }
        });
    };
});

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
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});