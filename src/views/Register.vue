<template>
  <div class="container-fluid">
    <Navigation/>


    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center mt-4">Welcome to Scam Register</h2>
        <p class="text-center text-gray">Register to submit reports, view proof and more</p>
      </div>
      <div class="col-md-3">

      </div>
      <div class="col-md-6">
        <div class="card-body">

          <form v-on:submit.prevent>
            <div class="row">
              <div class="col">
                <h3 class="text-center card-header form-control mb-2">Register</h3>

              </div>
            </div>
            <div class="col">
              <p class="text-danger">{{error}}</p>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" v-model="firstname" class="form-control rounded-0" placeholder="First name">
              </div>
              <div class="col">
                <input type="text" v-model="lastname" class="form-control rounded-0" placeholder="Last name">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" name="" v-model="email" class="form-control rounded-0 mt-2" placeholder="Email">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" name="" v-model="phone" class="form-control rounded-0 mt-2" placeholder="Phone">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" name="" v-model="nin" class="form-control rounded-0 mt-2" placeholder="National Identity Number">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" name="" class="form-control rounded-0 mt-2" v-model="password" placeholder="Password">
              </div>
            </div>
            <div class="row">
              <div class="col mb-2">
                <input type="text" name="" v-model="confirmpassword" class="form-control rounded-0 mt-2" placeholder="Confirm Password">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="submit"
                name="" class="form-control rounded-0
                 input-text text-center" value="Register" @click="register()">
              </div>
            </div>
          </form>
          <div class="col mt-2">
            <p class="text-center min-size">Already Have an Account? <router-link to="/login">Login</router-link></p>
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

  },
  data(){
    return {
      email:'',
      password:'',
      confirmpassword:'',
      firstname:'',
      lastname:'',
      phone:'',
      nin:'',
      error:''
    }
  },
  computed:{

  },
  methods:{
    register(){
        let data={
          firstname:this.firstname,
          lastname:this.lastname,
          email:this.email,
          password:this.password,
          confirmpassword:this.confirmpassword,
          phone:this.phone,
          nin:this.nin
        }
        this.$http.post('http://localhost:8081/register',{
          data
        })
        .then(()=>this.$router.push('/'))
        .catch(err=>console.log(err))
    }
  }
}
</script>

<style lang="css" scoped>
.bordered{
  border: 1px solid #eff347;
}
</style>
