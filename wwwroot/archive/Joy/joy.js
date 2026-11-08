$(function(){
    typer();
    dropMenu();
    chooseLocation();
    chooseArrive();
    chooseLeave();
    burger();
});

function dropMenu (){
    var $dropLo = $(".drop-location"),
        $dropAr = $(".drop-arriving"),
        $dropLe = $(".drop-leaving");

    $(".location").focusin(function(){
        if ($dropLo.css("display") === "none"){
            $dropAr.slideUp("fast");
            $dropLe.slideUp("fast");
            $dropLo.slideDown("fast");
            $dropLo.css("display", "flex")
        }else {
            $dropLo.slideUp("fast");
        }
    });

    $(".location").focusout(function(){
        $dropLo.slideUp("fast");
    });

    $(".arriving").click(function(){
        if ($dropAr.css("display") === "none"){
            $dropLo.slideUp("fast");
            $dropLe.slideUp("fast");
            $dropAr.slideDown("fast");
        }else {
            $dropAr.slideUp("fast");
        }
    });

    $(".leaving").click(function(){
        if ($dropLe.css("display") === "none"){
            $dropAr.slideUp("fast");
            $dropLo.slideUp("fast");
            $dropLe.slideDown("fast");
        }else {
            $dropLe.slideUp("fast");
        }
    });
}

function typer () {
        $("#search").typed({
        strings: ["Paris, France", "Rome, Italy", "Copenhagen, Denmark", "Madrid, Spain", "London, England", "Marrakech, Morocco", "Where are you going?"],
        typeSpeed: 0,
        backDelay: 1000,
        loop: true
        });
    };

function chooseLocation () {
    var $search1 = $('#search-location-one'),
        $search2 = $('#search-location-two'),
        $search3 = $('#search-location-three');

    $search1.click(function(){
        var $replace = $('#search-location-one h1').text()
        $('#search').val($replace);
    });
    $search2.click(function(){
        var $replace = $('#search-location-two h1').text()
        $('#search').val($replace);
    });
    $search3.click(function(){
        var $replace = $('#search-location-three h1').text()
        $('#search').val($replace);
    });
}

function chooseArrive () {
    var d = new Date(),
        year = d.getFullYear(),
        month = (d.getMonth() + 1),
        day = d.getDate(),
        misc = d.getDay();
    $calArr = null
    $calLea = null

    $('.arriving .input-main').text(day + "." + month + "." + year);

    $('.drop-arriving .calender-default').click(function(){
        $calArr = $(this).text();
        calenderActive();
        $('.arriving .input-main').text($calArr + "." + month + "." + year);
        // $(".drop-arriving").delay(500).slideUp("fast");
    });
}

function chooseLeave () {
    var d = new Date();
    d.setDate(d.getDate()+14);
    var year = d.getFullYear(),
        month = (d.getMonth() + 1),
        day = d.getDate();

    $('.leaving .input-main').text(day + "." + month + "." + year);

    $('.drop-leaving .calender-default').click(function(){
        $calLea = $(this).text();
        calenderActive();
        $('.leaving .input-main').text($calLea + "." + month + "." + year);
        // $(".drop-leaving").delay(500).slideUp("fast");
    });
}

function calenderActive (){

    $('.calender-default').css('background-color', '#fefefe');

    $(".calender-default").filter(function() {
        return $(this).text() === $calArr;
    }).css('background-color', '#60B294');

    for (var i = (parseInt($calArr)) + 1; i < parseInt($calLea); i++) {
        $(".calender-default").filter(function() {
            return $(this).text() === String(i);
        }).css('background-color', '#AED8C8');
    }

    if ( parseInt($calArr) < parseInt($calLea) ){
        $(".calender-default").filter(function() {
            return $(this).text() === $calLea;
        }).css('background-color', '#60B294');
    }else{
        $(".calender-default").filter(function() {
            return $(this).text() === $calLea;
        }).css('background-color', '#FF5C56');
    }
}

function burger(){
    $('#burger').click(function() {
        $(".filter").toggleClass('flex');
        $("#toggle").toggleClass('fixed');
    });

    window.onresize = burgerTog;
    function burgerTog() {
        var intFrameWidth = window.innerWidth;
        if(intFrameWidth > '600'){
            $('.filter').removeClass('flex');
            $('.filter').removeClass('fixed');
            $("#burger").prop("checked", false);
        }
    }
}
