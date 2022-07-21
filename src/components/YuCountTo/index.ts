import YuCopyright from './src/index.vue'
import type { App } from 'vue'

export const Copyright = Object.assign( YuCopyright, {
  install( app : App ) {
    app.component( YuCopyright.name, YuCopyright )
  }
} )

export default Copyright
