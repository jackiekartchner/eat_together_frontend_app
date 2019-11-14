<template>
  <div class="users-show">
      <div class="container">
        <h1>Make a Craving</h1>
        <p class="text-muted">What are you in the mood for?</p>
        <div class="timeline">
          <div class="timeline-cover">
            <!--Timeline Menu for Large Screens-->
            <div class="timeline-nav-bar hidden-sm hidden-xs">
              <div class="row">
                <div class="col-md-3">
                  <div class="profile-info">
                    <img src="/images/eric.png" alt="" class="img-responsive profile-photo" />
                    <h3></h3>
                    <p class="text-muted"></p>
                  </div>
                </div>
                <div class="col-md-9">
                  <ul class="list-inline profile-menu">
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href="" class="active"></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!--Timeline Menu for Large Screens End-->

            <!--Timeline Menu for Small Screens-->
            <div class="navbar-mobile hidden-lg hidden-md">
              <div class="profile-info">
                <img src="/images/eric.png" alt="" class="img-responsive profile-photo" />
                <h4></h4>
                <p class="text-muted"></p>
              </div>
              <div class="mobile-menu">
                <ul class="list-inline">
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href="" class="active"></a></li>
                </ul>
              </div>
            </div>
            <!--Timeline Menu for Small Screens End-->
          </div>
        </br>
      </br>
          <!--Register Form-->
          <form v-on:submit.prevent="submit()" id="registration_form" class="form-inline">
            <div class="form-group col-xs-6 pb-20">
              <p class="text-muted">Category:</p>
              <label for="category" class="sr-only">Category</label>
              <select class="form-control" id="category" v-model="category">
                <option value="American" class="form-control">American</option>
                <option value="British" class="form-control">British</option>
                <option value="Cajun" class="form-control">Cajun</option>
                <option value="Caribbean" class="form-control">Caribbean</option>
                <option value="Chinese" class="form-control">Chinese</option>
                <option value="French" class="form-control">French</option>
                <option value="German" class="form-control">German</option>
                <option value="Greek" class="form-control">Greek</option>
                <option value="Indian" class="form-control">Indian</option>
                <option value="Italian" class="form-control">Italian</option>
                <option value="Japanese" class="form-control">Japanese</option>
                <option value="Korean" class="form-control">Korean</option>
                <option value="Mediterranean" class="form-control">Mediterranean</option>
                <option value="Mexican" class="form-control">Mexican</option>
                <option value="American" class="form-control">American</option>
                <option value="Soul Food" class="form-control">Soul Food</option>
                <option value="Spanish" class="form-control">Spanish</option>
                <option value="Thai" class="form-control">Thai</option>
                <option value="Turkish" class="form-control">Turkish</option>
                <option value="Vietnamese" class="form-control">Vietnamese</option>
                <option value="Other" class="form-control">Other</option>
              </select>
            </div>

            <div class="form-group col-xs-12 pb-20">
              <p class="text-muted">Price:</p>

              <label class="radio-inline">
                <input type="radio" name="optradio" value = "$" v-model="price" checked />
                $ (under $10)
              </label>
              <br />
              <label class="radio-inline">
                <input type="radio" name="optradio" value = "$$" v-model="price" checked />
                $$ ($11-$30)
              </label>
              <br />
              <label class="radio-inline">
                <input type="radio" name="optradio" value = "$$$" v-model="price" checked />
                $$$ ($31-$60)
              </label>
              <br />
              <label class="radio-inline">
                <input type="radio" name="optradio" value = "$$$$" v-model="price" checked />
                $$$$ ($61+)
              </label>
            </div>
            <div class="form-group col-xs-6 pb-20">
              <p class="text-muted">Available Date and Time:</p>
              <input type="datetime-local" class="form-control" v-model="appointment" />
            </div>
            <div class="form-group col-xs-12 pb-20">
              <input type="submit" class="btn btn-primary" value="Submit" />
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pb-20 {
  padding-bottom: 20px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: "",
      price: "",
      appointment: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        category: this.category,
        price: this.price,
        appointment: this.appointment
      };
      axios
        .post("/api/cravings", params)
        .then(response => {
          this.$router.push("/cravings");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
