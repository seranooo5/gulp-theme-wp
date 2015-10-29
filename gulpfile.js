var gulp = require('gulp');
 
gulp.task('default', function(){
 
    console.log('default gulp task...')
 
});

var sass = require('gulp-sass');
 



gulp.task('sass', function () {
 
    gulp.src('./css/src/*.scss')
         .pipe(plumber(plumberErrorHandler))  
        .pipe(sass())
 
        .pipe(gulp.dest('./css'));
 
});

var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
          proxy: "",
    });
});



 
var jshint = require('gulp-jshint');
 
var concat = require('gulp-concat');

gulp.task('js', function () {
 
gulp.src('js/src/*.js')
 
.pipe(jshint())
 
.pipe(jshint.reporter('fail'))
 
.pipe(concat('theme.js'))
 
.pipe(gulp.dest('js'));
 
});


var imagemin = require('gulp-imagemin');

gulp.task('img', function() {
 
  gulp.src('img/src/*.{png,jpg,gif}')
 
    .pipe(imagemin({
 
      optimizationLevel: 7,
 
      progressive: true
 
    }))
 
    .pipe(gulp.dest('img'))
 
});



gulp.task('watch', ['sass','browser-sync'], function() {
 
  gulp.watch('css/src/*.scss', ['sass']);
 
  gulp.watch('js/src/*.js', ['js']);
 
  gulp.watch('img/src/*.{png,jpg,gif}', ['img']);
 
});



var plumber = require('gulp-plumber');
 
var notify = require('gulp-notify');


var plumberErrorHandler = { errorHandler: notify.onError({
 
    title: 'Gulp',
 
    message: 'Error: <%= error.message %>'
 
  })
 
};












gulp.task('default', ['sass', 'js', 'img', 'watch','browser-sync']);



