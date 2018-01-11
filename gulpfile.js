const gulp         = require('gulp');
const sass         = require('gulp-sass');
const bs           = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

// SASS COMPILER WITH CSS PREFIXER
gulp.task('sass', function () {
    return gulp.src([
                'scss/*.scss',
                'scss/base/*.scss',
                'scss/components/*.scss',
                'scss/components/sections/*.scss'
              ])
                .pipe(sass())
		            .pipe(autoprefixer({browsers: ['last 2 versions']}))
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

//BROWSER-SYNC HANDLING
gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: './'
        }
    });
});

//GULP RUN
gulp.task('default', ['browser-sync'], function () {
    gulp.watch([
                'scss/*.scss',
                'scss/base/*.scss',
                'scss/components/*.scss',
                'scss/components/sections/*.scss'
               ], ['sass']);
    gulp.watch('index.html').on('change', bs.reload);
});
