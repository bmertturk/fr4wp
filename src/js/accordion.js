app.accordion = {

	speed: 200,
	activeClass: "active",
	content: ".accordion-content",
	parent: ".accordion",
	all: "all",
	body: ".accordion-body",
	header: ".accordion-header",

	init() {
		this.initAccordion();
		this.eventListener();
	},

	initAccordion() {
		const self = this;
		$(this.content).each(function() {
			if($(this).hasClass(self.activeClass)) {
				$(this).find(self.body).show();
			}
		});
	},

	accordionToggle(element) {
		const parentElement = element.parents(this.parent);
		if(parentElement.hasClass(this.all)) {
			if(!element.parent().hasClass(this.activeClass)) {
				parentElement.find(this.content).removeClass(this.activeClass);
				parentElement.find(this.body).slideUp(this.speed);
				element.parent().find(this.body).slideDown(this.speed);
				element.parent().addClass(this.activeClass);
			}
		} else {
			element.parent().find(this.body).slideToggle(this.speed);
			element.parent().toggleClass(this.activeClass);
		}
	},

	eventListener() {
		const self = this;
		$(document).on('click', this.header, function() {
			self.accordionToggle($(this));
		});
	}
}