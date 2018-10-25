$(document).ready(function(){
  var $windowPos = $(window).scrollTop();

  $('#navbar-toggle').on('click', function(e){
    e.preventDefault();

    $('body').toggleClass('nav-open');
    //$('#navbar').css("top", windowPos);
    $(this).toggleClass('is-active');
    //return false;
  });

  $('.close-nav').on('click', function(e){
    e.preventDefault();

    $('body').removeClass('nav-open');
    //$('#navbar').css("top", windowPos);
  });
  var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        nav_height = $navbar.height();
  $(window).scroll(function(){

    var scrollTop = $(this).scrollTop();
    if (scrollTop > 112) {
      $navbar.addClass("navbar-active");
        $navbar.addClass("navbar-active");
        $('#scroll').fadeIn();
    } else {
        $navbar.removeClass("navbar-active");
        $('#scroll').fadeOut();
    }


    var fadeOut = 1 - $(window).scrollTop() / 500;
    var shiftLeft = 50 - $(window).scrollTop() / 100;
    var reveal = 1 - $(window).scrollTop() / 20;
    var windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
    $('.client-page-name').css({opacity: fadeOut});
    $('.main-headline').css({'position':'relative', 'left': shiftLeft + '!important', 'opacity': fadeOut});
    $('.main-copy').css({right: fadeOut, opacity: fadeOut});

    // $('#img-border-left, #img-border-right').css({transform: 'translate3d(' + fadeOut + '0,0)'});
    if ($('#hero-img').length > 0) {
  					var HeroImageborderleft = document.getElementById('img-border-left');
  					var HeroImageborderright = document.getElementById('img-border-right');
  					HeroImageborderleft.style.transform = 'translate3d(' + windowScrolled / -3.5 + 'px, 0, 0)';
  					HeroImageborderright.style.transform = 'translate3d(' + windowScrolled / +3.5 + 'px, 0, 0)';
  					if ($(this).scrollTop() >= $('#hero-img').offset().top) {
  						$("#hero-img").addClass("bgrelative");
  					} else {
  						$("#hero-img").removeClass("bgrelative");
  					}
  				}
      // $(".client-main-img").css({
      //   "width": 1 + $(window).scrollTop() * 2,
      //   "height": 1 + $(window).scrollTop() * 5
      // });
  });
  $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
  var wave1 = $('#feel-the-wave').wavify({
  height: 80,
  bones: 4,
  amplitude: 60,
  color: '#f05152',
  speed: .15
});

var wave2 = $('#feel-the-wave-two').wavify({
  height: 140,
  bones: 3,
  amplitude: 40,
  color: 'rgba(240, 81, 82, .8)',
  speed: .25
});
  /* -----------------------------------------------
  /* How to use? : Check the GitHub README
  /* ----------------------------------------------- */

  /* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
  /*
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });
  */

  /* Otherwise just put the config content (json): */

  particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  );
});
