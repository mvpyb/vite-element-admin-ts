import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router'
import type { AppRouteRecordRaw } from '@/router/types'

/**
 * 使用meta.role来确定当前用户是否有权限
 * @param roles
 * @param route const hasPermission = (roles: string[], route: RouteConfig) => {
 */
function hasPermission( roles: string[], route: AppRouteRecordRaw ): boolean {
  if ( route.meta && route.meta.roles ) {
    return roles.some( role => route.meta?.roles?.includes( role ) )
  } else {
    return true
  }
}

/**
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes( routes: AppRouteRecordRaw[], roles: string[] ): AppRouteRecordRaw[] {
  const res: AppRouteRecordRaw[] = []

  routes.forEach( ( route: AppRouteRecordRaw ) => {
    const tmp = { ...route }
    if ( hasPermission( roles, tmp ) ) {
      if ( tmp.children ) {
        tmp.children = filterAsyncRoutes( tmp.children, roles )
      }
      res.push( tmp )
    }
  } )

  return res
}

const usePermissionStore = defineStore( {
  id : 'permission',
  state : () => {
    return {
      routes : Array<AppRouteRecordRaw>(),
      addRoutes : Array<AppRouteRecordRaw>(),
      directivePermission : Array<string>()
    }
  },
  actions : {
    SET_ROUTES( roles: string[] ): Promise<AppRouteRecordRaw[]> {
      return new Promise( resolve => {
        let accessedRoutes: Array<AppRouteRecordRaw>
        if ( roles.includes( 'admin' ) ) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = filterAsyncRoutes( asyncRoutes, roles )
        }
        this.addRoutes = accessedRoutes
        // eslint-disable-next-line no-unused-expressions
        this.routes = constantRoutes.concat( accessedRoutes )
        resolve( accessedRoutes )
      } )
    },
    SET_DIRECTIVE_ROLE( roles: string[] ) {
      this.directivePermission = roles
    }
  }
} )

export default usePermissionStore
