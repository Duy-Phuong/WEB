$(document).ready(function(){

$(".dangnhap").animate({
	opacity: 0,
	marginLeft: -100
	});
$(".nut2").click(function() {
	// $(".dangki").hide();
	$(".dangki").animate({
	opacity: 0,
	marginLeft: -100
	});
	$(".dangnhap").animate({
	opacity: 1,
	marginLeft: 0
	});
});

// form dang nhap
$(".nut1").click(function() {
	// $(".dangki").hide();
	$(".dangnhap").animate({
	opacity: 0,
	marginLeft: -100
	});
	$(".dangki").animate({
	opacity: 1,
	marginLeft: 0
	});
});
});