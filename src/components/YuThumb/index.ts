import YuThumb from './src/index.vue'
import type { App } from 'vue'

export const Thumb = Object.assign( YuThumb, {
  install( app : App ) {
    app.component( YuThumb.name, YuThumb )
  }
} )

export default Thumb
