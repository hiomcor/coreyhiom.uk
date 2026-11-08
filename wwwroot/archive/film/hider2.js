$2001 = $('<div id="textbox"><p><strong>2001: A Space Odyssey is a 1968 epic science-fiction film produced and directed by Stanley Kubrick.<br><br>\
The film follows a voyage to Jupiter with the sentient computer Hal after the discovery of a mysterious black monolith affecting human evolution.\
 It deals with the themes of existentialism, human evolution, technology, artificial intelligence, and extraterrestrial life.<br><br>\
It is noted for its scientifically accurate depiction of space flight, pioneering special effects, and ambiguous imagery.\
 It uses sound and minimal dialogue in place of traditional narrative techniques;\
 the soundtrack consists of classical music such as Gayane Ballet Suite, The Blue Danube, and Also sprach Zarathustra.</strong>\
</p></div>')

$mulholland = $('<div id="textbox"><p><strong>Mulholland Drive is a 2001 neo-noir mystery film written and directed by David Lynch.<br><br>\
It tells the story of an aspiring actress named Betty Elms, newly arrived in Los Angeles, who meets and befriends an amnesiac woman hiding in an apartment which belongs to Betty\'s aunt.<br><br>\
The story includes several other seemingly unrelated vignettes that eventually interlock, as well as some surreal and darkly comic scenes and images that relate to the cryptic narrative.</strong>\
</p></div>')

$dragon = $('<div id="textbox"><p><strong>The Girl with the Dragon Tattoo is a 2011 Swedish-American psychological thriller film based on the novel of the same name by Stieg Larsson.\
 This film adaptation was directed by David Fincher.<br><br>\
It tells the story of journalist Mikael Blomkvist\'s investigation to find out what happened to a woman from a wealthy family who disappeared 40 years prior.\
 He recruits the help of computer hacker Lisbeth Salander.<br><br>\
 The Girl with the Dragon Tattoo received positive reviews from critics, with particular note to the cast, tone, score and cinematography.</strong>\
</p></div>')

$rope = $('<div id="textbox"><p><strong>Rope is a 1948 American film noir psychological crime thriller film directed by Alfred Hitchcock,\
 based on the 1929 play of the same name by Patrick Hamilton.<br><br>\
Starring James Stewart, John Dall and Farley Granger, this is the first of Hitchcock\'s Technicolor films,\
 and is notable for taking place in real time and being edited so as to appear as a single continuous shot through the use of long takes.<br><br>\
The original play was said to be inspired by the real-life murder of 14-year-old Bobby Franks in 1924 by University of Chicago students Nathan Leopold and Richard Loeb.</strong>\
</p></div>')


$(document).ready(function() {

    $('.button1').click(function() {
        $('.opacity-layer').fadeOut(500);
        $('.container').fadeOut(500, function() {
            $('.container').css({"width":"1200px"});
            $('.opacity-layer').css({"width":"1200px"});
            $('.h1-replace').text("2001: A SPACE ODYSSEY");
            $('.h1-replace').css({"color":"#ffce00"});
            $('.h1-replace').css({"font-size":"3.6rem"});
            $('.h1-replace-colour').css({"background-color":"#111111"});
            $('.cover-alt').css({"background-image":"url(../media/2001-cover.jpg"});
            $('#textbox').replaceWith($2001);
            $('.container').fadeIn(500);
            $('.opacity-layer').fadeIn(500);
            $('body').css({"background-image":"url(../media/2001-blur.jpg)"});
        });

    });

    $('.button2').click(function() {
        $('.opacity-layer').fadeOut(500);
        $('.container').fadeOut(500, function() {
            $('.container').css({"width":"1200px"});
            $('.opacity-layer').css({"width":"1200px"});
            $('.h1-replace').text("MULHOLLAND DRIVE");
            $('.h1-replace').css({"font-size":"3.2rem"});
            $('.h1-replace').css({"color":"#fafafa"});
            $('.h1-replace-colour').css({"background-color":"#111111"});
            $('.cover-alt').css({"background-image":"url(../media/mulholland-cover.jpg)"});
            $('#textbox').replaceWith($mulholland);
            $('.container').fadeIn(500);
            $('.opacity-layer').fadeIn(500);
            $('body').css({"background-image":"url(../media/mul-blur.jpg)"});
        });

    });

    $('.button3').click(function() {
        $('.opacity-layer').fadeOut(500);
        $('.container').fadeOut(500, function() {
            $('.container').css({"width":"1200px"});
            $('.opacity-layer').css({"width":"1200px"});
            $('.h1-replace').text("THE GIRL WITH THE DRAGON TATTOO");
            $('.h1-replace').css({"font-size":"3rem"});
            $('.h1-replace').css({"color":"white"});
            $('.h1-replace-colour').css({"background-color":"#111111"});
            $('.cover-alt').css({"background-image":"url(../media/dragon-cover2.jpg"});
            $('#textbox').replaceWith($dragon);
            $('.container').fadeIn(500);
            $('.opacity-layer').fadeIn(500);
            $('body').css({"background-image":"url(../media/dragon-blur.jpg)"});
        });

    });

    $('.button4').click(function() {
        $('.opacity-layer').fadeOut(500);
        $('.container').fadeOut(500, function() {
            $('.container').css({"width":"1200px"});
            $('.opacity-layer').css({"width":"1200px"});
            $('.h1-replace').text("ROPE");
            $('.h1-replace').css({"font-size":"3.5rem"});
            $('.h1-replace').css({"color":"#fafafa"});
            $('.h1-replace-colour').css({"background-color":"#111111"});
            $('.cover-alt').css({"background-image":"url(../media/rope-cover.jpg"});
            $('#textbox').replaceWith($rope);
            $('.container').fadeIn(500);
            $('.opacity-layer').fadeIn(500);
            $('body').css({"background-image":"url(../media/rope-blur.jpg)"});
        });

    });

});

$(document).ready(function() {
    $('.button1').mouseenter(function() {
        $('.button1').css({"background-image":"url(../media/2001-buttonO.png)"});
    });
    $('.button1').mouseleave(function() {
        $('.button1').css({"background-image":"url(../media/2001-buttonC.png)"});
    });

    $('.button2').mouseenter(function() {
        $('.button2').css({"background-image":"url(../media/mulholland-buttonO.png)"});
    });
    $('.button2').mouseleave(function() {
        $('.button2').css({"background-image":"url(../media/mulholland-buttonCR.png)"});
    });

    $('.button3').mouseenter(function() {
        $('.button3').css({"background-image":"url(../media/dragon-buttonO.png)"});
    });
    $('.button3').mouseleave(function() {
        $('.button3').css({"background-image":"url(../media/dragon-buttonC.png)"});
    });

    $('.button4').mouseenter(function() {
        $('.button4').css({"background-image":"url(../media/rope-buttonO.png)"});
    });
    $('.button4').mouseleave(function() {
        $('.button4').css({"background-image":"url(../media/rope-buttonC.png)"});
    });
});
