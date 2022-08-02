// see more : https://vue-i18n.intlify.dev/introduction.html
import type { App } from 'vue'
import { type I18n, createI18n } from 'vue-i18n'
import messages from './getMessage'

const localeData = {
  legacy : false, // composition API
  locale : 'zh',
  globalInjection : true, // 全局模式，可以直接使用 $t
  messages
}

export const i18n = createI18n( localeData ) as I18n

export function setupI18n( app: App ) {
  app.use( i18n )
}
