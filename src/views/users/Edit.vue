<template>
  <div class="users-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          <New>Edit Profile</New>
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="string" class="form-control" v-model="user.full_name" />
        </div>
        <div class="form-group">
          <label>Bio:</label>
          <input type="text" class="form-control" v-model="user.bio" />
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="string" class="form-control" v-model="user.phone_number" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="string" class="form-control" v-model="user.email" />
        </div>
        <div class="form-group">
          <label>Zip Code:</label>
          <input type="string" class="form-control" v-model="user.zip_code" />
        </div>
        <input type="submit" class="btn btn-primary" value="Edit" />
      </form>
    </div>
    <div>
      <button class="btn btn-danger" v-on:click="destroyUser()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },

  created: function() {
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },

  methods: {
    submit: function() {
      var params = {
        full_name: this.user.full_name,
        bio: this.user.bio,
        phone_number: this.user.phone_number,
        email: this.user.email,
        zip_code: this.user.zip_code
      };
      axios
        .patch("/api/users/" + this.user.id, params)
        .then(response => {
          this.$router.push("/users/me");
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    destroyUser: function() {
      axios.delete("/api/users/" + this.user.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/users/me");
      });
    }
  }
};
</script>
