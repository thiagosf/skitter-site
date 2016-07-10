// Libs
import gulp from 'gulp'
import webserver from 'gulp-webserver'
import minify from 'gulp-minify'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import babel from 'gulp-babel'
import babelify from 'babelify'
import browserify from 'browserify'
import buffer from 'vinyl-buffer'
import watchify from 'watchify'
import gutil from 'gulp-util'
import sourcemaps from 'gulp-sourcemaps'
import source from 'vinyl-source-stream'
import nunjucks from 'gulp-nunjucks'
import fs from 'fs'

// Configuration for Gulp
const config = {
  js: {
    src: './src/app.js',
    watch: ['./src/**/*', './src/**/**/*'],
    outputDir: './public/js/',
    outputFile: 'app.js'
  },
  css: {
    watch: ['./sass/**/*'],
    outputDir: './public/css/'
  }
}

// Scripts
function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.js.outputFile))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.js.outputDir))
}
const customOpts = {
  entries: [config.js.src],
  debug: true,
  extensions: ['.js']
}
const opts = Object.assign({}, watchify.args, customOpts)
let b = watchify(browserify(opts), { poll: true })
b.transform(babelify)
b.on('update', bundle)
b.on('log', gutil.log)
gulp.task('scripts', bundle)

// Minify
gulp.task('compress', ['scripts'], () => {
  return gulp.src(config.js.outputDir + config.js.outputFile)
    .pipe(minify({
      ext: { min:'.min.js' }
    }))
    .pipe(gulp.dest(config.js.outputDir))
})

// Styles
gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/css'))
})

// Styles watch
gulp.task('sass:watch', () => {
  return gulp.watch('./scss/**/*.scss', ['sass'])
})

// Templates
gulp.task('template', () => {
  const settings_data = JSON.parse(fs.readFileSync('./settings/data.json'))
  return gulp.src('./templates/*.html')
    .pipe(nunjucks.compile(settings_data))
    .pipe(gulp.dest('./public'))
})

// Templates watch
gulp.task('template:watch', () => {
  return gulp.watch(['./templates/**/*.html', './settings/*.json'], ['template'])
})

// Webserver
gulp.task('ws', ['sass:watch', 'template:watch', 'scripts'], () => {
  return gulp.src('public')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 3000,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }))
})

// Build
gulp.task('dist', ['template', 'compress', 'sass'])
