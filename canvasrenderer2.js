#!/usr/local/bin/node

var Canvas = require('canvas');
var fs     = require('fs');
var Script = process.binding('evals').Script;
require('coffee-script');

function CanvasRenderer() {

	var that = this;

	that.w = 0;
	that.h = 0;
	that.canvas = null;
	that.ctx = null;

	that.newFile = function(w, h) {
		that.canvas = new Canvas(w, h);
		that.ctx = that.canvas.getContext('2d');
		that.w = w;
		that.h = h;
	};

	that.saveFile = function(name) {
		var buffer = that.canvas.toBuffer();
		console.log ('Writing ' + name + '.png');
		fs.writeFileSync (name + '.png', buffer);
	};

}

CanvasRenderer.call(null);
require.paths.unshift('.');
if (process.argv[2] !== undefined) {
	require(process.argv[2]);
} else {
	require('repl').start('cr> ');
}
