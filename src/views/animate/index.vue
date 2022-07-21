<template>
  <div class="animate-section">
    <el-divider content-position="left">mo.js </el-divider>
    <span> See More : https://mojs.github.io/tutorials/getting-started.html#setup-mo-js-in-your-project </span>
    <span> See More : https://blog.csdn.net/qq_22841387/article/details/122930324 </span>

    <el-button type="primary" size="default" @click="startMo"> start </el-button>
    <div ref="heart" class="heart" />
    <div ref="logo" class="logo" />

    <div id="js-black-bg" class="background black-background" />
    <div id="js-green-bg" class="background green-background" />
    <div id="js-pink-bg" class="background pink-background">
      <div id="js-logo" class="pink-background__logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MoJs from '@mojs/core'

defineOptions( {
  name : 'Animate'
} )

const heart = ref( null )
const logo = ref( null )

let burst

onMounted( () => {
  burst = new MoJs.Burst( {
    // 爆炸范围
    radius : { 0 : 50 },
    // 动画挂载父元素，默认改在到body上
    parent : heart.value,
    // 动画延时函数
    easing : MoJs.easing.bezier( 0.1, 1, 0.3, 1 ),
    // 动画延时时间
    duration : 1500,
    // 动画等待时间
    delay : 300,
    // 扩散的粒子配置
    children : {
      duration : 750,
      // 随机数范围爆炸
      radius : { 0 : 'rand(5,25)' },
      shape : ['circle', 'rect', 'polygon'],
      // 粒子可选色
      fill : [
        '#1abc9c',
        '#2ecc71',
        '#00cec9',
        '#3498db',
        '#9b59b6',
        '#fdcb6e',
        '#f1c40f',
        '#e67e22',
        '#e74c3c',
        '#e84393'
      ],
      degreeShift : 'rand(-90, 90)',
      delay : 'stagger(0, 40)'
    },
    // 透明度
    opacity : 0.6,
    // 生成粒子数量
    count : 10
  } )
} )

const startMo = () => {
  new MoJs.Timeline().add( burst ).play()
}
</script>

<style lang="scss" scoped>
.animate-section {
  position: relative;
  width: 100%;
  height: 500px;
}
.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 25px;
  width: 120px;
  z-index: 2;
  margin-left: -60px;
  margin-top: -32px;
  transform-origin: 50% 0;
}
</style>
