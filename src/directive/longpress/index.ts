import { Directive, DirectiveBinding } from 'vue'
interface ElType extends HTMLElement {
  start?: Function | null
  handler?: Function | null
  _v_clipboard?: any
}

const longpress: Directive = {
  beforeMount : function( el: ElType, binding: DirectiveBinding ) {
    if ( typeof binding.value !== 'function' ) {
      throw 'callback must be a function'
    }
    // eslint-disable-next-line no-undef
    let pressTimer: NodeJS.Timeout | null = null
    // 创建计时器（ 2秒后执行函数 ）
    const start = ( e: any ) => {
      if ( e.type === 'click' && e.button !== 0 ) {
        return
      }
      if ( pressTimer === null ) {
        pressTimer = setTimeout( () => {
          handler( e )
        }, 1000 )
      }
    }
    const cancel = () => {
      if ( pressTimer !== null ) {
        clearTimeout( pressTimer )
        pressTimer = null
      }
    }
    const handler = ( e: MouseEvent | TouchEvent ) => {
      binding.value( e )
    }
    el.addEventListener( 'mousedown', start )
    el.addEventListener( 'touchstart', start )
    // 取消计时器
    el.addEventListener( 'click', cancel )
    el.addEventListener( 'mouseout', cancel )
    el.addEventListener( 'touchend', cancel )
    el.addEventListener( 'touchcancel', cancel )
  },
  updated( el, { value } ) {
    el.$value = value
  },
  unmounted( el ) {
    el.removeEventListener( 'click', el.handler )
  }
}

export default longpress
