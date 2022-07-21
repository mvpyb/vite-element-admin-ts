import YuSvgIcon from './src/index.vue'
import type { App } from 'vue'

export const SvgIcon = Object.assign( YuSvgIcon, {
  install( app : App ) {
    app.component( YuSvgIcon.name, YuSvgIcon )
  }
} )

export default SvgIcon
