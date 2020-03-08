<template>
  <div class="body">
    <nav class="navbar bg-light navbar-light">
      <ul>
        <router-link to="/" class="navbar-brand">#Scam Register</router-link>
      </ul>
      <ul class="ml-auto">
        <router-link to="/settings" class="mr-3 text-bold">Settings</router-link>
        <a href="#">Logout</a>
      </ul>
    </nav>
  </div>


</template>

<script>
export default {
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    logout:function(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-light{
background: #fff;
max-height: 60px;
}
.body{
  margin:0px;
}
a {
  color: #000;
}
.no-border{
  border-radius: 0px;
}
</style>
