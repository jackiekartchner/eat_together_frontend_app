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
      <router-link v-bind:to="`/cravings/${craving.id}/edit`">
        <button class="btn btn-warning">Edit Craving</button>
      </router-link>
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
    });
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
    }
  }
};
</script>
