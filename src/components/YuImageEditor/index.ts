import YuImageEditor from './src/index.vue'
import type { App } from 'vue'

export const ImageEditor = Object.assign( YuImageEditor, {
  install( app : App ) {
    app.component( YuImageEditor.name, YuImageEditor )
  }
} )

export default ImageEditor
