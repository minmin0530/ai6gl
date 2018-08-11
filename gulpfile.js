var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("default", function() {
  var files = [
	'./src/matrix.js',
	'./src/bevelcube.js',
	'./src/cube.js',
	'./src/octahedron.js',
	'./src/octahedron2.js',
	'./src/octahedron3.js',
	'./src/grass.js',
	'./src/ai6gl.js'
  ];
  gulp.src(files)
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./build'));
});
