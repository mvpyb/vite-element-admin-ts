import { head, toArray } from 'lodash-unified'
import mitt from 'mitt'
import type { App } from 'vue'

export const emitter = mitt()

export default {
  install( Vue: App ) {
    const _emitter = mitt()

    // 全局发布
    Vue.config.globalProperties.$pub = ( ...args: any[] ) => {
      _emitter.emit( head( args ), args.slice( 1 ) )
    }

    // 全局订阅
    Vue.config.globalProperties.$sub = function() {
      // eslint-disable-next-line prefer-rest-params
      Reflect.apply( _emitter.on, _emitter, toArray( arguments ) )
    }

    // 取消订阅
    Vue.config.globalProperties.$unsub = function() {
      // eslint-disable-next-line prefer-rest-params
      Reflect.apply( _emitter.off, _emitter, toArray( arguments ) )
    }
  }
}
