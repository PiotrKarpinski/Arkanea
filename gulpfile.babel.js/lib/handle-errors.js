import notify from 'gulp-notify'

module.exports = (errorObject, callback, ...args) => {
  notify.onError(errorObject.toString().split(': ').join(':\n')).apply(this, args)
  // Keep gulp from hanging on this task
  if (typeof this.emit === 'function') this.emit('end')
}
