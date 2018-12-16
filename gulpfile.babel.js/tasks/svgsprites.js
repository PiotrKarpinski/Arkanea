import gulp from 'gulp'
import path from 'path'
import svgSprite from 'gulp-svg-sprite'
import config from '../config'

const configSvg = {
  mode: {
    symbol: true,
    sprite: 'sprite.<mode>.svg'
  }
}

const paths = {
  src: path.join(config.root.src, config.tasks.svgsprites.src),
  dest: path.join(config.root.dest, config.tasks.svgsprites.dest)
}

const svgSpritesTask = (cb) => {
  return gulp.src('**/*.' + config.tasks.svgsprites.extensions, {
    cwd: paths.src
  })
    .pipe(svgSprite(configSvg))
    .pipe(gulp.dest(path.join(global.production ? config.root.dist : '', paths.dest)))
}

gulp.task('svgsprites', svgSpritesTask)
module.exports = svgSpritesTask
