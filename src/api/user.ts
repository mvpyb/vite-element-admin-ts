import http from '/@/utils/request'
import { requestType } from './index'

// 用户列表
export function UserList( data?: object ): requestType {
  return http.request( {
    method : 'post',
    url : '/v1/user/list',
    data
  } )
}

export function login( data?: object ): requestType {
  return http.request( {
    method : 'get',
    url : '/login',
    data
  } )
}

export function getInfo( data?: object ): requestType {
  return http.request( {
    method : 'get',
    url : '/getUserInfo',
    data
  } )
}

export function logout(): requestType {
  return http.request( {
    url : '/logout',
    method : 'get'
  } )
}

export function loginHistory(): requestType {
  return http.request( {
    url : '/login/history',
    method : 'get'
  } )
}
