<template>
  <div class="bookings-show">
    <h2>Booking Details</h2>
    <p>Reservation Date: {{ relativeDate(booking.appointment) }}</p>
    <p>Reservation Time: {{ relativeTime(booking.appointment) }}</p>
    <p>Restaurant Name: {{ booking.restaurant.name }}</p>
    <img v-bind:src="booking.restaurant.image_url" alt="" />
    <p><b>Restaurant Info:</b></p>
    <p>Address: {{ booking.restaurant.display_address }}</p>
    <p>Phone Number: {{ booking.restaurant.display_phone }}</p>
    Restaurant Yelp Site:
    <a v-bind:href="booking.restaurant.url">{{ booking.restaurant.name }}</a>
    <p>Price: {{ booking.restaurant.price }}</p>
    <p>Category: {{ booking.restaurant.categories }}</p>
    <p v-if="currentUser()">
      <b>Name of Partner: {{ booking.user1.full_name }}</b>
    </p>
    <p v-if="!currentUser()">
      <b>Name of Partner: {{ booking.user2.full_name }}</b>
    </p>
    <p><b>Partner Contact Info:</b></p>
    <p>Phone Number: {{ booking.user1.phone_number }}</p>
    <p>Email: {{ booking.user1.email }}</p>
    <router-link v-bind:to="`/bookings`">
      <button class="btn btn-warning">All Bookings</button>
    </router-link>
  </div>
</template>

<style></style>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      booking: {},
      user_id: localStorage.getItem("current_user.id")
    };
  },
  created: function() {
    axios.get("/api/bookings/" + this.$route.params.id).then(response => {
      this.booking = response.data;
      console.log(this.booking);
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    relativeTime: function(time) {
      return moment(time).format("h:mm a");
    },
    currentUser: function() {
      if (this.user_id == this.booking.user1_id) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
