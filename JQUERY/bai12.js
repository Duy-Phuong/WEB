$(document).ready(function(){

thoigian = setInterval(function(){ 
	$('.next').trigger('click');
}, 2000);



	$('.next').click(function(event) {

//xóa
clearInterval(thoigian);
		var next = $('.active').next();
		console.log(next.length);
		//xu li cho nut
		var vt  = $('.xanh').index() + 1;

		console.log("vi tri: " + vt);
		$('.nutslide ul li').removeClass('xanh');
		if(vt == $('.nutslide ul li').length){
			vt = 0;
		}
		$('.nutslide ul li:nth-child('+ (vt + 1) +')').addClass('xanh');
		//end
		if(next.length == 0) //k còn nữa
		{
			$('.active').addClass('bienmattrai').one('webkitAnimationEnd', function(event) {
			$('.bienmattrai').removeClass('bienmattrai');
console.log('trai');
			//$('.active').removeClass('active');
			});
			$('._1slide:first-child').addClass('divaophai').one('webkitAnimationEnd', function(event) {
				$('.active').removeClass('active');

				$('.divaophai').addClass('active');
				$('.active').removeClass('divaophai');
			});
			
			
		}else{
			$('.active').addClass('bienmattrai').one('webkitAnimationEnd', function(event) {
			$('.bienmattrai').removeClass('bienmattrai');
			});
			next.addClass('divaophai').one('webkitAnimationEnd', function(event) {
					$('.active').removeClass('active');

				$('.divaophai').addClass('active')
				$('.active').removeClass('divaophai');
			});
		}
		
	});

	//nut khsac
	$('.prev').click(function(event) {

//xóa
clearInterval(thoigian);

		var next = $('.active').prev();
		console.log(next.length);
		//xu li cho nut
		var vt  = $('.xanh').index() + 1;

		console.log("vi tri: " + vt);
		$('.nutslide ul li').removeClass('xanh');
		if(vt == 1){
			vt = $('.nutslide ul li').length + 1;
		}
		console.log("vi tri sau: " + vt);
		$('.nutslide ul li:nth-child('+ (vt - 1) +')').addClass('xanh');
		//end
		if(next.length == 0) //k còn nữa
		{
			$('.active').addClass('bienmatphai').one('webkitAnimationEnd', function(event) {
			$('.bienmatphai').removeClass('bienmatphai');
console.log('phai');
			//$('.active').removeClass('active');
			});
			$('._1slide:last-child').addClass('divaotrai').one('webkitAnimationEnd', function(event) {
					$('.active').removeClass('active');

				$('.divaotrai').addClass('active').removeClass('divaotrai');
			});
			
			
		}else{
			$('.active').addClass('bienmatphai').one('webkitAnimationEnd', function(event) {
			$('.bienmatphai').removeClass('bienmatphai');
			});
			next.addClass('divaotrai').one('webkitAnimationEnd', function(event) {
					$('.active').removeClass('active');

				$('.divaotrai').addClass('active').removeClass('divaotrai');
			});
		}
		
	});

// nut

 	$('.nutslide ul li').click(function(event) {
 		$('.nutslide ul li').removeClass('xanh');
 		$(this).addClass('xanh'); //chi co nut đó bấm ms dk

 		//xư lí
 		//alert($(this).index() + 1);
 		var x = $(this).index() + 1;
 		console.log(x);
 		$('.active').addClass('bienmatphai').one('webkitAnimationEnd', function(event) {
			$('.bienmatphai').removeClass('bienmatphai');

			//$('.active').removeClass('active');

			});
			$('._1slide:nth-child(' + x + ')').addClass('divaotrai').one('webkitAnimationEnd', function(event) {
					$('.active').removeClass('active');

				$('.divaotrai').addClass('active').removeClass('divaotrai');
			});
 	});

 	// $('.nutslide ul li:nth-child(3)').click(function(event) {
 	// 	$('.active').addClass('bienmatphai').one('webkitAnimationEnd', function(event) {
		// 	$('.bienmatphai').removeClass('bienmatphai');

		// 	//$('.active').removeClass('active');
		// 	});
		// 	$('._1slide:nth-child(3)').addClass('divaotrai').one('webkitAnimationEnd', function(event) {
		// 			$('.active').removeClass('active');

		// 		$('.divaotrai').addClass('active').removeClass('divaotrai');
		// 	});
 	// });

 

});