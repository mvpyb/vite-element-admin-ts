import YuLayout from './src/index.vue'
import type { App } from 'vue'

export const Layout = Object.assign( YuLayout, {
  install( app : App ) {
    app.component( YuLayout.name, YuLayout )
  }
} )

export default Layout
