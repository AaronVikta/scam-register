<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg container-fluid">
      <ul>
        <a href="#" class="navbar-brand">#Scam Register</a>
      </ul>
      <ul class="ml-auto">
        <a href="#" class="mr-4 text-bold min-size" ><bold>SUBMIT A REPORT</bold></a>
        <a class="mr-2" href="#" data-target="#signin" data-toggle="modal">Sign in</a>/
        <a href="#" data-target="#register" data-toggle="modal">Register</a>
      </ul>
    </nav>

    <!-- Register Modal -->
    <div class="modal fade no-border" id="register" tabindex="-1" role="dialog" aria-labelledby="register" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered no-border" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="col-md-12">
              <h5 class="modal-title w-100 text-center " id="">Welcome to Scam Register</h5>
              <p class="text-center text-gray min-size">Sign up tp submit reports, view proof and more</p>
            </div>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control rounded-0" placeholder="First name">
                </div>
                <div class="col">
                  <input type="text" class="form-control rounded-0" placeholder="Last name">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="Email">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="Phone">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="National Identity Number">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="Password">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="Confirm Password">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="submit" name="" data-dismiss="modal" class="form-control rounded-0 mt-2 w-100 input-text text-center" value="Register">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer mt-3 ">
            <span class="text-center w-100">Already have an Account</span> <span class="text-center w-100"><a href="#">Login</a> </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Sign in modal -->
    <div class="modal fade no-border" id="signin" tabindex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered no-border" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="col-md-12">
              <h5 class="modal-title w-100 text-center " id="">Welcome to Scam Register</h5>
              <p class="text-center text-gray min-size">Sign in to submit reports, view proof and more</p>
            </div>
          </div>
          <div class="modal-body">
            <form>

              <div class="row">
                <div class="col">
                  <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="Email">
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <input type="text" name="" class="form-control rounded-0 mt-2" placeholder="Password">
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <input type="submit" name="" data-dismiss="modal" class="form-control rounded-0 mt-2 w-100 input-text text-center" value="Login">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer mt-3 ">
            <span class="text-center w-100">Don't have an Account</span> <span class="text-center w-100"><a href="#">Register</a> </span>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
export default {

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
