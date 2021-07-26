var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const image = require('gulp-image');
const cleanCSS = require('gulp-clean-css');

gulp.task('html', function(){
    return gulp.src('src/*.html')
      .pipe(gulp.dest('./'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
      .pipe(gulp.dest('./fonts'))
});

gulp.task('assets', function(){
  return gulp.src('./assets/**/*')
    .pipe(image())
    .pipe(gulp.dest('./assets-minified'))
    
});

gulp.task('sass', function(){
    return gulp.src('src/scss/styles.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('js', function(){
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('icons', function() {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('./webfonts/'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/**/*.html', ['html']); 
  gulp.watch('src/**/*.js', ['js']); 
});

gulp.task('dev', [ 'html', 'js', 'fonts', 'icons', 'watch']);

gulp.task('default', [ 'html', 'sass', 'js', 'fonts', 'icons' ]);