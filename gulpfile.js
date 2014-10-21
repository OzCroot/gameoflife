var gulp		= require('gulp'),
	rename		= require('gulp-rename'),
	browserify	= require('gulp-browserify'),
	uglify		= require('gulp-uglify');

gulp.task('js', function(){
	gulp.src('./scripts/app.js')
		.pipe(browserify({ debug: true }))
		.pipe(rename('./scripts/build/bundle.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('compress', function(){
	gulp.src('./scripts/build/bundle.js')
		.pipe(uglify())
		.pipe(rename('./scripts/build/bundle.min.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
	gulp.watch('./scripts/**/*.js', ['js']);
});