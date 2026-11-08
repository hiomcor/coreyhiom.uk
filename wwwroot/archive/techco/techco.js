$(function(){
    burger();
});

function burger(){
    $('#burger').click(function() {
        $(".filter").toggleClass('flex');
        $("#toggle").toggleClass('fixed');
        console.log("TETETE");
    });

    window.onresize = burgerTog;
    function burgerTog() {
        var intFrameWidth = window.innerWidth;
        if(intFrameWidth > '600'){
            console.log("TETETE");
            $('.filter').removeClass('flex');
            $('.filter').removeClass('fixed');
            $("#burger").prop("checked", false);
        }
    }
}
