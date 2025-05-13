import { openUrlWithHiddenFrame, openUrlWithTimeoutHack } from './core'

const protocolCheck = (options: { url: string; onSuccess?: () => void; noSupport?: () => void }) => {
  if (typeof window === 'undefined') {
    console.warn('protocolCheck: This function is only available in the browser environment.')
    return
  }

  const { url, onSuccess, noSupport } = options

  const methods = [openUrlWithHiddenFrame, openUrlWithTimeoutHack]

  const tryNext = (index: number) => {
    if (index >= methods.length) {
      noSupport?.()
      return
    }
    methods[index](
      url,
      () => onSuccess?.(),
      () => tryNext(index + 1),
    )
  }

  tryNext(0)
}

export default protocolCheck
