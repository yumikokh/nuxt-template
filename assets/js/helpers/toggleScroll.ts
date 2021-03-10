/**
 * ブラウザやデバイスが対応しているイベントに合わせタッチスクロールもしくはマウススクロールを操作します
 */

const invalidation = (e: Event) => {
  e.preventDefault()
}
const eventOpts = {
  passive: false,
}

// スクロールを禁止する
export function preventScroll(): void {
  // 禁止するスクロールイベントを判定する
  const mouseWheel =
    'onwheel' in document
      ? 'wheel'
      : 'onmousewheel' in document
      ? 'mousewheel'
      : 'DOMMouseScroll'
  const scrollEvent = 'ontouchmove' in window ? 'touchmove' : mouseWheel
  window.addEventListener(scrollEvent, invalidation, eventOpts)
}

// スクロール禁止を解除する
export function allowScroll(): void {
  // 禁止するスクロールイベントを判定する
  const mouseWheel =
    'onwheel' in document
      ? 'wheel'
      : 'onmousewheel' in document
      ? 'mousewheel'
      : 'DOMMouseScroll'
  const scrollEvent = 'ontouchmove' in window ? 'touchmove' : mouseWheel
  window.removeEventListener(scrollEvent, invalidation)
}
