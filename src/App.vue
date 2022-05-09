<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    background:linear-gradient(to right,#141E30,#243B55);
    background-size: 100% 100%;
    color: #fff;
  }
  #app {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>
