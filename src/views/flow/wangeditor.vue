<template>
  <YuLayout title="LogicFlow">
    <template #head>
      富文本 wangeditor
      <el-link
        type="primary"
        href="https://www.wangeditor.com/v5/getting-started.html"
        target="_blank"
        :underline="false"
        >点我查看更多</el-link
      >
    </template>
    <template #body>
      <div class="app-container">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                :mode="mode"
              />
              <Editor
                style="height: 500px; overflow-y: hidden"
                v-model="valueHtml"
                :defaultConfig="editorConfig"
                :mode="mode"
                @onCreated="handleCreated"
              />
            </div>
          </template>
          <div id="vditor" />
        </el-card>
      </div>
    </template>
  </YuLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, shallowRef, onBeforeUnmount } from 'vue'
import YuLayout from '/@/components/YuLayout'
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IDomEditor } from '@wangeditor/editor'

const editorRef = shallowRef()

const mode = 'simple' // simple | default

// 初始内容 HTML
const valueHtml = ref<string>( '<p>我乃万人迷石榴姐</p>' )

// 模拟 ajax 异步获取内容
onMounted( () => {
  setTimeout( () => {
    valueHtml.value = '<p>我乃华府小书童：华安</p>'
  }, 1500 )
} )

const toolbarConfig = {}
const editorConfig = { placeholder : '9527，你就没什么想对秋香说的吗？' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount( () => {
  const editor = editorRef.value
  if ( editor == null ) return
  editor.destroy()
} )

const handleCreated = ( editor: IDomEditor ) => {
  editorRef.value = editor
}

defineOptions( {
  name : 'Wangeditor'
} )
</script>
