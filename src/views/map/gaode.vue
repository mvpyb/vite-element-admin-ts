<template>
  <yu-layout title="高德地图">
    <template #head>
      <el-link
        type="primary"
        href="https://lbs.amap.com/api/jsapi-v2/guide/overlays/vector-overlay"
        target="_blank"
        :underline="false"
        >高德开放平台</el-link
      >
    </template>
    <template #body>
      <div class="section-container">
        <div id="container" ref="container"></div>
      </div>
    </template>
  </yu-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
import YuLayout from '@/components/YuLayout'

const container = ref<HTMLElement | null>()
const ak = '5dc1bd09758a3d8eaafa4a8e5800e29c'
const options = {
  key : ak,
  version : '2.0',
  plugins : ['AMap.MarkerCluster'],
  AMapUI : {
    version : '1.1',
    plugins : []
  },
  Loca : {
    version : '2.0.0'
  }
}
const addMark = async( map: any, AMap: any ): Promise<void> => {
  const marker = new AMap.Marker( {
    position : new AMap.LngLat( 116.39, 39.9 ),
    title : '北京'
  } )
  map.add( marker )
}

// 添加自定义标记
const customMark = async( map: any, AMap: any ): Promise<void> => {
  const marker = new AMap.Marker( {
    position : new AMap.LngLat( 116.39, 39.9 ),
    offset : new AMap.Pixel( -10, -10 ),
    icon : '//vdata.amap.com/icons/b18/1/2.png',
    title : '北京'
  } )
  map.add( marker )
}

onMounted( () => {
  AMapLoader.load( options )
    .then( async AMap => {
      const map = new AMap.Map( container.value as HTMLElement, {
        zoom : 12,
        center : [116.397428, 39.90923],
        pitch : 0,
        viewMode : '3D'
      } )

      await addMark( map, AMap )
      await customMark( map, AMap )
    } )
    .catch( e => {
      console.log( e )
    } )
} )
</script>

<style lang="scss" scoped>
.info {
  height: 30px;
  line-height: 30px;
}
#container {
  width: 100vw;
  height: calc(100vh - 120px);
}
</style>
