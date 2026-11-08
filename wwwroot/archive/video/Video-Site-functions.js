$(document).ready(function() {

    window.onresize = function(){
        if (window.innerWidth < 1140){
            $('#sidebar').width('0px');
            $('.main').css('margin-left', '0');

            $('.main-tab').css('display', 'none');
            $('.mid-tab').css('display', 'none');
            $('.sub-tab').css('display', 'none');
            $('.footer-tab').css('display', 'none');
            $('.tab-title').css('display', 'none');
            $('.hr').css('display', 'none');

            $('.content').css('max-width','90vw');
        }
    }

    $('.burger-contain').click(function(){
        if ($('#sidebar').width() == '350'){
            $('#sidebar').width('0px');
            $('.main').css('margin-left', '0');

            $('.main-tab').css('display', 'none');
            $('.mid-tab').css('display', 'none');
            $('.sub-tab').css('display', 'none');
            $('.footer-tab').css('display', 'none');
            $('.tab-title').css('display', 'none');
            $('.hr').css('display', 'none');

            $('.content').css('max-width','90vw');

        } else {
            $('#sidebar').width('350px');
            $('.main-tab').css('display', 'flex');
            $('.mid-tab').css('display', 'flex');
            $('.sub-tab').css('display', 'flex');
            $('.footer-tab').css('display', 'flex');
            $('.tab-title').css('display', 'flex');
            $('.hr').css('display', 'flex');

            $('#sidebar').width('350px');
            $('.main').css('margin-left', '350px');

            $('.content').css('max-width','75vw');
        }
    });

    $('.dark-mode').click(function() {

        if ($('header').css('background-color') == 'rgb(11, 12, 25)'){
            $('header').css('background-color','#48E5C2');
            $('#sidebar').css('background-color','#DFFFDD');
            $('#sidebar').css('color','#0A2C38');
            $('.hr').css('background-color','#0A2C38');
            $('.main').css('background-color','#FCFAF9');
            $('.main').css('color','#0A2C38');
            $('body').css('background-color','#FCFAF9');
            $('.footer-tab').css('background-color','#DFFFDD');
            $('.footer-tab').css('border-top','1px solid #0A2C38');
            // $('.sign-in').css('background-color','#48E5C2');
            // $('.dark-mode').css('background-color','#48E5C2');
            // $('.sign-in:hover').css('background-color','#DFFFDD');
            // $('.dark-mode:hover').css('background-color','#DFFFDD');

        } else {
            $('header').css('background-color','#0B0C19');
            $('#sidebar').css('background-color','#161629');
            $('#sidebar').css('color','#F2F2F2');
            $('.main').css('background-color','#1D2137');
            $('.main').css('color','#F2F2F2');
            $('body').css('background-color','#1D2137');
            $('.hr').css('background-color','#F2F2F2');
            $('.footer-tab').css('background-color','#161629');
            $('.footer-tab').css('border-top','1px solid #F2F2F2');
            // $('.sign-in').css('background-color','#0B0C19');
            // $('.dark-mode').css('background-color','#0B0C19');
            // $('.sign-in:hover').css('background-color','#1D2137');
            // $('.dark-mode:hover').css('background-color','#1D2137');

            // $('header').css('background-color','#091826');
            // $('#sidebar').css('background-color','#112433');
            // $('#sidebar').css('color','#F2F2F2');
            // $('.main').css('background-color','#1B2D35');
            // $('.main').css('color','#F2F2F2');
            // $('body').css('background-color','#1B2D35');
            // $('.hr').css('background-color','#F2F2F2');
            // $('.footer-tab').css('background-color','#112433');
            // $('.footer-tab').css('border-top','1px solid #F2F2F2');
        }
    });

    $('.logo').click(function() {

    })
});
