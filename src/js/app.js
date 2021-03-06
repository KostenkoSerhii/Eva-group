import sayHello from './lib/sayHello.js';
import {isResp991, isResp1129} from './global.js';
import AOS from 'aos'
import Popup from './popup.js'


$(document).ready(function(){

	new Popup({selector: ".js-popup"});

	if (!isResp991()) {
		AOS.init({
			duration: 300,
			easing: 'ease-in-sine'
		});

	}
	

	$(".js-menu-btn").on("click", function(e){
		e.stopPropagation();
		$(".js-drop-mob").slideToggle(200)

	});

	$(".js-drop-mob").on("click", function(e){
		e.stopPropagation();
	});

	$(window).click(function() {
		if(isResp991()){
			$(".js-drop-mob").slideUp(200);
		}
	});

	$(".js-scroll").on("click", function(e){
		e.preventDefault();
		let $this = $(this),
		target = $this.attr("data-scroll"),
		headerHeight = isResp991() ? 66 : 87;

		$(".js-scroll").removeClass("active");
		$(`.js-scroll[data-scroll = ${target}]`).addClass("active");
		$("html, body").animate({scrollTop: $("." + target + "").offset().top - headerHeight }, 500);

	});



	function closePopup(self){
		let $this = $(this),
		parentPopup = $this.parents(".js-popup");
		parentPopup.fadeOut(300);
		$("body").removeClass("is-hidden")
	};

	$(".js-popup-content").on("click", function(e){
		e.stopPropagation();
	});

	// $('form').submit(function(e){
	// 	e.preventDefault();
	// 	console.log(1);
	// 	$.ajax({
	// 		url: 'mail.php',	
	// 		type: 'POST',
	// 		data: $(this).serialize(),
	// 		success: function(){
	// 			$(".js-popup").fadeOut(100);
	// 			$(".js-popup-thanks").fadeIn(300);
	// 			console.log("success")
	// 			// console.log(data);

	// 		}
	// 	})
	// });

	// $('form.formspree').submit(function(e){
	// 	e.preventDefault();
	// 	$.ajax({
	// 		url: "https://formspree.io/sergey@coderiver.com.ua", 
	// 		method: "POST",
	// 		data: $(this).serialize(),
	// 		dataType: "json",
	// 		success: function(){
	// 			$(".js-popup").fadeOut(100);
	// 			$(".js-popup-thanks").fadeIn(300);
	// 			console.log("success");
	// 			// console.log(data);
	// 		}
	// 	});
	// });
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