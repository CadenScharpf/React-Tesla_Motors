'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
 
//INITIAL COMPILE
gulp.task('sass', function () {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '(minified)'}))
    .pipe(changed('./src/assets/css'))
    .pipe(gulp.dest('./src/assets/css'))


});
 
//WATCH
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});

//RUN TASKS
gulp.task('default', ['sass:watch']);
