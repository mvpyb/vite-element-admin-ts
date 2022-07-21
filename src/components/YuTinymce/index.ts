import YuTinymce from './src/index.vue'
import type { App } from 'vue'

export const Tinymce = Object.assign( YuTinymce, {
  install( app : App ) {
    app.component( YuTinymce.name, YuTinymce )
  }
} )

export default Tinymce
