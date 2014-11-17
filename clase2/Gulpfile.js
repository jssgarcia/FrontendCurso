/**
 * Created by jssgarcia on 14/11/2014.
 */
var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    stylus    = require('gulp-stylus'),
    nib       = require('nib'),
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    inject    = require('gulp-inject'),
    wiredep   = require('wiredep').stream,
    gulpif    = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    useref    = require('gulp-useref'),
    uglify    = require('gulp-uglify'),
    uncss     = require('gulp-uncss'),
    angularFilesort = require('gulp-angular-filesort'),
    templateCache = require('gulp-angular-templatecache'),
    historyApiFallback = require('connect-history-api-fallback');


gulp.task('connect', function() {
    connect.server({
        root: '',
        port: 8085,
        livereload: true
    });
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
    gulp.src('./css/*.styl')
        .pipe(stylus({ use: nib(),set: false}))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
    gulp.watch(['./css/*.styl'], ['css']);
});

gulp.task('default', ['connect', 'watch']);