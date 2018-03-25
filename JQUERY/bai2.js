$(document).ready(function(){

	$('.nd1khoi').slideUp();
	$('.motkhoi h3').click(function() {
			// $('.nd1khoi').slideUp();
			// cho co lại trk khi sổ
		console.log('run');
		$(this).next('.nd1khoi').slideToggle('slow'); 
		$(this).toggleClass('xanh');
	});
    // $("#k1").click(function(){
    //     $("#nd1").slideToggle("slow");
    // });

    // $("#k2").click(function(){
    //     $("#nd2").slideToggle("slow");
    // });

    // $("#k3").click(function(){
    //     $("#nd3").slideToggle("slow");
    // });

    // $("#k4").click(function(){
    //     $("#nd4").slideToggle("slow");
    // });


 

});