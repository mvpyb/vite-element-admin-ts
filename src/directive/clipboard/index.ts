import Clipboard from 'clipboard'
import { Directive, DirectiveBinding } from 'vue'
interface ElType extends HTMLElement {
  _v_clipboard_success?: Function | null
  _v_clipboard_error?: Function | null
  _v_clipboard?: any
}

if ( !Clipboard ) {
  throw new Error( '你须先运行 npm install `clipboard` --save ' )
}

const clipboard: Directive = {
  beforeMount( el: ElType, binding: DirectiveBinding ) {
    if ( binding.arg === 'success' ) {
      el._v_clipboard_success = binding.value
    } else if ( binding.arg === 'error' ) {
      el._v_clipboard_error = binding.value
    } else {
      const clipboardInstance = new Clipboard( el, {
        text() {
          return binding.value
        },
        action() {
          return binding.arg === 'cut' ? 'cut' : 'copy'
        }
      } )
      clipboardInstance.on( 'success', e => {
        const callback = el._v_clipboard_success
        callback && callback( e )
      } )
      clipboardInstance.on( 'error', e => {
        const callback = el._v_clipboard_error
        callback && callback( e )
      } )
      el._v_clipboard = clipboardInstance
    }
  },
  beforeUpdate( el: ElType, binding: DirectiveBinding ) {
    if ( binding.arg === 'success' ) {
      el._v_clipboard_success = binding.value
    } else if ( binding.arg === 'error' ) {
      el._v_clipboard_error = binding.value
    } else {
      el._v_clipboard.text = function() {
        return binding.value
      }
      el._v_clipboard.action = function() {
        return binding.arg === 'cut' ? 'cut' : 'copy'
      }
    }
  },
  unmounted( el: ElType, binding: DirectiveBinding ) {
    if ( binding.arg === 'success' ) {
      delete el._v_clipboard_success
    } else if ( binding.arg === 'error' ) {
      delete el._v_clipboard_error
    } else {
      el._v_clipboard.destroy()
      delete el._v_clipboard
    }
  }
}

export default clipboard
