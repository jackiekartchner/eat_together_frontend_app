<template>
  <div class="cravings-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>New Craving</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Cuisine Type:</label>
          <input type="string" class="form-control" v-model="category" />
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input type="text" class="form-control" v-model="price" />
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
