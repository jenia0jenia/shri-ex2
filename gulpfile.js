/**
 * Gulp-задания для сборщика
 *
 * Необходимые плагины:
 *     gulp
 *     gulp-load-plugins
 *     gulp-sourcemaps
 *     gulp-if
 *     path
 *     del
 *     autoprefixer
 *     gulp-concat
 *     cssnano
 *
 *     webpack
 *     webpack-stream
 *
 *     gulp-postcss
 *     postcss-mixins
 *     postcss-units
 *     postcss-nested
 *     postcss-simple-vars
 *     postcss-easings
 *     postcss-import
 *     postcss-color-function
 *     postcss-pxtorem
 *     postcss-grid
 *     postcss-hexrgba
 *     postcss-extend
 *     postcss-object-fit-images
 *     postcss-flexibility
 *     postcss-media-minmax
 *     postcss-assets
 *     postcss-discard-comments
 *
 * Задания:
 *     watch:postcss - наблюдатель за изменением PostCSS файлов и их сборкой
 *     build - полная сборка проекта
 *         postcss - сборка и минимизация PostCSS файлов
 *
 *     Предполагаема структура директорий:
 *         public/css/    - папка с css
 *             c/         - папка со склеенным и уменьшенным css
 *             postcss/   - исходные файлы postcss
 *             maps/      - папка с map файлами для css
 *
 *     Настройки имен файлов и директорий ниже
 */

const gulp = require('gulp'),
      gp = require('gulp-load-plugins')(),
      gulpIf = require('gulp-if');

const webpack        = require('webpack'),
      webpack_stream = require('webpack-stream'),
      webpack_config = require('./webpack.config.js');

const postcss_mixins            = require('postcss-mixins'),
    postcss_nested              = require('postcss-nested'),
    postcss_simple_vars         = require('postcss-simple-vars'),
    postcss_hexrgba             = require('postcss-hexrgba'),
    postcss_extend              = require('postcss-extend'),
    postcss_easings             = require('postcss-easings'),
    postcss_units               = require('postcss-units'),
    postcss_import              = require('postcss-import'),                // плагин import
    postcss_object_fit_images   = require('postcss-object-fit-images'),     // плагин для полифила object-fit
    postcss_flexibility         = require('postcss-flexibility'),           // плагин для полифила flexbox
    postcss_color_function      = require("postcss-color-function"),
    postcss_discard_comments    = require('postcss-discard-comments'),
    postcss_assets              = require('postcss-assets');

const autoprefixer = require('autoprefixer');
const del = require('del');
const path = require('path');                  // Утилита для работы с путями
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
// const doiuse = require('doiuse');

 
const isDevelopment = process.env.NODE_ENV == 'development';

const paths = {
    path:                 './',
    public:               './public/',
    cssPathName:          'css/',                       // Директория с map-файлами для css
    jsPathName:           'js/',                       // Директория с map-файлами для css
    mapPathName:          'maps/',                       // Директория с map-файлами для css
    mainFileName:         'index.css',
    outFileName:          'c.css',
    webpackEntry:         './public/js/index.js',
}

paths.css_path              = path.join(paths.public, paths.cssPathName); // Директория, где располагаются CSS-файлы\
paths.js_path               = path.join(paths.public, paths.jsPathName); // Директория, где располагаются js-файлы\
paths.css_map_path          = path.join(paths.css_path, 'maps');
paths.css_out_path          = path.join(paths.css_path, 'c/');// Директория, где располагаются выходные CSS-файлы
paths.post_css_path         = path.join(paths.css_path, 'postcss'); // Папка с POSTCSS файлами

paths.post_css_main_file    = path.join(paths.post_css_path, paths.mainFileName); // Папка с POSTCSS index

paths.post_css_files_mask   = path.join(paths.post_css_path, '**', '*.css');
paths.html_files_mask       = path.join(paths.path, '**', '*.html');
paths.js_files_mask         = path.join(paths.js_path, '**', '*.js');

let cssSourcemapsOptions = { sourceMappingURLPrefix: '..' };   // Опции для настройка sourceMaps


// =========== TASKS
gulp.task('postcss', __postcss);
gulp.task('html', __html);
gulp.task('clean', __clean);

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.parallel('watch:html', 'watch:postcss')
});

gulp.task('webpack', __js);

gulp.task('watch:postcss', function() {
    gulp.watch(paths.post_css_files_mask, gulp.series('postcss'));
});

gulp.task('watch:html', function() {
    gulp.watch(paths.html_files_mask, gulp.series('html'));
});

gulp.task('watch:js', function(done) {
    // console.log(done);
    // console.log(paths.js_files_mask);
    gulp.watch(paths.js_files_mask, gulp.series('webpack'));
});

gulp.task('watch:all', gulp.series(
    gulp.parallel('watch:html', 'watch:postcss', 'watch:js', 'server')
    // gulp.parallel('watch:html', 'watch:postcss', 'server')
));

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('postcss', 'html'),
));
// // ======== TASKS


let clean_css_params = {
    keepBreaks: true,
    restructuring: false,
    aggressiveMerging: false
};

const onError = function (err) {
    console.log(err);
};

function __postcss(done) {
    
    let resultMapPath = path.join('../', paths.mapPathName),
        resultCssPath = path.join(paths.css_out_path),
        resultFile    = 'c.css';

    if (isDevelopment){
        resultCssPath = path.join(paths.css_path),
        resultMapPath = path.join(paths.mapPathName),
        resultFile    = 'index.css';

        clean_css_params = { aggressiveMerging: false };
        cssSourcemapsOptions.sourceMappingURLPrefix = '';
    } else {

    }

    var plugins = [
        postcss_assets({
            loadPaths: [''],
            relativeTo: ['']
        }),
        postcss_import,
        postcss_discard_comments,
        postcss_extend,
        postcss_hexrgba,
        postcss_object_fit_images,
        postcss_flexibility,
        postcss_simple_vars,
        postcss_color_function,
        postcss_units,
        postcss_mixins,
        postcss_nested,
        autoprefixer({browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}),
        cssnano(),
    ];

    return gulp.src(paths.post_css_main_file)
        .pipe(gulpIf(isDevelopment, gp.sourcemaps.init()))
        .pipe(gp.postcss(plugins))
        .pipe(gp.concat({ path: resultFile, stat: { mode: 0666 }}))
        .pipe(gulpIf(isDevelopment, gp.sourcemaps.write(resultMapPath, cssSourcemapsOptions)))
        .pipe(gulp.dest(resultCssPath))
        .pipe(browserSync.reload({stream: true}));
}


function __html(done) {
    return gulp.src(paths.html_files_mask)
        .on('end', browserSync.reload);
}

function __js(done) {
    return gulp.src(paths.webpackEntry)
        .pipe(webpack_stream(webpack_config, webpack))
        .pipe(gulp.dest(paths.js_path));
}

// del dir
function __clean(done) {
    return del(path.join(paths.css_path, paths.mainFileName));
    return del(path.join(paths.css_out_path, paths.outFileName));
    return del(path.join(paths.css_map_path));
}
