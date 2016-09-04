'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

gulp.task('default', ['sass'], function() {
    gulp.watch([
        './app/scss/**/*.scss',
    ], ['sass']);

});

gulp.task('sass', function() {
    return gulp.src('./app/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app'));
});
