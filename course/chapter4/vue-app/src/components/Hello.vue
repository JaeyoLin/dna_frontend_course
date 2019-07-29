<template>
  <div class="helloCSS" v-bind:style="style">
    Hello
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    backgroundColor: String
  },
  computed: {
    style () {
      return 'background-color: ' + this.backgroundColor;
    }
  },
}
</script>

<style scoped>
.helloCSS{
  width: 200px;
  height: 50px; 
  line-height: 50px;
  font-size: 50px;
  border-radius: 10px;
  color: black;
}
</style>