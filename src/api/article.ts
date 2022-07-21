import http from '/@/utils/request'
import { requestType } from './index'

export function getArticle( data?: object ) : requestType {
  return http.request( {
    method : 'get',
    url : '/article/list',
    data
  } )
}

export function getDetail( id : number ) : requestType {
  return http.request( {
    url : '/article/detail',
    method : 'get',
    data : { id }
  } )
}

export function getPv( data?: object ) : requestType {
  return http.request( {
    url : '/article/pv',
    method : 'get',
    data
  } )
}

export function createArticle( data?: object ) : requestType {
  return http.request( {
    url : '/article/create',
    method : 'post',
    data
  } )
}

export function updateArticle( data?: object ) : requestType {
  return http.request( {
    url : '/article/update',
    method : 'post',
    data
  } )
}
