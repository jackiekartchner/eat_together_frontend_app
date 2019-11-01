<template>
  <div class="users-show">
    <h2>Profile Page</h2>
    <h3>Name: {{ user.full_name }}</h3>
    <p>Bio: {{ user.bio }}</p>
    <p>Phone Number: {{ user.phone_number }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Zip Code: {{ user.zip_code }}</p>
    <router-link v-bind:to="`/users/${user.id}/edit`">
      <button class="btn btn-warning">Edit Profile</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
    });
  },
  methods: {}
};
</script>
