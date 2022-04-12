const startTime = new Date();
const { minify } = require("terser");
const babel = require("@babel/core");
fs = require('fs');
fileList = require("./files");
const files = [];
const distDirectory = "dist";

if (!fs.existsSync(distDirectory)){
	fs.mkdirSync(distDirectory);
}

for(let i = 0;i < fileList.compiled.length;i++) {
	files.push(fs.readFileSync(fileList.compiled[i], 'utf8'));
}

minify(files, {
	format: {
		beautify: false
	}
}).then(result => {
	fs.writeFileSync('dist/vendor.js', result.code, 'utf8');
});

console.log(`Rendered at ${(new Date() - startTime) / 1000}`);