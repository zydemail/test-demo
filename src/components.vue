<template>
    <Link
      theme="success"
      target="_blank"
      :href="href"
      size="medium"
      :style="{ fontSize: '16px' }"
    >
      <slot></slot>
    </Link>
  </template>
  
  <script setup lang="ts">
  import { Link } from 'tdesign-vue-next';

  const props = defineProps({
  // 页面展示数据，包含头像，角色， 内容
  href: {
    type: String,
        required: true
  },
})
  </script>
  
  <style scoped>
  /* 可以在这里添加组件特定的样式 */
  </style>
  