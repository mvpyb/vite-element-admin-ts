<template>
  <div :id="props.id" :class="props.className" :style="{ height: props.height, width: props.width }" />
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-gl'
import { onMounted, onBeforeUnmount, shallowRef, ShallowRef } from 'vue'
import npmdep from '/@/assets/charts/npmdep.json'

type ECharts = echarts.ECharts
type EChartsOption = echarts.EChartsOption

interface nodeItem {
  name: number | string
  value: number | string
  emphasis?: any
  label?: {
    show: boolean
  }
}

const props = defineProps( {
  className : {
    type : String,
    default : 'chart'
  },
  id : {
    type : String,
    default : 'chart'
  },
  width : {
    type : String,
    default : '200px'
  },
  height : {
    type : String,
    default : '200px'
  }
} )

const chart: ShallowRef<ECharts | null> = shallowRef( null )

onMounted( () => {
  initChart()
} )

onBeforeUnmount( () => {
  if ( !chart.value ) {
    return
  }
  chart.value.dispose()
  chart.value = null
} )

const initChart = () => {
  const el: HTMLElement = document.getElementById( props.id )!
  chart.value = echarts.init( el )

  const nodes: nodeItem[] = npmdep.nodes.map( function( nodeName, idx ) {
    return {
      name : nodeName,
      value : npmdep.dependentsCount[idx]
    }
  } )

  const edges = []

  for ( let i = 0; i < npmdep.edges.length; ) {
    const s = npmdep.edges[i++]
    const t = npmdep.edges[i++]
    edges.push( {
      source : s,
      target : t
    } )
  }

  nodes.forEach( function( node ) {
    // if (node.value > 100) {
    node.emphasis = {
      label : {
        show : true
      }
    }
    // }
    if ( node.value > 5000 ) {
      node.label = {
        show : true
      }
    }
  } )

  chart.value.setOption( {
    backgroundColor : '#000',
    series : [
      {
        color : [
          'rgb(203,239,15)',
          'rgb(73,15,239)',
          'rgb(15,217,239)',
          'rgb(30,15,239)',
          'rgb(15,174,239)',
          'rgb(116,239,15)',
          'rgb(239,15,58)',
          'rgb(15,239,174)',
          'rgb(239,102,15)',
          'rgb(239,15,15)',
          'rgb(15,44,239)',
          'rgb(239,145,15)',
          'rgb(30,239,15)',
          'rgb(239,188,15)',
          'rgb(159,239,15)',
          'rgb(159,15,239)',
          'rgb(15,239,44)',
          'rgb(15,239,87)',
          'rgb(15,239,217)',
          'rgb(203,15,239)',
          'rgb(239,15,188)',
          'rgb(239,15,102)',
          'rgb(239,58,15)',
          'rgb(239,15,145)',
          'rgb(116,15,239)',
          'rgb(15,131,239)',
          'rgb(73,239,15)',
          'rgb(15,239,131)',
          'rgb(15,87,239)',
          'rgb(239,15,231)'
        ],
        type : 'graphGL',
        nodes,
        edges,
        modularity : {
          resolution : 2,
          sort : true
        },
        lineStyle : {
          color : 'rgba(255,255,255,1)',
          opacity : 0.05
        },
        itemStyle : {
          opacity : 1
          // borderColor: '#fff',
          // borderWidth: 1
        },
        focusNodeAdjacency : false,
        focusNodeAdjacencyOn : 'click',
        symbolSize : function( value ) {
          return Math.sqrt( value / 10 )
        },
        label : {
          color : '#fff'
        },
        emphasis : {
          label : {
            show : false
          },
          lineStyle : {
            opacity : 0.5,
            width : 4
          }
        },
        forceAtlas2 : {
          steps : 5,
          stopThreshold : 20,
          jitterTolerence : 10,
          edgeWeight : [0.2, 1],
          gravity : 5,
          edgeWeightInfluence : 0
          // preventOverlap: true
        }
      }
    ]
  } as EChartsOption )
}

defineOptions( {
  name : 'Lines3D'
} )
</script>

<style scoped lang="scss"></style>
