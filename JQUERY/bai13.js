$(document).ready(function(){

///tinh vt ban dau khi chua lm gi
var vt1 = $('.menutren1').offset().top;
console.log( 'vt menutren1' );
console.log( vt1);

	$(window).scroll(function(event) {
		console.log('ban vua cuon chuot');
		console.log( $(document).scrollTop() );

		 if ($(document).scrollTop() > 100 && $(document).scrollTop() < 300){
		 	console.log('> 100');
		 	$('.menutren').addClass('bienhinh');
		 }else {
		 	$('.menutren').removeClass('bienhinh');
		 }

		 if ($(document).scrollTop() >= 300 && $(document).scrollTop() < 500){
		 	console.log('> 100');
		 	$('.menutren').addClass('xayzacap1');
		 }else {
		 	$('.menutren').removeClass('xayzacap1');
		 }

		 if ($(document).scrollTop() >= 500){
		 	console.log('> 100');
		 	$('.menutren').addClass('xayzacap2');
		 }else {
		 	$('.menutren').removeClass('xayzacap2');
		 }


		  if ($(document).scrollTop() >= vt1){
		 
		 	$('.menutren1').addClass('duoi');
		 }else {
		 	$('.menutren1').removeClass('duoi');
		 }

	});
 

});