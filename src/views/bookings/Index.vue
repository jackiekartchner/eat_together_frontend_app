<template>
  <div class="container">
    <h1>All Bookings</h1>
    <div v-for="booking in bookings">
      <h3>Restaurant Name: {{ booking.restaurant.name }}</h3>
      <img v-bind:src="booking.restaurant.image_url" alt="" />
      <p>Reservation Date: {{ relativeDate(booking.appointment) }}</p>
      <p>Reservation Time: {{ relativeTime(booking.appointment) }}</p>
      <p>Last Updated {{ updatedDate(booking.updated_at) }}</p>
      <router-link v-bind:to="`/bookings/${booking.id}`">
        <button class="btn btn-warning">Booking and Restaurant Details</button>
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
      bookings: []
    };
  },
  created: function() {
    axios.get("/api/bookings").then(response => {
      this.bookings = response.data;
      console.log(response.data);
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
