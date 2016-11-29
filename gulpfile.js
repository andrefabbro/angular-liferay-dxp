'use strict';

var gulp = require('gulp');

var plugins = {
  concat : require('gulp-concat'), gutil : require('gulp-util'),
  rename : require('gulp-rename'), plumber : require('gulp-plumber'),
  runSequence: require('run-sequence'), run: require('gulp-run')
};

var allFiles = [
  'app/**/**.js', 'src/**/**.jsp', 'bin/**/**.class'
];

gulp.task('build', function() {
  return gulp.src('./app/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest('./src/main/resources/META-INF/resources/js'));
});

gulp.task('blade', function() {
  return plugins.run('blade deploy').exec().pipe(gulp.dest('output'));
});

gulp.task('deploy', function(done) {
  plugins.runSequence('build', 'blade', done);
});

gulp.task('watch', function () {
  gulp.watch(allFiles, ['deploy']);
});