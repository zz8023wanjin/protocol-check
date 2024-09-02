import { openUrlWithHiddenFrame, openUrlWithTimeoutHack } from './core'
import { detectBrowser } from './helper/utils'

const protocolCheck = (options: {
  url: string
  onSuccess: () => void
  onError: () => void
  noSupport?: () => void
}) => {
  if (typeof window === 'undefined') {
    return
  }

  const { url, onSuccess, onError, noSupport } = options

  const browser = detectBrowser()

  if (browser.isFirefox || browser.isSafari) {
    openUrlWithHiddenFrame(url, onSuccess, onError)
  } else if (browser.isChrome || browser.isIOS) {
    openUrlWithTimeoutHack(url, onSuccess, onError)
  } else {
    console.error('Browser not supported')
    noSupport?.()
  }
}

export default protocolCheck

export { detectBrowser }
