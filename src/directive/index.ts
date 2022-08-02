import clipboard from './clipboard'
import wave from './wave'
import longpress from './longpress'
import dobounce from './dobounce'
import waterMarker from './waterMarker'
import draggable from './draggable'
import permission from './permission'
import { Directive, App } from 'vue'

const directives = {
  clipboard,
  longpress,
  dobounce,
  waterMarker,
  draggable,
  permission,
  wave
}

const registerDirective = ( app: App ) => {
  Object.keys( directives ).forEach( key => {
    app.directive( key, ( directives as { [key: string]: Directive } )[key] )
  } )
}
export default registerDirective
