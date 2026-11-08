$(function(){
    showMore();
    isSelected();
});

// document.addEventListener("mousemove", function (event)
// {
// 	rotate (event)
// }, false);

function showMore(){
    $('.show-more').click(function(){
        console.log('Show more')
        for (var i=0;i<=9;i++) {
            (function(ind) {
                setTimeout(function(){appendListing();}, 50 * ind);
            })(i);
        }
    });
};

function appendListing() {
    $('#listings').append('<div class="listing full">\
        <div class="listing-container">\
            <div class="part1">\
                <div class="job-role">Job&nbsp;Role</div>\
                <div class="company">Company</div>\
            </div>\
            <div class="part2">\
                <i class="fa fa-map-marker" aria-hidden="true"></i>Location\
            </div>\
            <div class="part3">\
                <div class="time">Part&nbsp;Time</div>\
                <div class="posted">6 days ago</div>\
            </div>\
        </div>\
    </div>');
}

function isSelected(){
    $('.options-item').click(function(){
        $('.options-item').removeClass('isSelected');
        $(this).addClass('isSelected');
    });
    $('.order-item').click(function(){
        $('.order-item').removeClass('isSelected');
        $(this).addClass('isSelected')
    });
}

// function rotate (event){
//     var x = event.clientX;
//     var y = event.clientY;
//     var w = window.innerWidth;
//     var midpointW = w / 2;
//     var midpointY = 275;
//     var posx = x - midpointW;
//     var posy = y - midpointY;
// 	var valx = (posx / midpointW) * 3;
//     var valy = (posy / midpointY) * 10;
// 	var logo = document.getElementById("paraCont");
//     var logo2 = document.getElementById("para");
// 	logo.style.transform = "perspective(550px) rotateY(" + valx + "deg) rotateX(" + valy + "deg)";
//     logo2.style.transform = "perspective(550px) rotateY(" + valy + "deg) rotateX(" + valx + "deg)";
// }
