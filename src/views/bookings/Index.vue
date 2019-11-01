<template>
  <div class="container">
    <h1>All Bookings</h1>
    <div v-for="booking in bookings">
      <p>Appointment: {{ booking.appointment }}</p>
      <p>Restaurant: {{ booking.restaurant.name }}</p>
      <img v-bind:src="booking.restaurant.image_url" alt="" />
      <p><b>Restaurant Info:</b></p>
      <p>Address: {{ booking.restaurant.display_address }}</p>
      <p>Phone Number: {{ booking.restaurant.display_phone }}</p>
      Restaurant Yelp Site:
      <a v-bind:href="booking.restaurant.url">{{ booking.restaurant.name }}</a>
      <p>Price: {{ booking.restaurant.price }}</p>
      <p>Category: {{ booking.restaurant.categories }}</p>
      <router-link v-bind:to="`/bookings/${booking.id}`">
        <button class="btn btn-warning">Booking Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      bookings: []
    };
  },
  created: function() {
    axios.get("/api/bookings").then(response => {
      this.bookings = response.data;
      console.log(this.bookings);
    });
  },
  methods: {}
};
</script>
