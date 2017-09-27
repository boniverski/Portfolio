var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

// Copy ALL HTML files
//gulp.task('copyHtml', function () {
//gulp.src('src/*.html')
//    .pipe(gulp.dest('public'));
//});


gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
                .pipe(sass())
		.pipe(autoprefixer({browsers: ['last 2 versions']}))
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

// Copy ALL JS files
//gulp.task('copyJs', function() {
//  gulp.src('src/*.js')
//      .pipe(gulp.dest('public'))
//      .pipe(bs.reload({stream: true}));
//});

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("index.html").on('change', bs.reload);
});
