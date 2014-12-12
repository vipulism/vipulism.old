//  fly
<!--
$(document).ready(function() {
    emitter2 = new particle_emitter({
        image: ['images/bug1.gif', 'images/bug2.gif', 'images/bug3.gif', 'images/bug4.gif'],
        center: ['0', '10'],
        offset: [0, 0],
        radius: 5,
        size: 10,
        velocity: 10,
        decay: 800
    });
    emitter2.start();
});
-->
$(document).ready(function() {
    // Handler for .ready() called.
    var s = skrollr.init({
        edgeStrategy: 'set',
        easing: {
            WTF: Math.random,
            inverted: function(p) {
                return 1 - p;
            }
        }
    });
});
// birds ---------------
$(document).ready(function() {
    $.firefly({
        images: ['images/bird.gif', 'images/bird2.gif', 'images/bird3.gif'],
        total: 3
    });
});
// scroll
$(document).ready(function() {
    // ship---------------------\
    function ship() {
        $(".ship img, .bugs ").css({
            left: "110%"
        });
        $(".ship img, .bugs ").animate({
            position: "absolute",
            left: "-10%",
            marginLeft: "-400px"
        }, 50000, 'linear', function() {
            ship();
        });
    }
    ship();

//  $(".hi-arrow").mouseover(function cArrow() {
//         $(".hi-arrow").css({
//             right: "25px"
//         });
//         $(".hi-arrow").animate({
            
//             right: "30px",
           
//         }, 500, 'linear', function() {
//             cArrow();
//         });
//     }
//     cArrow();
// );

 function buildings() {
        $(".building-bg").css({
            left: "0%"
        });
        $(".building-bg").animate({
            
            left: "-100%",
           
        }, 80000, 'linear', function() {
           
              $(".building-bg").animate({
            
            left: "0%",
           
        }, 80000, 'linear', function() {
           
             buildings();
        });

        });
    }
    buildings();
    

    $('.arrow2').click(function() {
        $('html, body').animate({
            scrollTop: "+=400px"
        }, 'slow');
        return false;
    });
    $(".about, .scroll-down").click(function() {
        $('html, body').animate({
            scrollTop: "1000px"
        }, 2500);
        return false;
    });
    $(".skills, .scroll-down2").click(function() {
        $('html, body').animate({
            scrollTop: "1900px"
        }, 4000);
        return false;
    });
    $(".download").click(function() {
        $('html, body').animate({
            scrollTop: "2200px"
        }, 2500);
        return false;
    });
    $(".contact").click(function() {
        $('html, body').animate({
            scrollTop: "2400px"
        }, 3000);
        return false;
    });
    // $('html, body').animate({scrollTop:"500px"}, 'slow');
    // me waking
    $(window).scroll(function mwWalk() {
        var scroll = $(window).scrollTop();
        if (scroll >= 2400) {
            $("#canvas").animate({
                left: "200px"
            }, 10000, mwWalk);
        } else if (scroll <= 2300) {
            $("#canvas").css({
                left: "-550px"
            });
        }
    });

 

            
   

    // twitter-bird
    $(window).scroll(function twitterBird() {
var scroll = $(window).scrollTop();

        function chk() {
            if ($(".twitter-bird").css('left') >= '399') {
                $('.t-add').fadeIn(600);
            } else {
                $('.t-add').hide();
            };
                    }


        if (scroll >= 2400) {
            $(".twitter-bird").animate({
                left: "400px"
            }, 10000, twitterBird);
            

            chk();
        } else if (scroll <= 2300) {
            $(".twitter-bird").css({
                left: "-150px"
            });
            
            $('.t-add').hide();
             
        }
    });
});
// rain ------------------
$(document).ready(function() {
    // Handler for .ready() called.
    var s = window.screen;
    var width = q.width = s.width;
    var height = q.height = s.height;
    var letters = Array(256).join(1).split('');
    var draw = function() {
        q.getContext('2d').fillStyle = 'rgba(255,255,255,.05)';
        q.getContext('2d').fillRect(0, 0, width, height);
        q.getContext('2d').fillStyle = '#666';
        letters.map(function(y_pos, index) {
            text = String.fromCharCode(4e2 + Math.random() * 33);
            x_pos = index * 10;
            q.getContext('2d').fillText(text, x_pos, y_pos);
            letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
        });
    };
    setInterval(draw, 33);
});
// DOWNLOAD BTN 
$(document).ready(function() {
    $('.btn-blob').hover(function() {
        $(this).toggleClass('blob');
    });
    // $('.btn-blob').click(function() {
    //   $(this).toggleClass('blob');
    // });
});
