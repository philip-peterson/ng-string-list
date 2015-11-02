var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpSequence = require('gulp-sequence');
var minifyHtml = require('gulp-minify-html');
var rename = require('gulp-rename');

gulp.task('minify-js', function() {
   return gulp.src('./src/*.js')
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-html', function() {
   return gulp.src('./src/*.html')
      .pipe(minifyHtml())
      .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['minify-js', 'minify-html']);

gulp.task('default', ['build']);
