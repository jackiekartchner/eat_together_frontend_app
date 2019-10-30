<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Full Name:</label>
          <input type="string" class="form-control" v-model="fullName" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="string" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="string" class="form-control" v-model="phoneNumber" />
        </div>
        <div class="form-group">
          <label>Zip Code:</label>
          <input type="string" class="form-control" v-model="zipCode" />
        </div>
        <div class="form-group">
          <label>Bio:</label>
          <input type="string" class="form-control" v-model="bio" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" />
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
      fullName: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
      bio: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        full_name: this.fullName,
        email: this.email,
        phone_number: this.phoneNumber,
        zip_code: this.zipCode,
        bio: this.bio,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
