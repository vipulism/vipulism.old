var gulp = require('gulp'),
	uglify = require('gulp-uglify');
	zip = require('gulp-zip');


//scripts task 

gulp.task('scripts', function () {	
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
})
gulp.task('zip', function () {	
		return gulp.src('js/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('minjs'));

})

gulp.task('default', ['scripts', 'style']);