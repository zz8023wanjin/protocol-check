import { _createHiddenIframe, _registerEvent } from '../helper/dom'

const openUrlWithTimeoutHack = (url: string) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(function () {
      reject('open url with timeout hack timeout')
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
      resolve(true)
    }

    window.location.href = url
  })
}

const openUrlWithHiddenFrame = (url: string) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(function () {
      reject('open url with hidden frame timeout')
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
      resolve(true)
    }

    iframe.contentWindow?.location.replace(url)
  })
}

export { openUrlWithTimeoutHack, openUrlWithHiddenFrame }
