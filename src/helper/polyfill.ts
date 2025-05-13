export function promiseAny<T>(promises: Promise<T>[]): Promise<T> {
  if (typeof Promise.any === 'function') {
    return Promise.any(promises)
  }

  // Polyfill for Promise.any
  return new Promise((resolve, reject) => {
    const rejections: any[] = []
    let pending = promises.length
    if (pending === 0) {
      return reject(new AggregateError([], 'All promises were rejected'))
    }
    promises.forEach((p, i) => {
      Promise.resolve(p).then(resolve, (err) => {
        rejections[i] = err
        pending--
        if (pending === 0) {
          reject(new AggregateError(rejections, 'All promises were rejected'))
        }
      })
    })
  })
}
