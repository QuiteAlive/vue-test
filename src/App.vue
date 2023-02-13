<template>
  <div>
    <el-date-picker v-model="value" type="week" format="YYYY 第 ww 周" placeholder="请选择申请周" style="width: 100%" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
let value = ref('')
</script>

<style scoped></style>
