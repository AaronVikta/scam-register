<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg container-fluid">
      <ul>
        <router-link to="/" class="navbar-brand">#Scam Register</router-link>
      </ul>
      <ul class="ml-auto">
        <router-link to="/dashboard" class="mr-4 text-bold min-size">SUBMIT A REPORT</router-link>
        <router-link class="mr-2" to="/register">Register</router-link>
        <router-link to="/login"> Sign in</router-link>
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

a {
  color: #000;
}
.no-border{
  border-radius: 0px;
}
</style>
