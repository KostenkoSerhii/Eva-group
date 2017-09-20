export default class Popup {

	constructor(options){
		this._el = document.querySelector(options.selector);
		this._body = document.body;
		// for(let i = 0 ; i < this._el.length; i++){
			this._overlay = this._el.querySelector(".js-popup-overlay");
			this._content = this._el.querySelector(".js-popup-content");
			this._closeBtn = this._el.querySelector(".js-close-popup");
			console.log(this._el);
		// }
		this._init();

	}

	_init(){
		// console.log(this._el);
		console.log(this._closeBtn);
		this._closePopup();
	}
	_closePopup(){
		// for(let i = 0 ; i < this._el.length; i++){
			this._overlay.addEventListener("click", this._hidePopup.bind(this));
			this._closeBtn.addEventListener("click", this._hidePopup.bind(this));
			// console.log(this._el[i]);
		// }
	}
	_hidePopup(){
			this._el.style.display="none"

	}
	// end
};