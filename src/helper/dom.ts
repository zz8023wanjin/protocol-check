export function _registerEvent(target: Document | Window, eventType: string, cb: () => void) {
  if (target.addEventListener) {
    target.addEventListener(eventType, cb)
    return {
      remove: function () {
        target.removeEventListener(eventType, cb)
      },
    }
  }
}

export function _createHiddenIframe(target: HTMLElement, url: string) {
  const iframe = document.createElement('iframe')
  iframe.src = url
  iframe.id = 'hiddenIframe'
  iframe.style.display = 'none'
  target.appendChild(iframe)

  return iframe
}
