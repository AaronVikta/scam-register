<template>
  <div class="container-fluid">
    <Navigation/>
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center">Welcome to Scam Register</h3>
        <p class="text-center text-gray min-size">Sign in to submit reports, view proof and more</p>
      </div>
      <div class="col-md-3">

      </div>
      <div class="col-md-6">
        <form v-on:submit.prevent>
          <div class="row">
            <div class="col">
              <h3 class="text-center card-header form-control mb-0">Login</h3>

            </div>
          </div>
          <div class="row">
            <div class="col">
              <input type="text" name="" v-model="email " class="form-control rounded-0 mt-2" placeholder="Email">
            </div>
          </div>

          <div class="row">
            <div class="col">
              <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="Password" v-model="password">
            </div>
          </div>

          <div class="row">
            <div class="col">
              <input type="submit" name="" data-dismiss="modal" class="form-control rounded-0 input-text text-center" value="Login">
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col mt-2">
            <p class="text-center min-size">Don't Have an Account? <router-link to="/register">Register</router-link></p>
          </div>
          <div class="col mt-2">
            <router-link to="/reset">Reset Password</router-link>
          </div>
        </div>
      </div>

      <div class="col-md-3">

      </div>

    </div>
  </div>
</template>

<script>
import Navigation from './../components/Navigation.vue'
export default {
  components:{
    Navigation

  }
}
</script>

<style lang="css" scoped>
</style>
