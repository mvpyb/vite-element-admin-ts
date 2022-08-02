import { Component } from 'vue'

export type appType = {
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  device: string
  size: string
  lang: string
}

export type setType = {
  theme?: string
  showSettings: boolean
  tagsView: boolean
  fixedHeader: boolean
  sidebarLogo: boolean
  layoutMod: string
}

export type userType = {
  token: string
  uid?: string
  avatar?: string
  name?: string
  phone?: string
  email?: string
  identity?: string
  roles?: string[]
}

export type routeMetaType = {
  title: string
  roles?: string[]
  icon?: string
  hidden?: boolean
  noCache?: boolean
  affix?: boolean
  alwaysShow?: boolean
  breadcrumb?: boolean
  activeMenu?: boolean
}

export type RouteConfigType = {
  path: string
  name?: string
  redirect?: string
  component?: Component | string
  meta?: routeMetaType
  children?: RouteConfigType[]
}
