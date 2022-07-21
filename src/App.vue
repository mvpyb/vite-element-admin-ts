<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zh from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { useAppStore } from '/@/store'

export default defineComponent( {
  name : 'App',
  components : {
    [ElConfigProvider.name] : ElConfigProvider
  },
  setup() {
    console.log()
    const appStore = useAppStore()
    const locale = computed( () => ( appStore.lang === 'zh' ? zh : en ) )
    const size = computed( () => appStore.size )
    return {
      locale,
      size
    }
  }
} )
</script>
