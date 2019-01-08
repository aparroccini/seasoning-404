
$(document).ready(function() {
    
    $( ".mobile-nav" ).click(function() {
      $('.navbar').toggleClass('closed');
      $('nav').toggleClass('active');
    });

    $( ".close" ).click(function() {
      $('.navbar').toggleClass('closed');
      $('nav').toggleClass('active');
    });
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var mainBody = document.getElementById("hero");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        mainBody.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        mainBody.classList.remove("sticky");
    }
}

var headerHeight = $('header').height();

$(document).scroll(function() {
    var pos = $(document).scrollTop();
    var parallax = parseInt(pos * -0.3) + 'px';

    $('.hero').css('margin-top', parallax);

});




