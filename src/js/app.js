import sayHello from './lib/sayHello.js';
import {isResp991, isResp1129} from './global.js';


$(document).ready(function(){
	$(".js-menu-btn").on("click", function(e){
		e.stopPropagation();
		$(".js-drop-mob").slideToggle(200)

	});

	$(".js-drop-mob").on("click", function(e){
		e.stopPropagation();
	});

	$(window).click(function() {
		$(".js-drop-mob").slideUp(200)
	});

	$(".js-scroll").on("click", function(e){
		e.preventDefault();
		let $this = $(this),
		target = $this.attr("data-scroll"),
		headerHeight = isResp991() ? 66 : 87;

		$(".js-scroll").removeClass("active");
		$this.addClass("active");
		$("html, body").animate({scrollTop: $("." + target + "").offset().top - headerHeight }, 500);
		// setTimeout(function(){$this.removeClass("active");}, 1500)

	});


	// function inWindow(s){
	// 	let scrollTop = $(window).scrollTop();
	// 	let windowHeight = $(window).height();
	// 	let currentEls = $(s);
	// 	let result = [];
	// 	// console.log(currentEls);
	// 	currentEls.each(function(){
	// 		let el = $(this);
	// 		let offset = el.offset();
	// 		if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight)){
	// 			// result.push(this);
	// 			console.log(this);
				
	// 		}
	// 	})
	// };
		// return $(result);

	// 	$(window).on("scroll", function(){
	// 		let activeBlock = inWindow(".js-fscreen, .js-about, .js-plans, .js-pprog, .js-callback")
	// 		$(".js-scroll").removeClass("active");
	// 	// console.log(activeBlock);
	// })


	// ready
});