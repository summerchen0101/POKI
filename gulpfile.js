//////////////////////////////////////////////////////////////////
// Requires
/////////////////////////////////////////////////////////////////

var gulp = require('gulp'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    filter = require('gulp-filter'),
    zip = require('gulp-zip'),
    del = require('del'),
    stylus = require('gulp-stylus'),
    webpack = require('webpack-stream'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    es = require('event-stream'),
    useref = require('gulp-useref'),
    flatten = require('gulp-flatten'),
    spritesmith = require('gulp.spritesmith');

var pk = require('./package.json');
var moment = require('moment');

var time = moment().format('MMDD');

//////////////////////////////////////////////////////////////////
// Archive Tasks
/////////////////////////////////////////////////////////////////

gulp.task('zip:src', function () {
    return gulp.src('src/**/*')
        .pipe(zip(`${pk.name}_${time}_dev.zip`))
        .pipe(gulp.dest('archive/'));
});

gulp.task('zip:dist', function () {
    return gulp.src('dist/**/*')
        .pipe(zip(`${pk.name}_${time}.zip`))
        .pipe(gulp.dest('archive/'));
});

gulp.task('zip', ['zip:dist']);



//////////////////////////////////////////////////////////////////
// Building Task
/////////////////////////////////////////////////////////////////

gulp.task('build:clean', function (cb) {
    del('dist/', cb);
});

gulp.task('build:inject', ['inject'], function () {
    return gulp.src('./src/*.html')
        .pipe(useref())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:combine', function () {
    return gulp.src('./src/*.html')
        .pipe(useref())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build:copy',function(){
    return gulp.src(['./src/**/*', '!./src/bower/**/*'])
        .pipe(gulp.dest('./dist'))
})

gulp.task('build:fonts',function(){
    return gulp.src('./src/bower/**/*.{otf,ttf,woff,woff2}')
        .pipe(flatten())
        .pipe(gulp.dest('./dist/fonts'))
})
gulp.task('build:remove', function (cb) {
    del([
        'dist/jade', 
        'dist/stylus',
        'dist/bower',
        ], cb);
});

gulp.task('build', function (cb) {
    runSequence(
        'jade',
        'build:clean',
        'build:copy',
        'build:combine',
        'build:remove',
        'build:fonts',
        'serve:dist',
        cb);

});


//////////////////////////////////////////////////////////////////
// Scripts Task
/////////////////////////////////////////////////////////////////

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('src/js/'))
        .pipe(browserSync.stream());
});

gulp.task('inject', function () {

    return gulp.src('./src/*.html')
        .pipe(plumber())
        .pipe(inject(gulp.src(bowerFiles(), { read: false }), { name: 'bower', relative: true }))
        .pipe(gulp.dest('./src'))
        .pipe(browserSync.stream());
})


//////////////////////////////////////////////////////////////////
// Styles Task
/////////////////////////////////////////////////////////////////


gulp.task('sprite', function () {
    var spriteData = gulp.src('./src/css/s/**/*.png')
        .pipe(plumber())
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            algorithm: 'diagonal'
        }));
    return spriteData.pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());;
});

gulp.task('style', function () {
    return gulp.src('src/stylus/style.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});


//////////////////////////////////////////////////////////////////
// HTML Task
/////////////////////////////////////////////////////////////////

gulp.task("jade", function () {
    return gulp.src(["src/jade/**/*.jade", '!src/jade/layout.jade', '!src/jade/widgets/**/*.jade'])
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('src'))
        .pipe(browserSync.stream());
});



//////////////////////////////////////////////////////////////////
// Browser-sync Task
/////////////////////////////////////////////////////////////////

gulp.task("serve:dev", function () {

    browserSync.init({
        server: {
            baseDir: "src/",
        }
    });

    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/stylus/**/*.styl', ['style']);
    gulp.watch('src/jade/**/*.jade', ['jade']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});




gulp.task("serve:dist", function () {

    browserSync.init({
        server: {
            baseDir: "dist/",
        }
    });
});



//////////////////////////////////////////////////////////////////
// Default Task
/////////////////////////////////////////////////////////////////

gulp.task('default', ['serve:dev']);
