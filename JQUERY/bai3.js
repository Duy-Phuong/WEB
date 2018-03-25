$(document).ready(function(){

	
		console.log('CT bat dau chay');
        

        $(window).scroll(function() {
    if ($(document).scrollTop() > 600) {
      $(".nodung1").addClass("test");
    } else {
      $(".nodung1").removeClass("test");
    }
  });
});