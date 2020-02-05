var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var slim        = require('gulp-slim');
var del         = require('del');
var ghPages     = require('gulp-gh-pages');

const src = {
  'path':     "src/",
  'sass':     "src/assets/scss/*.scss",
  'slim':     "src/content/*.slim",
  'js':       "src/assets/js/**/*",
  'vendors':  "src/assets/vendor/**/*",
  'images':   "src/assets/img/**/*",
  'favicons': "src/assets/favicon/**/*",
};

const dst = {
  'path':     "dist/",
  'css':      "dist/assets/css",
  'html':     "dist/",
  'js':       "dist/assets/js/",
  'vendors':  "dist/assets/vendor/",
  'images':   "dist/assets/img/",
  'favicons': "dist/assets/favicon/",
};

gulp.task('clean', function() {
  return del(dst.path + '**/*');
});

gulp.task('sass', function() {
  return gulp
    .src(src.sass)
    .pipe(sass())
    .pipe(gulp.dest(dst.css))
    .on('end', browserSync.stream);
});

gulp.task('slim', function() {
  return gulp
    .src(src.slim)
    .pipe(slim({
      pretty:  true,
      require: ['slim/include',],
    }))
    .pipe(gulp.dest(dst.html))
    .on('end', browserSync.reload);
});

['js', 'vendors', 'images', 'favicons'].forEach(function(type) {
  gulp.task(type, function() {
    return gulp
      .src(src[type])
      .pipe(gulp.dest(dst[type]));
  });
});

gulp.task('assets', gulp.parallel(['slim', 'sass', 'js', 'vendors', 'images', 'favicons']));

gulp.task('server', function (done) {
  browserSync.init({
    server: {
      baseDir: dst.path,
      serveStaticOptions: {
        extensions: ["html"],
      },
    },
  });

  gulp.watch("src/assets/css/application.scss", gulp.series('sass'));
  gulp.watch("src/content/**/*.slim", gulp.series('slim'));

  done();
});

gulp.task('deploy', function() {
  return gulp
    .src(dst.path + '**/*')
    .pipe(ghPages({
      'branch': 'gh-pages',
      'force':  true,
    }));
});

gulp.task('default', gulp.series(['clean', 'assets', 'server']));
