export function detectBrowser() {
  const ua = navigator.userAgent

  return {
    isOpera: /Opera|OPR\//.test(ua),
    isFirefox: /Firefox/.test(ua),
    isSafari: /^((?!chrome|android).)*safari/i.test(ua),
    isIOS: /Safari/.test(ua) && /iPhone|iPad|iPod/.test(ua),
    isChrome: /Chrome/.test(ua) && !/Edge/.test(ua),
    isIE: /MSIE|Trident/.test(ua),
  }
}
