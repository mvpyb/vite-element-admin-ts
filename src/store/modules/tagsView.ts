
import { defineStore } from 'pinia'
import { AppRouteRecordRaw } from '/@/router/types'

const useTagsViewStore = defineStore( {
  id : 'tagsView',
  state : () => {
    return {
      visitedViews : Array<AppRouteRecordRaw>(),
      cachedViews : Array<string>(),
      currentClose : ''
    }
  },
  actions : {
    ADD_VIEW( view : AppRouteRecordRaw ) {
      this.ADD_VISITED_VIEW( view )
      this.ADD_CACHED_VIEW( view )
    },
    DEL_VIEW( view : AppRouteRecordRaw ) {
      return new Promise( resolve => {
        this.DEL_VISITED_VIEW( view )
        this.DEL_CACHED_VIEW( view )
        resolve( {
          visitedViews : [...this.visitedViews],
          cachedViews : [...this.cachedViews]
        } )
      } )
    },
    DEL_OTHERS_VIEWS( view : AppRouteRecordRaw ) {
      return new Promise( resolve => {
        this.DEL_OTHERS_VISITED_VIEWS( view )
        this.DEL_OTHERS_CACHED_VIEWS( view )
        resolve( [...this.visitedViews] )
      } )
    },
    DEL_ALL_VIEWS() {
      return new Promise( resolve => {
        this.DEL_ALL_VISITED_VIEWS()
        this.DEL_ALL_CACHED_VIEWS()
        resolve( {
          visitedViews : [...this.visitedViews],
          cachedViews : [...this.cachedViews]
        } )
      } )
    },

    ADD_VISITED_VIEW( view : AppRouteRecordRaw ) {
      if ( this.visitedViews.some( ( v : AppRouteRecordRaw ) => v.path === view.path ) ) return
      this.visitedViews.push(
        Object.assign( {}, view, {
          title : view.meta?.title || 'no-name'
        } )
      )
    },
    ADD_CACHED_VIEW( view : AppRouteRecordRaw ) {
      if ( view.name && this.cachedViews.includes( view.name ) ) return
      if ( !view.meta?.noCache && view.name ) {
        this.cachedViews.push( view.name )
      }
    },

    DEL_VISITED_VIEW( view : AppRouteRecordRaw ) {
      for ( const [i, v] of this.visitedViews.entries() ) {
        if ( v.path === view.path ) {
          this.visitedViews.splice( i, 1 )
          break
        }
      }
    },
    DEL_CACHED_VIEW( view : AppRouteRecordRaw ) {
      const index = view.name ? this.cachedViews.indexOf( view.name ) : -1
      index > -1 && this.cachedViews.splice( index, 1 )
    },

    DEL_OTHERS_VISITED_VIEWS( view : AppRouteRecordRaw ) {
      this.visitedViews = this.visitedViews.filter( v => {
        return v.meta?.affix || v.path === view.path
      } )
    },
    DEL_OTHERS_CACHED_VIEWS( view : AppRouteRecordRaw ) {
      const index = view.name ? this.cachedViews.indexOf( view.name ) : -1
      if ( index > -1 ) {
        this.cachedViews = this.cachedViews.slice( index, index + 1 )
      } else {
        this.cachedViews = []
      }
    },

    DEL_ALL_VISITED_VIEWS() {
      const affixTags = this.visitedViews.filter( tag => tag.meta?.affix )
      this.visitedViews = affixTags
    },
    DEL_ALL_CACHED_VIEWS() {
      this.cachedViews = []
    },

    UPDATE_VISITED_VIEW( view : AppRouteRecordRaw ) {
      for ( let v of this.visitedViews ) {
        if ( v.path === view.path ) {
          v = Object.assign( v, view )
          break
        }
      }
    },
    CURRENT_CLOSE( name? : string ) {
      this.currentClose = name || ''
    }
  }
} )
export default useTagsViewStore
