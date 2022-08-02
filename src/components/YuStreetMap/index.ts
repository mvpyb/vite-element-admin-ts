import YuStreetMap from './src/index.vue'
import type { App } from 'vue'

export const StreetMap = Object.assign( YuStreetMap, {
  install( app: App ) {
    app.component( YuStreetMap.name, YuStreetMap )
  }
} )

export default StreetMap
