const app = {
	init() {
		app.modal.init();
		app.accordion.init();
		app.tab.init();
		this.datePicker();
		this.mask();
		this.eventListener();
	},

	datePicker() {
		$('.datepicker').daterangepicker();
	},

	mask() {
		$('.phone').mask('00000 000000');
	},

	customFile(element) {
		element.next().find('> span').text(element.val());
	},

	eventListener() {
		var self = this;
		$(document).on('change', '.custom-file input', function() {
			self.customFile($(this));
		});
	}

}

$(function() {
	app.init();
});