/*
 * apploader (02847 Hackathon)
 * @author Markus Steiger http://01241.com
 * @copyright 2016 Markus Steiger <steiger.01241@gmail.com> [All Rights Reserved]
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 * unminified  ../apploader.js
 *
 */

$(document).ready(function() {

    "use strict";

    $(function(){
        setTimeout(hideSplash, 1200);
    });

    function hideSplash() {
        $('#loadingmask').fadeOut(400, function(){ $(this).remove(); });
    }


/*

    $.getJSON('../../proxy.php', function(result) {

        console.log(result);

        for (var i = 0; i < result.length; i++){

            $('#content4').append("result index: " + i + "<br>");

            var name = result[i].longname;
            $('#content2 ul').append('<li>Longname: ' + name + '</li>');

            var obj = result[i];
            for (var key in obj){
                var value = obj[key];
                $('#content ul').append("<li>" + key + ": " + value + "</li>");
            }

        });   */












    // OPEN - CLOSE About and Settings Windows
    $('#settings-nav').on('click', function() {
        $('#dialog-settings').toggleClass('display-none');
        $('#dialog-about').addClass('display-none');
        return false;
    });
    $('#about-nav').on('click', function() {
        $('#dialog-about').toggleClass('display-none');
        $('#dialog-settings').addClass('display-none');
        return false;
    });
    $('#close-dialog-about').on('click', function() {
        $('#dialog-about').addClass('display-none');
        return false;
    });
    $('#close-dialog-settings').on('click', function() {
        $('#dialog-settings').addClass('display-none');
        return false;
    });




});