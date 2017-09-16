const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const prepack = require('gulp-prepack');
const rollup = require('gulp-rollup');
gulp.task('default', () => {
    return watch('./src/nodeuii/**/*.js', {
        ignoreInitial: false
    }, () => {
         gulp.src('./src/nodeuii/**/*.js')
            .pipe(babel({
                // presets: ['env'],
                babelrc: false,
                "plugins": [
                    "transform-es2015-modules-commonjs"
                ]
            }))
            .pipe(gulp.dest('./build/'))
    })
});