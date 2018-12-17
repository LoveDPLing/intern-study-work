var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
// var replace = require('gulp-replace');
// var cleanIMG = require('gulp-imagemin');
var rename = require("gulp-rename");
gulp.task('connect', function () {
    gulpConnect.server({
        root: '',
        port: 8000
    });
    gulpConnect.serverClose();
});
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(gulpConnect.reload());
});
gulp.task('watch', function () {
    gulp.watch(['src/*.html'], ['html']);
    gulp.watch('src/js/*.js', ['jsmin']);
    gulp.watch('src/css/*.css', ['cssmin']);
    gulp.watch('src/css/*.*', ['imgmin']);
});
gulp.task('jsmin', function () {
    gulp.src('src/js/*.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('cssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});
// gulp.task('replacecss', function(){
//     return gulp.src(['src/*.html'])
//         .pipe(replace('.css', '.min.css'))
//         .pipe(gulp.dest('dist'));
// });
// gulp.task('replacejs', function(){
//     return gulp.src(['src/*.html'])
//         .pipe(replace('.js', '.min.js'))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('imgmin', async () => {
//     gulp.src('src/img/*')
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(cleanIMG())
//         .pipe(gulp.dest('dist/img'));
// });

// gulp.task('replacejs', function(){
//     return gulp.src(['src/*.html'])
//         .pipe(replace('.js', '.min.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(gulpConnect.reload());
// });
gulp.task('default', ['connect', 'html', 'watch', 'jsmin', 'cssmin']);