$(document).ready(function(){
	$(".home-bg").height($(window).height());

	$(window).resize(function(){
		$(".home-bg").height($(window).height());
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('#home').css({'background-attachment': 'scroll'});
	} else {
		$('#home').parallax('50%', 0.1);
	};

	$("header").on("click","a",function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top},1500);
	});

	$(".intro").fadeIn(5000);

	$('.navigator').sticky({
			topSpacing: 0
	});

	new WOW().init();

});