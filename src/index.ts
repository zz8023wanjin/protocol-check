import { openUrlWithHiddenFrame, openUrlWithTimeoutHack } from './core'
import { promiseAny } from './helper/polyfill'

const protocolCheck = (options: { url: string; onSuccess?: () => void; onError?: () => void }) => {
  if (typeof window === 'undefined') {
    console.warn('protocolCheck: This function is only available in the browser environment.')
    return
  }

  const { url, onSuccess, onError } = options

  const methods = [openUrlWithHiddenFrame, openUrlWithTimeoutHack]

  const promises = methods.map((item) => item(url))

  promiseAny(promises)
    .then(() => {
      onSuccess?.()
    })
    .catch(() => {
      onError?.()
    })
}

export default protocolCheck
