const toString = Object.prototype.toString

export function is( val: any, type: string ) {
  return toString.call( val ) === `[object ${type}]`
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isObject( arg: any ): arg is Record<any, any> {
  return arg !== null && is( arg, 'Object' )
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isEmpty<T = unknown>( arg: T ): arg is T {
  if ( isArray( arg ) || isString( arg ) ) {
    return arg.length === 0
  }

  if ( arg instanceof Map || arg instanceof Set ) {
    return arg.size === 0
  }

  if ( isObject( arg ) ) {
    return Object.keys( arg ).length === 0
  }

  return false
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isDate( arg: unknown ): arg is Date {
  return is( arg, 'Date' )
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isNull( arg: unknown ): arg is null {
  return arg === null
}

export function isNullAndUnDef( arg: unknown ): arg is null | undefined {
  return isUnDef( arg ) && isNull( arg )
}

export function isNullOrUnDef( arg: unknown ): arg is null | undefined {
  return isUnDef( arg ) || isNull( arg )
}

export function isUnDef<T = unknown>( arg?: T ): arg is T {
  return is( arg, 'Undefined' )
  // return typeof arg === 'undefined'
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isNumber( arg: unknown ): arg is number {
  return arg !== null && is( arg, 'Number' )
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isPromise<T = any>( arg: unknown ): arg is Promise<T> {
  return is( arg, 'Promise' ) && isObject( arg ) && isFunction( arg.then ) && isFunction( arg.catch )
}

/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function isString( arg: unknown ): arg is string {
  return is( arg, 'String' )
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isFunction( arg: unknown ): arg is Function {
  return typeof arg === 'function'
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isBoolean( arg: unknown ): arg is boolean {
  return is( arg, 'Boolean' )
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isRegExp( arg: unknown ): arg is RegExp {
  return is( arg, 'RegExp' )
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray( arg: any ): arg is Array<any> {
  if ( typeof Array.isArray === 'undefined' ) {
    return is( arg, 'Array' )
  }
  return Array.isArray( arg )
}

export function isWindow( arg: any ): arg is Window {
  return typeof window !== 'undefined' && is( arg, 'Window' )
}

export function isElement( arg: unknown ): arg is Element {
  return isObject( arg ) && !!arg.tagName
}

export function isMap( arg: unknown ): arg is Map<any, any> {
  return is( arg, 'Map' )
}

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal( arg: string ) : arg is string {
  return /^(https?:|mailto:|tel:)/.test( arg )
}

/**
 * @param {Object} arg
 * @returns {Boolean}
 */
export function isIterable( arg: any ) {
  return arg != null && typeof arg[Symbol.iterator] === 'function'
}

/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function validUsername( arg: string ) : arg is string {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf( arg.trim() ) >= 0
}
/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function validPhone( arg: string | number ) : arg is string | number {
  let pass
  const val = ( '' + arg ).trim()
  if ( !/^(0|86|17951)?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9])[0-9]{8}$/i.test( val ) ) {
    pass = false
  } else {
    pass = true
  }
  return pass
}

/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function validURL( arg: string ) : arg is string {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test( arg )
}

/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function validLowerCase( arg: string ) : arg is string {
  const reg = /^[a-z]+$/
  return reg.test( arg )
}

/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function validUpperCase( arg: string ) : arg is string {
  const reg = /^[A-Z]+$/
  return reg.test( arg )
}

/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function validAlphabets( arg: string ) : arg is string {
  const reg = /^[A-Za-z]+$/
  return reg.test( arg )
}

/**
 * @param {string} arg
 * @returns {Boolean}
 */
export function validEmail( arg: string ) : arg is string {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test( arg )
}

/**
 * @description 校验身份证号码
 * @param {string} arg
 * @returns {Boolean}
 */
export function validID( arg: string ) : arg is string {
  const reg =
    /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
  return reg.test( arg )
}
