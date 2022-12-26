$(document).ready(function () {
	/* Fullpage */
	$('#fullpage').fullpage({
		autoScrolling: true,
		anchors:['home', 'first', 'second', 'third', 'fourth' , 'fifth' , 'sixth', 'footer'],
		scrollHorizontally: true,
		navigation: false,
		
		afterLoad: function (anchorLink, index) {
			if (index == 1) {
				$('.navi').fadeOut()
				$('.app_download').hide()
				$('header').fadeIn()
			}  else if (index == 8) {
				$('header').fadeOut()
			} else {
				$('header').fadeIn()
				$('.navi').fadeIn()
				$('.app_download').show()
				$('.navi li').eq(index-2).children('a').addClass('active')
				$('.navi li').eq(index-2).siblings().children('a').removeClass('active')
			}

			if (index == 2) {
				$('.bg1 .content .bg_area img').css("left" ,"-58px")
				$('.bg1 .content .bg_area img').css("top" ,"-58px")
				$('.bg1 .content .bg_area img').animate({"top" : "0", "left" : "0"},{duration: 500})
			}
      },
	});
});
