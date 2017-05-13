$(document).ready(function(){
	if($(window).width() < 992){
		$('.wr-production-card a').removeClass('production-card-1 production-card-2 production-card-3 production-card-4 production-card-5 production-card-6 production-card-7 production-card-8 production-card-9 production-card-10 production-card-11 production-card-12 production-card');
	}
	$('.bxslider-1').bxSlider({
		captions: true,
		auto: true,
		pause: 3000,
		autoHover: true,
		adaptiveHeight: true,
		mode: 'fade'
	});
	$('.bxslider-2').bxSlider({
		captions: true,
		auto: true,
		pause: 3000,
		autoHover: true,
		adaptiveHeight: true,
		mode: 'fade'
	});
	
	if ( $(window).width() < 370 ){
		$('.bxslider').bxSlider({
			slideWidth: 290,
			pagerCustom: '#bx-pager',
			mode: 'fade'
		});
	}else{
		$('.bxslider').bxSlider({
		  pagerCustom: '#bx-pager',
		  mode: 'fade'
		});
	}

	$('.btn-menu').click(function(){
		$('.menu-xs').slideToggle(300);
		$(this).toggleClass('btn-close')
	})
	$('.tabs-menu').click(function (e){
		e.preventDefault();
		$(this).next('ul').slideToggle(300).parent('li').siblings('li').find('ul').slideUp('300');
		
		if($(this).hasClass('line-sm-wh')){
			$(this).removeClass('line-sm-wh');
		}else{
			$(this).addClass('line-sm-wh').parent('li').siblings('li').find('a').removeClass('line-sm-wh');
		}
	})

	$(window).scroll(function(){
   		if ( $(window).scrollTop() > 300 ){
     		 $(".btn-up").fadeIn();
    	} else if($(window).scrollTop()<= 300) {
     		 $(".btn-up").hide();
    	}
 	});
});