<template>
  <div class="cravings-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>Edit Craving</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Cuisine Type:</label>
          <input type="string" class="form-control" v-model="craving.category" />
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input type="text" class="form-control" v-model="craving.price" />
        </div>
        <div class="form-group">
          <label>Travel Distance (in miles):</label>
          <input type="string" class="form-control" v-model="craving.radius" />
        </div>
        <div class="form-group">
          <label>Availability:</label>
          <input type="string" class="form-control" v-model="craving.appointment" />
        </div>
        <input type="submit" class="btn btn-primary" value="Edit" />
      </form>
    </div>
    <div>
      <button class="btn btn-danger" v-on:click="destroyCraving()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      craving: {},
      errors: []
    };
  },

  created: function() {
    axios.get("/api/cravings/" + this.$route.params.id).then(response => {
      this.craving = response.data;
      console.log(this.craving);
    });
  },

  methods: {
    submit: function() {
      var params = {
        category: this.craving.category,
        price: this.craving.price,
        radius: this.craving.radius,
        appointment: this.craving.appointment
      };
      axios
        .patch("/api/cravings/" + this.craving.id, params)
        .then(response => {
          this.$router.push("/cravings");
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    destroyCraving: function() {
      axios.delete("/api/cravings/" + this.craving.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/cravings");
      });
    }
  }
};
</script>
