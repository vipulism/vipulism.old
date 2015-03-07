var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');
	// zip = require('gulp-zip');



//scripts task 

gulp.task('scripts', function () {	
	gulp.src('lib/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js'));
});

gulp.task('style', function () {
	
	 return sass('lib/css/', ({style: 'compressed'}))
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
	.pipe(gulp.dest('css/'));
});
gulp.task('zip', function () {	
		return gulp.src('js/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('minjs'));

});

gulp.task('default', ['scripts', 'style']);