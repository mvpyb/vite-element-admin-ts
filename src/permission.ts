import router from './router'
import cookies from '@/utils/cookies'
import NProgress from '@/utils/progress'
import getPageTitle from '@/utils/getPageTitle'
import { TOKEN } from '@/config/constant'
import { useUserStore, usePermissionStore } from '@/store'
import { RouteRecordRaw } from 'vue-router'
import { toRouteType } from '@/router/types'

const whiteList = ['/login']
router.beforeEach( async( to: toRouteType, from, next ): Promise<void> => {
  NProgress.start()
  document.title = getPageTitle( to.meta.title )
  const hasToken = cookies.get( TOKEN )
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  if ( hasToken && hasToken !== 'undefined' ) {
    if ( to.path === '/login' ) {
      next( { path : '/' } )
      NProgress.done()
    } else {
      const hasRoles = userStore.roles && userStore.roles.length > 0
      if ( hasRoles ) {
        next()
      } else {
        try {
          const { roles } = await userStore.GET_USER_INFO()
          const accessRoutes = await permissionStore.SET_ROUTES( roles )
          accessRoutes.forEach( item => {
            router.addRoute( item as unknown as RouteRecordRaw )
          } )
          next( { ...to, replace : true } )
        } catch ( error ) {
          await userStore.RESET_INFO()
          next( '/login' )
          NProgress.done()
        }
      }
    }
  } else {
    if ( whiteList.indexOf( to.path ) !== -1 ) {
      next()
    } else {
      next( '/login' )
      NProgress.done()
    }
  }
} )

router.afterEach( () => {
  NProgress.done()
} )
