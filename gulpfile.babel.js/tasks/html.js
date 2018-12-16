import gulp from 'gulp'
import path from 'path'
import browserSync from 'browser-sync'
import data from 'gulp-data'
import twig from 'gulp-twig'
import fs from 'fs'
import gulpif from 'gulp-if'
import htmlmin from 'gulp-htmlmin'
import config from '../config'
import handleErrors from '../lib/handle-errors'

const exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

const paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/*.{' + config.tasks.html.extensions + '}'), exclude],
  dest: path.join('./')
}

const getData = function (file) {
  const dataPath = path.resolve(config.root.src, config.tasks.html.src, config.tasks.html.data)
  const fileName = dataPath + '/' + path.basename(file.path, '.twig') + '.json'

  if (fs.existsSync(fileName)) {
    return JSON.parse(fs.readFileSync(fileName, 'utf8'))
  }
}

const getDataOne = function (file) {
  const dataPath = path.resolve(config.root.src, config.tasks.html.src, config.tasks.html.dataFile)
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

const htmlTask = () => {
  return gulp.src(paths.src)
    .pipe(data(getDataOne))
    .pipe(data(getData))
    .on('error', handleErrors)
    .pipe(twig())
    .on('error', handleErrors)
    .pipe(gulpif(global.production, htmlmin(config.tasks.html.htmlmin)))
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
    .pipe(gulpif(!global.production, browserSync.stream()))
}

gulp.task('html', htmlTask)
module.exports = htmlTask
