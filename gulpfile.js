var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('html', function(){
    return gulp.src('src/*.html')
      .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
      .pipe(gulp.dest('dist/fonts'))
});

gulp.task('sass', function(){
    return gulp.src('src/scss/styles.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('dist/css'))
});


