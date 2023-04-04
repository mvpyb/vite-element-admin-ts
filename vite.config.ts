
import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import { join } from 'path'
import { getEnv, regExps } from './config'
import { composePlugins } from './config/plugins'
// import { type } from 'os'

function resolve( dir : string ) :string {
  return join( __dirname, dir )
}

export default defineConfig( ( { command, mode } : ConfigEnv ) => {
  const root: string = process.cwd()
  const env = getEnv( loadEnv( mode, process.cwd() ) )
  const { VITE_PORT, VITE_PROXY_DOMAIN, VITE_PROXY_DOMAIN_REAL, VITE_LEGACY } = env
  const isServe = command === 'serve'
  return {
    root,
    base : './', //
    resolve : {
      alias : {
        '@' : resolve( 'src' )
      },
      extensions : ['.js', '.json', '.ts', '.vue']
    },

    plugins : composePlugins( isServe, VITE_LEGACY ),

    server : {
      host : '0.0.0.0',
      port : VITE_PORT || 9527,
      https : false,
      open : false,
      proxy : {
        [VITE_PROXY_DOMAIN] : {
          target : VITE_PROXY_DOMAIN_REAL,
          ws : false,
          changeOrigin : true,
          rewrite : ( path ) => regExps( path, VITE_PROXY_DOMAIN )
        }
      }
    },

    define : {
      // https://vue-i18n.intlify.dev/guide/advanced/optimization.html#quasar-cli
      // 消除 vue-i18n 警告
      __VUE_I18N_FULL_INSTALL__ : true,
      __VUE_I18N_LEGACY_API__ : false,
      __INTLIFY_PROD_DEVTOOLS__ : false,
      __APP_INFO__ : JSON.stringify( {
        version : '3.0.0'
      } )
    },

    build : {
      path : './',
      sourcemap : false,
      brotliSize : false,
      chunkSizeWarningLimit : 2500
    }
  }
} )
