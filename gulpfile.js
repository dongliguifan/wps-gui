var gulp = require('gulp'),
    devServer = require('./dev-server.js'),
    connect = require('gulp-connect'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_bower_files = require('main-bower-files'),
    gp_filter = require('gulp-filter'),
    gp_minify_css = require('gulp-minify-css'),
    gp_uglify = require('gulp-uglify');

gulp.task('connect', function() {
    devServer.run();
});

gulp.task('cssbuild', function() {
    gulp.src(['src/*.png'])
      .pipe(gulp.dest('dist'));
    gulp.src(['src/favicon.ico'])
      .pipe(gulp.dest('dist'));
    gulp.src(['vendor/ol.css', 'vendor/highlight/styles/default.css ', 'src/style.css'])
      .pipe(gp_filter('**/*.css'))
      .pipe(gp_concat('wps-gui.css'))
      .pipe(gulp.dest('dist'))
      .pipe(gp_rename('wps-gui.min.css'))
      .pipe(gp_minify_css())
      .pipe(gulp.dest('dist'));
});

gulp.task('jsbuild', function(){
    var bower_files = gp_bower_files();
    // remove w3c-schemas/scripts/w3c-schemas.js
    // see https://github.com/highsource/w3c-schemas/issues/11
    bower_files.pop();
    var files = bower_files.concat([
      'vendor/highlight/highlight.pack.js'
    ]);
    gulp.src(files)
        .pipe(gp_filter('**/*.js'))
        .pipe(gp_concat('wps-gui.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('wps-gui.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['jsbuild']).on('change', function(f) {
    gulp.src([f.path]).pipe(connect.reload());
  });
  gulp.watch(['src/*.css', 'vendor/*.css'], ['cssbuild']).on('change', function(f) {
    gulp.src([f.path]).pipe(connect.reload());
  });
});

gulp.task('default', ['jsbuild', 'cssbuild'], function(){});

gulp.task('develop', ['connect', 'jsbuild', 'cssbuild', 'watch']);
