interface callbackFn {
  ( ...params: any[] ): any
}

let callbacks: Array<callbackFn> = []

function loadedTinymce() {
  return window.tinymce
}

const dynamicLoadScript = ( src: string, callback: callbackFn ) => {
  const existingScript: HTMLElement | null = document.getElementById( src )
  const cb: callbackFn = callback || function() {}

  if ( !existingScript ) {
    const script: HTMLScriptElement = document.createElement( 'script' )
    script.src = src // src url for the third-party library being loaded.
    script.id = src
    document.body.appendChild( script )
    callbacks.push( cb )
    stdOnEnd( script )
  }

  if ( existingScript && cb ) {
    if ( loadedTinymce() ) {
      cb( null, existingScript )
    } else {
      callbacks.push( cb )
    }
  }

  function stdOnEnd( script: HTMLScriptElement ) {
    script.onload = function() {
      // this.onload = null here is necessary
      // because even IE9 works not like others
      this.onerror = this.onload = null
      for ( const cb of callbacks ) {
        cb( null, script )
      }
      callbacks = []
    }
    script.onerror = function() {
      this.onerror = this.onload = null
      cb( new Error( 'Failed to load ' + src ), script )
    }
  }
}

export default dynamicLoadScript
