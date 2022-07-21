import YuTextHover from './src/index.vue'
import type { App } from 'vue'

export const TextHover = Object.assign( YuTextHover, {
  install( app : App ) {
    app.component( YuTextHover.name, YuTextHover )
  }
} )

export default TextHover
