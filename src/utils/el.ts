
export const hasClass = ( el: RefType<any>, cls: string ): any => {
  return !!el.className.match( new RegExp( '(\\s|^)' + cls + '(\\s|$)' ) )
}

export const addClass = ( el: RefType<any>, cls: string, extracls?: string ) => {
  if ( !hasClass( el, cls ) ) el.className += ' ' + cls
  if ( extracls ) {
    if ( !hasClass( el, extracls ) ) el.className += ' ' + extracls
  }
}

export const removeClass = ( el: RefType<any>, cls: string, extracls?: string ) => {
  if ( hasClass( el, cls ) ) {
    const reg = new RegExp( '(\\s|^)' + cls + '(\\s|$)' )
    el.className = el.className.replace( reg, ' ' ).trim()
  }
  if ( extracls ) {
    if ( hasClass( el, extracls ) ) {
      const regs = new RegExp( '(\\s|^)' + extracls + '(\\s|$)' )
      el.className = el.className.replace( regs, ' ' ).trim()
    }
  }
}

export const toggleClass = ( flag: boolean, clsName: string, target?: RefType<any> ) => {
  const targetEl = target || document.body
  let { className } = targetEl
  className = className.replace( clsName, '' )
  targetEl.className = flag ? `${className} ${clsName} ` : className
}
