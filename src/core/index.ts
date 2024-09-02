import { _createHiddenIframe, _registerEvent } from '../helper/dom'

const openUrlUsingFirefox = (url: string, onSuccess: () => void, onError: () => void) => {
  let iframe: HTMLIFrameElement | null = document.querySelector('#hiddenIframe')

  if (!iframe) {
    iframe = _createHiddenIframe(document.body, 'about:blank')
  }

  try {
    iframe.contentWindow?.location.replace(url)
    onSuccess()
  } catch (e: any) {
    if (e.name === 'NS_ERROR_UNKNOWN_PROTOCOL') {
      onError()
    }
  }
}

const openUrlWithTimeoutHack = (url: string, onSuccess: () => void, onError: () => void) => {
  const timeout = setTimeout(function () {
    onError()
    handler?.remove()
  }, 1000)

  //handle page running in an iframe (blur must be registered with top level window)
  let target = window
  while (target !== target.parent) {
    target = target.parent as Window & typeof globalThis
  }

  let handler = _registerEvent(target, 'blur', onBlur)

  function onBlur() {
    clearTimeout(timeout)
    handler?.remove()
    onSuccess()
  }

  window.location.href = url
}

const openUrlWithHiddenFrame = (url: string, onSuccess: () => void, onError: () => void) => {
  const timeout = setTimeout(function () {
    onError()
    handler?.remove()
  }, 1000)

  let iframe: HTMLIFrameElement | null = document.querySelector('#hiddenIframe')
  if (!iframe) {
    iframe = _createHiddenIframe(document.body, 'about:blank')
  }

  const handler = _registerEvent(window, 'blur', onBlur)

  function onBlur() {
    clearTimeout(timeout)
    handler?.remove()
    onSuccess()
  }

  iframe.contentWindow?.location.replace(url)
}

export { openUrlUsingFirefox, openUrlWithTimeoutHack, openUrlWithHiddenFrame }
