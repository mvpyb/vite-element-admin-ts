
import { Directive, DirectiveBinding } from 'vue'

interface ElType extends Element {
  __handle__: () => any;
}

const Dobounce : Directive = {
  created : function( el : ElType, binding : DirectiveBinding ) {
    let timer: NodeJS.Timeout | null = null
    el.__handle__ = function() {
      if ( timer ) {
        clearInterval( timer )
      }
      timer = setTimeout( () => {
        binding.value()
      }, 1000 )
    }
    el.addEventListener( 'click', el.__handle__ )
  },
  beforeUnmount( el: ElType ) {
    el.removeEventListener( 'click', el.__handle__ )
  }

}

export default Dobounce
