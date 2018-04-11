const gulp        = require('gulp');
const sass        = require('gulp-sass');
const nodemon     = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/css'));
});

gulp.task('serve', () => {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: 8000,
    files: ['public/**/*.*']
  });

  return nodemon({ script: 'index.js'})
  .on('start', () => browserSync.reload());
});

gulp.task('default', ['sass', 'serve'], () => {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('views/*.ejs', browserSync.reload);
});
