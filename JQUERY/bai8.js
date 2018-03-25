$(document).ready(function(){
		$('.ndthem').slideUp();
	// TweenMax.from($('.tinto'), 1, {top:100, opacity:0}) 1s tu vt

	$('.nut').click(function(event) {
		$('.ndthem').slideToggle();
	TweenMax.staggerFrom($('.ndthem .tinto'), 1, {top:900, opacity:0}, 0.4) //1 casi casch nhau 0.4s

	});
});