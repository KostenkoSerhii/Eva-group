export default class Popup {

	constructor(options){
		this._els = document.querySelectorAll(options.selector);
		this._body = document.body;
		this._init();
	}

	_init(){
		this._loop()
		// console.log(this._el);
		// console.log(this._closeBtn);
		// this._addHideClickEvent();
		// console.log(this._closeBtn);
	}
	_loop(){
		for(let i = 0 ; i < this._els.length; i++){
			// this._findDom(this._els[i])
			this._addHideClickEvent(this._els[i])
		}
	}
	_findDom(el){
		this._overlay = el.querySelector(".js-popup-overlay");
		this._content = el.querySelector(".js-popup-content");
		this._closeBtn = el.querySelector(".js-close-popup");
		// this._this = el;
		
	}


	_addHideClickEvent(el){
		// let closePopup = (event) => {


		// };

		el.querySelector(".js-popup-overlay").addEventListener("click", this._hidefromOverlay.bind(this));
		el.querySelector(".js-close-popup").addEventListener("click", this._hidefromCloseBtn.bind(this));


	}
	_hidefromOverlay(el){
		let target = event.target;
		target.parentNode.style.display="none"
		this._fadeOut(target.parentNode)
	}
	_hidefromCloseBtn(el){
		let target = event.target;
		target.parentNode.parentNode.style.display="none"
		this._fadeOut(target.parentNode.parentNode)
	}

	_fadeOut(el){
		el.style.opacity = 1;
		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = "none";
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}

	_fadeIn(el, display){
		el.style.opacity = 0;
		el.style.display = display || "block";
		(function fade() {
			let val = parseFloat(el.style.opacity);
			if (!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}
	// end
};