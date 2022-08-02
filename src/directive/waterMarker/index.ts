import { Directive, DirectiveBinding } from 'vue'

function addWaterMarker( str: string, parentNode: any, font: any, textColor: string ) {
  const can: HTMLCanvasElement = document.createElement( 'canvas' )
  parentNode.appendChild( can )
  can.width = 200
  can.height = 150
  can.style.display = 'none'

  const cans = can.getContext( '2d' ) as CanvasRenderingContext2D
  cans.rotate( ( -20 * Math.PI ) / 180 )
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle' as CanvasTextBaseline
  cans.fillText( str, can.width / 10, can.height / 2 )
  parentNode.style.backgroundImage = 'url(' + can.toDataURL( 'image/png' ) + ')'
}

const waterMarker: Directive = {
  beforeMount : function( el: HTMLElement, binding: DirectiveBinding ) {
    addWaterMarker( binding.value.text, el, binding.value.font, binding.value.textColor )
  }
}

export default waterMarker
