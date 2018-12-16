import gulp from 'gulp'
import clean from './tasks/clean'
import css from './tasks/css'
import html from './tasks/html'
import images from './tasks/images'
import watch from './tasks/watch'
import browserSync from './tasks/browser-sync'
// import svgsprites from './tasks/svgsprites'
import webpackProduction from './tasks/webpack-production'

global.production = false

const prod = function () {
  if (global.process.argv.includes('production')) {
    global.production = true
  }

  return [clean, html, css, images, webpackProduction]
}

const base = function () {
  return [html, css, images, gulp.parallel(browserSync, watch)]
}

gulp.task('default', gulp.series(...base()))
gulp.task('production', gulp.series(...prod()))
// gulp.task('svgsprites', gulp.series(svgsprites))
