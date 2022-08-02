import type { RouteLocationNormalized, RouteRecordRaw, RouteMeta } from 'vue-router'
import { defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | ( () => Promise<typeof import( '*.vue' )> )
  | ( () => Promise<T> )

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string
    hidden?: boolean
    roles?: string[]
    icon?: string
    noCache?: boolean
    affix?: boolean
    alwaysShow?: boolean
    breadcrumb?: boolean
    activeMenu?: boolean
  }
}

export interface RouteMetaRaw extends RouteMeta {
  title?: string
  hidden?: boolean
  roles?: string[]
  icon?: string
  noCache?: boolean
  affix?: boolean
  alwaysShow?: boolean
  breadcrumb?: boolean
  activeMenu?: boolean
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  path: string
  name: string
  redirect?: string
  component?: Component | string
  meta: RouteMetaRaw
  children?: AppRouteRecordRaw[]
  props?: Recordable
}
