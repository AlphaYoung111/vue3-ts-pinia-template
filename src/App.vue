<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="out">
    <div class="inner">123</div>
  </div>

  <router-link to="/login">login</router-link>
  <router-link to="/main">main</router-link>
  <router-view />

  <div>age:{{ age }}</div>
  <button @click="userStore.addAge">+1</button>
  <el-button type="primary">ele 按钮</el-button>

  <el-form ref="formRef"></el-form>
  <el-form ref="formResolveRef"></el-form>
</template>
<script setup lang="ts">
import useUserStore from '@/store/module/user/user'
import { storeToRefs } from 'pinia'
import { GlobalComponents } from 'vue'

const userStore = useUserStore()
const { age } = storeToRefs(userStore)

const formRef = ref<InstanceType<GlobalComponents['ElForm']>>()
// const formResolveRef = ref<ElComponet['ElForm']>()
// formResolveRef.value.
console.log(import.meta.env.VITE_STR)
</script>
<style lang="scss">
.out {
  .inner {
    color: red;
    font-size: 15px;
  }
}
</style>
