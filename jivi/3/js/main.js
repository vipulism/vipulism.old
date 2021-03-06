 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */
 
 
$(document).ready(
 



  function() { 

    $("html").niceScroll({
    	scrollspeed: 60, // scrolling speed
        mousescrollstep: 60, // scrolling speed with mouse wheel (pixel)

    });

  }





);
( function( $ ) {

	   
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slide5 = $('.homeSlide5');
	$slideSpec = $('.slidespec');
	$sld3ph = $('.sld3-ph');
	$sld3txt = $('.sld3-txt');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){ 
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false,
		    smoothScrolling: true,
        	smoothScrollingDuration: 500,
        	mobileCheck: function() {
              //hack - forces mobile version to be off
              return false;
          }

		});
		

		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    $sld3ph.height(winH);
	    $sld3txt.height(winH);
	    $slide5.height(winH*5);
	    $slideSpec.height(winH+200);


	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));


	    
	}
	 if ($(window).width() <= 767) {

      	skrollr.init().destroy(); // skrollr.init() returns the singleton created above
		winH = $window.height();
      	$slide.height(winH);
	    $sld3ph.height(winH);
	    $sld3txt.height(winH);
	    $slide5.height(winH);
	    $slideSpec.height(winH);
	    console.log(winH);

    }
		
} )( jQuery );