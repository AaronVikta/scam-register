<template>
  <div class="body">
    <Navigation/>

  </div>
</template>

<script>
import Navigation from './../components/AuthNav.vue';

export default {
  name:'dashboard',
  components:{
    Navigation
  }
}
</script>

<style lang="css" scoped>
.body{
  width: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
