<template>
  <div class="bookings-show">
    <h2>Booking Details</h2>
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
    <p>
      <b>Name of Partner: {{ booking.user1.full_name }}</b>
    </p>
    <p><b>Partner Contact Info:</b></p>
    <p>Phone Number: {{ booking.user1.phone_number }}</p>
    <p>Email: {{ booking.user1.email }}</p>
    <p>You: {{ booking.user2.full_name }}</p>
    <router-link v-bind:to="`/bookings`">
      <button class="btn btn-warning">All Bookings</button>
    </router-link>
  </div>
</template>

<style></style>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      booking: {}
    };
  },
  created: function() {
    axios.get("/api/bookings/" + this.$route.params.id).then(response => {
      this.booking = response.data;
      console.log(this.booking);
    });
  },
  methods: {}
};
</script>
