const startTime = new Date();
const { minify } = require("terser");
const babel = require("@babel/core");
const sass = require("node-sass");
fs = require('fs');
fileList = require("./files");
const files = [];
const distDirectory = "dist";
const cssPath = "dist/style.css";

if (!fs.existsSync(distDirectory)){
	fs.mkdirSync(distDirectory);
}

sass.render({
	file: "src/scss/style.scss",
	outputStyle: "compressed",
	outFile: cssPath,
	sourceMap: true
}, (error, result) => {
	fs.writeFileSync(cssPath, result.css, 'utf8');
	fs.writeFileSync(cssPath + ".map", result.map, 'utf8');
});

for(let i = 0;i < fileList.apps.length;i++) {
	files.push(babel.transformSync(fs.readFileSync(fileList.apps[i], 'utf8'), {
		"presets": [
			require("@babel/preset-env")
		]
	}).code);
}

minify(files, {
	format: {
		beautify: false
	}
}).then(result => {
	fs.writeFileSync('dist/main.js', result.code, 'utf8');
});

console.log(`Rendered at ${(new Date() - startTime) / 1000}`);