<template>
  <div id="app">
    <Hello backgroundColor="green" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Hello.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Hello,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
