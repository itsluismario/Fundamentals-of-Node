const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
    console.log('Building website');
    setTimeout(cb, 1200);
});

gulp.task('serve', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('watch', function() {
    gulp.watch('www', gulp.series('build'));
});

gulp.task('default', gulp.series('build', 'serve', 'watch'));
