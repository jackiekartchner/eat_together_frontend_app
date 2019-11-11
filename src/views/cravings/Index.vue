<template>
  <div class="container">
    <h1>All Cravings</h1>
    <router-link v-bind:to="`/cravings/new`">
      <button class="btn btn-warning">New Craving</button>
    </router-link>
    <div v-for="craving in cravings">
      <h3>Cuisine Type: {{ craving.category }}</h3>
      <p>Price: {{ craving.price }}</p>
      <p>Available Date: {{ relativeDate(craving.appointment) }}</p>
      <p>Available Time: {{ relativeTime(craving.appointment) }}</p>
      <p>Last Updated {{ updatedDate(craving.updated_at) }}</p>
      <div>
        <button class="btn btn-danger" v-on:click="destroyCraving()">Destroy</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      cravings: []
    };
  },
  created: function() {
    axios.get("/api/cravings").then(response => {
      this.cravings = response.data;
      console.log(this.cravings);
    });
    console.log(moment("2019-11-12T13:00:00.000Z").format());
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    relativeTime: function(time) {
      return moment(time).format("h:mm a");
    },
    updatedDate: function(date) {
      return moment(date).fromNow();
    },
    destroyCraving: function() {
      axios.delete("/api/cravings/" + this.cravings.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/cravings");
      });
    }
  }
};
</script>
