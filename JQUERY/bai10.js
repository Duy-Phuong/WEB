$(document).ready(function(){

	$('.nut').click(function(event) {
		$('.noidung').addClass('hienra');
		$('.momo').addClass('hienra');
	});

	$('.nutdong, .momo').click(function(event) {
		$('.noidung').removeClass('hienra');
		$('.momo').removeClass('hienra');
	});


var thongbao = setInterval(function(){ 
		$('.momo').addClass('hienra');

 clearInterval(thongbao); //k xh lần nữa
}, 2000);


});