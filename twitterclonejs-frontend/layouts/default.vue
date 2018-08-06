<template>
  <div>
    <MainHeader/>
    <nuxt/>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'

export default {
  components: {
    MainHeader
  }
}
</script>

<style>
html {
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
