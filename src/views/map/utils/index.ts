/**
 * 动态添加js
 * */
export const dynamicLoad = ( src: string, call: Function ) => {
  return new Promise( ( resolve, reject ) => {
    const script = document.createElement( 'script' )
    script.type = 'text/javascript'
    script.onerror = reject
    script.src = src
    document.body.appendChild( script )
    script.onload = function() {
      call && call( resolve )
    }
  } )
}

/**
 * 百度地图 动态添加js
 * */
export const baiduMap = async( ak: string ) => {
  const src = `http://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=baiduMap`
  return await dynamicLoad( src, ( resolve: Function ) => {
    window.baiduMap = function() {
      resolve()
    }
  } )
}

/**
 * 腾讯地图 动态添加js
 * */
export const tencentMap = async( ak: string ) => {
  const src = `https://map.qq.com/api/gljs?v=2.exp&key=${ak}`
  return await dynamicLoad( src, ( resolve: Function ) => {
    resolve()
  } )
}
