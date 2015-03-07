var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	combineMq = require('gulp-combine-mq'),
	imagemin = require('gulp-imagemin');
	// zip = require('gulp-zip');



//scripts task 
gulp.task('img', function () {
    return gulp.src('lib/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
           // use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('scripts', function () {	
	gulp.src('lib/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js/glob.min.js'));
});

//styles
gulp.task('style', function () {
	
	 return sass('lib/css/', ({style: 'compressed'}))
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(combineMq({ beautify: false }))
	.pipe(gulp.dest('css/'));
});


gulp.task('zip', function () {	
		return gulp.src('js/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('minjs'));

});

gulp.task('default', ['scripts', 'style']);