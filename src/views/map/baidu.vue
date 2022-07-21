<template>
  <yu-layout title="百度地图">
    <template #head>
      百度地图的简单使用，最新版GL地图命名空间为BMapGL, 可按住鼠标右键控制地图旋转、修改倾斜角度。
      <el-link
        type="primary"
        href="https://lbsyun.baidu.com/index.php?title=jspopularGL"
        target="_blank"
        :underline="false"
        >点我查看更多</el-link
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
import { ref, onMounted, nextTick } from 'vue'
import { baiduMap } from './utils'
import YuLayout from '/@/components/YuLayout'

const container = ref<HTMLElement | null>()
const ak = 'ov7zC5g8Ac0ScLPp1zG8TZDuiGfty9Hh'

onMounted( () => {
  nextTick( () => {
    baiduMap( ak )
      .then( () => {
        // eslint-disable-next-line no-undef
        // @ts-ignore
        const map = new BMap.Map( container.value as HTMLElement )

        // eslint-disable-next-line no-undef
        // @ts-ignore
        map.centerAndZoom( new BMap.Point( 116.404, 39.915 ), 11 )

        map.addControl(
          // eslint-disable-next-line no-undef
          // @ts-ignore
          new BMap.MapTypeControl( {
            // eslint-disable-next-line no-undef
            // @ts-ignore
            mapTypes : [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
          } )
        )

        map.setCurrentCity( '北京' )
        map.enableScrollWheelZoom( true )
      } )
      .catch( err => {
        console.log( 'err', err )
      } )
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
