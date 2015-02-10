// JavaScript Document

/* SITESCRIPTS */


/*
	Intro screen Paral & Lax parallax effect
*/

$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};

function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	
	scrollPosBottom = $(window).scrollBottom();
	
	/* scrollPosBottom = $(document).height(100) - $(window).height() - $(window).scrollTop(); */
	$('.title').css({
		'opacity': 0.95-((scrollPos-100/*height until opacity starts (supposed to be 100)*/)/150),
		//'opacity': 1+((scrollPosBottom)/150)
	});
	$('#parallax-wrapper .parallax-one').css({
		'height': 1000-(scrollPos*1.3),
	});
	/*$('.fixed_footer img').css({
		'height': 100+(scrollPos-3705),
		'margin-top': 0-(scrollPos-3805),
	}); ORIGINAL*/
	$('.fixed-footer img').css({
		'height': 200-(scrollPosBottom),
		'margin-top': 200+(scrollPosBottom-200),
	});

	
	$( "div#scrollPosisch" ).html(scrollPos);
	$( "div#scrollPosischBottom" ).html(scrollPosBottom);
	
	/*$('.title').css({
		'opacity': 0+((scrollPosBottom)/150)
	}); */

	/*var w = window.innerWidth; */
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});

