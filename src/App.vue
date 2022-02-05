<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="out">
    <div class="inner">123</div>
  </div>

  <router-link to="/login">login</router-link>
  <router-link to="/main">main</router-link>
  <router-view />
</template>
<script setup lang="ts"></script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.out {
  .inner {
    color: red;
    font-size: 15px;
  }
}
</style>
