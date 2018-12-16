import log from 'fancy-log'
import chalk from 'chalk'
import PluginError from 'plugin-error'
import prettifyTime from './prettify-time'
import handleErrors from './handle-errors'

module.exports = (err, stats) => {
  if (err) throw new PluginError('webpack', err)

  if (stats.compilation.errors.length > 0) {
    stats.compilation.errors.forEach(function (error) {
      handleErrors(error)
    })
  } else {
    log(chalk.green(stats))
  }
}
