app.tab = {

	parent: ".tab",
	tabTitle: ".tab-title",
	tabContent: ".tab-content",
	activeClass: "active",

	init() {
		this.eventListener();
	},

	initTab(element) {
		const parentElement = element.parents(this.parent);
		parentElement.find(this.tabTitle).removeClass(this.activeClass);
		element.addClass(this.activeClass);
		parentElement.find(this.tabContent).removeClass(this.activeClass).eq(element.index()).addClass(this.activeClass);
	},

	eventListener() {
		const self = this;
		$(document).on('click', this.tabTitle, function() {
			self.initTab($(this));
		});
	}
}