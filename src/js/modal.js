app.modal = {
	
	overlayElement: '.overlay',
	modalElement: $('.modal'),
	activeClass: 'active',
	bodyActiveClass: 'has-modal',

	init() {
		this.eventListener();
	},

	open(element) {
		this.showOverlay();
		$(element.attr('data-modal')).addClass(this.activeClass);
		$('body').addClass(this.bodyActiveClass);
	},

	close() {
		this.hideOverlay();
		this.modalElement.removeClass(this.activeClass);
		$('body').removeClass(this.bodyActiveClass);
	},
	
	showOverlay() {
		$(this.overlayElement).addClass(this.activeClass);
	},
	
	hideOverlay() {
		$(this.overlayElement).removeClass(this.activeClass);
	},

	eventListener() {
		const self = this;

		$(document).on('click', '[data-modal]', function() {
			self.open($(this));
		});

		$(document).on('click', this.overlayElement, function() {
			self.close();
		});

		$(document).on('click', '[data-modal-close]', function() {
			self.close();
		});
	}
}