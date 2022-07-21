
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import DefineOptions from "unplugin-vue-define-options/vite"
import legacy from '@vitejs/plugin-legacy'
import { visualizer } from 'rollup-plugin-visualizer'
import { viteMockServe } from 'vite-plugin-mock' // https://github.com/anncwb/vite-plugin-mock/blob/HEAD/README.zh_CN.md
import { svgBuilder } from './svgBuilder'
import vueJsx from "@vitejs/plugin-vue-jsx"

export function composePlugins( isServe : boolean, VITE_LEGACY : boolean ) {
  const prodMock = true
  const lifecycle = process.env.npm_lifecycle_event
  return [
    vue(),
    DefineOptions(),
    vueJsx(),
    svgBuilder( './src/icons/svg/' ),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    // https://www.npmjs.com/package/@vitejs/plugin-legacy
    VITE_LEGACY
      ? legacy( {
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        } )
      : null,
    // https://www.npmjs.com/package/rollup-plugin-visualizer
    lifecycle === "report"
      ? visualizer( {
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: "report.html"
      } )
      : null,
  
    viteMockServe( {
      mockPath: 'mock',
      // watchFiles : true,
      // supportTs : true,
      localEnabled : isServe,
      prodEnabled : !isServe && prodMock,
      injectCode : `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      logger : true
    } )
  ]
}
