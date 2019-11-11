<template>
  <div class="cravings-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          New Craving
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Cuisine Type:</label>
          {{ category }}
          <select v-model="category">
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
        <div class="form-group">
          <label>Price:</label>
          <input type="radio" class="form-control" value="$" v-model="price" />
          <label>
            <b>$</b>
            (under $10)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$" v-model="price" />
          <label>
            <b>$$</b>
            ($11-$30)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$$" v-model="price" />
          <label>
            <b>$$$</b>
            ($31-$60)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$$$" v-model="price" />
          <label>
            <b>$$$$</b>
            ($61+)
          </label>
        </div>
        <div class="form-group">
          <label>Available Date and Time:</label>
          <input type="datetime-local" class="form-control" v-model="appointment" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

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
