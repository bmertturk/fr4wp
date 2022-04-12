const filePath = "src/js/";
const modulesPath = "node_modules/";

module.exports = {
	compiled: [
		`${modulesPath}jquery/dist/jquery.min.js`,
		`${modulesPath}moment/min/moment-with-locales.min.js`,
		`${modulesPath}slick-slider/slick/slick.min.js`,
		`${modulesPath}@fancyapps/fancybox/dist/jquery.fancybox.min.js`,
		`${modulesPath}toastr/build/toastr.min.js`,
		`${modulesPath}/daterangepicker/daterangepicker.js`,
		`${modulesPath}/jquery-mask-plugin/dist/jquery.mask.min.js`,
		`${modulesPath}/jquery-validation/dist/jquery.validate.min.js`
	],
	apps: [
		`${filePath}app.js`,
		`${filePath}modal.js`,
		`${filePath}accordion.js`,
		`${filePath}tab.js`
	]
}