<template>
  <div class="container-fluid">
  <Navigation/>
    <div class="row">
      <div class="col-md-12">
        <h1 class="mt-2">{{ msg }}</h1>
      </div>
      <div class="col-md-3">

      </div>
      <div class="col-md-6">
        <form class="form">
          <div class="">
          <label for="searchbox"></label>
          <div class="input-group">
            <input type="text" name="" class="form-control no-border" value="">
            <div class="input-group-prepend">
              <span class="input-group-text no-border" id="searchbox">Search</span>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div class="col-md-3">

      </div>
      <div class="col-md-12">
        <div class="row">
          <div class="col-3">

          </div>
          <div class="col-md-6 mt-3">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Bank</th>
                  <th scope="col">Account Name</th>
                  <th scope="col">Account Number</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-3">

          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Navigation from './../components/Navigation.vue';

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components:{
  Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #000;
}
</style>
