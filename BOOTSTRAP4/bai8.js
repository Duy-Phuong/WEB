


$(document).ready(function(){
	
		var docao = $(window).height();
    	console.log(docao);
    	$('.top1').css({'height':'700px'});
    $(window).resize(function(){
    	var docao = $(window).height();
    	console.log(docao);
    	$('.top1').css({'height':docao});
	});

	//nut
	$('.nutmenu').click(function() {
		$('.menuphai').addClass('ra');
		return false;
	// chong the a chay qua trang web khac
	});

	$('.nutmenuclose').click(function() {
		$('.menuphai').removeClass('ra');
		return false;
	// chong the a chay qua trang web khac
	});

	// in ra vt class
	console.log($('.top2').offset().top);
	$('.top1 a.btn.btn-success').click(function() {
		/* Act on the event */
		
		$("body").animate({
        
        opacity: '0.5',
   		// scrollTop:$('.top2').offset().top, 2000
    	});

		return false;
	});
});

// $('.nut').on('click', '.selector', function(event) {
// 	event.preventDefault();
// 	/* Act on the event */
// });

// css({
// 	property1: 'value1',
// 	property2: 'value2'
// });
// attr({
// 	property1: 'value1',
// 	property2: 'value2'
// });