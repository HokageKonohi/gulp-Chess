
const { watch, parallel, dest, src, series } = require('gulp');

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');



function cleaDist() {
    return del('./dist')
}






function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

function images() {
    return gulp.src('./app/imges/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ]
        ))
        .pipe(dest('./dist/imges'))
        .pipe(browserSync.stream())





}


function scripts() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/sweetalert2/dist/sweetalert2.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        // './node_modules/bootstrap/dist/js/bootstrap.js',
        './app/js/main.js',


        './app/js/movement.js',
        './app/js/mov_item.js',

    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('./app/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return gulp.src('./app/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream())

}
function html() {
    return gulp.src('./app/index.html')
        .pipe(browserSync.stream())

}





//В выполняем команду в завершений  
function build() {
    return src([
        './app/css/style.min.css',
        './app/fons/**/*',
        './app/js/main.min.js',
        //'./app/imges/**/*',
        'app/*.html',
    ], { base: 'app' })
        .pipe(dest('dist'))
}











function watching() {
    watch(['./app/scss/**/*.scss'], styles);
    watch(['./app/js/**/*.js', '!./app/js/main.min.js'], scripts);
    //gulp.watch(path.watch.html, njk);
    watch(['./app/**/*.html'], html);
    // gulp.watch(['./app/*.html']).on('chenge', browserSync.reload);
}


exports.html = html;
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleaDist = cleaDist;

exports.images = images;


exports.build = series(cleaDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);