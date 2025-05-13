import { openUrlWithHiddenFrame, openUrlWithTimeoutHack } from './core'

const protocolCheck = (options: { url: string; onSuccess?: () => void; onError?: () => void }) => {
  if (typeof window === 'undefined') {
    console.warn('protocolCheck: This function is only available in the browser environment.')
    return
  }

  const { url, onSuccess, onError } = options

  const methods = [openUrlWithHiddenFrame, openUrlWithTimeoutHack]

  const tryNext = (index: number) => {
    if (index >= methods.length) {
      onError?.()
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
