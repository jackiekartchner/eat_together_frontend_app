<template>
  <div class="cravings-new">
    <div class="container">
      <div class="tab-content">
        <div class="tab-pane active" id="register">
          <h3>Make a Craving</h3>
          <p class="text-muted">What are you in the mood for?</p>

          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>

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
                <input type="radio" name="optradio" checked />
                $ (under $10)
              </label>
              <br />
              <label class="radio-inline">
                <input type="radio" name="optradio" checked />
                $$ ($11-$30)
              </label>
              <br />
              <label class="radio-inline">
                <input type="radio" name="optradio" checked />
                $$$ ($31-$60)
              </label>
              <br />
              <label class="radio-inline">
                <input type="radio" name="optradio" checked />
                $$$$ ($61+)
              </label>
            </div>
            <div class="form-group col-xs-6 pb-20">
              <p class="text-muted">Available Date and Time:</p>
              <input type="datetime-local" class="form-control" v-model="appointment" />
            </div>
          </form>
          <div class="form-group col-xs-12 pb-20">
            <input type="submit" class="btn btn-primary" value="Submit" />
          </div>
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
