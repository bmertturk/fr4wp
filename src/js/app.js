const app = {
	init() {
		app.modal.init();
		app.accordion.init();
		app.tab.init();
		this.datePicker();
		this.mask();
	},

	datePicker() {
		$('.datepicker').daterangepicker();
	},

	mask() {
		$('.phone').mask('00000 000000');
	}

}

$(function() {
	app.init();
});