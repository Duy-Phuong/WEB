$(document).ready(function(){

///tinh vt ban dau khi chua lm gi
var vt1 = $('.giaodien').offset().top;
console.log( 'vt menutren1' );
console.log( vt1);

	$(window).scroll(function(event) {
		console.log('ban vua cuon chuot');
		console.log( $(document).scrollTop() );



		  if ($(document).scrollTop() > (vt1-550)){
		 
		 	// $('.giaodien').addClass('bounceInUp animated');

		 	$('.giaodien .khoi:nth-child(1)').addClass('bounceInUp animated');
		 	$('.giaodien .khoi:nth-child(2)').addClass('bounceInUp animated');
		 	$('.giaodien .khoi:nth-child(3)').addClass('bounceInUp animated');
		 	$('.giaodien .khoi:nth-child(4)').addClass('bounceInUp animated');
		 	$('.giaodien .khoi:nth-child(5)').addClass('bounceInUp animated');
		 	$('.giaodien .khoi:nth-child(6)').addClass('bounceInUp animated');
		 	$('.giaodien .khoi:nth-child(7)').addClass('bounceInUp animated');
		 }else {
		 	$('.giaodien').removeClass('bounceInUp animated');
		 }

	});
 

});