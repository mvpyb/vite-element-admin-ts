export let getEnv: (envConf: Recordable) => ViteEnv
getEnv = (envConf: Recordable): ViteEnv => {
  const ret: ViteEnv = {
    VITE_PORT: 9527,
    VITE_PUBLIC_PATH: '',
    VITE_PROXY_DOMAIN: '',
    VITE_PROXY_DOMAIN_REAL: '',
    VITE_ROUTER_HISTORY: '',
    VITE_LEGACY: false
  }
  
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    
    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    // @ts-ignore
    ret[envName] = realName
    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
};

export const regExps = ( value : string, reg : string ) => {
  return value.replace( new RegExp( `^${reg}`, 'g' ), '' )
}
