<template>
  <!-- <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()"> -->

      <section id="banner">
        <div class="container">
        <!-- Sign Up Form
                ================================================= -->
        <div class="sign-up-form">
          <h2 class="text-white">Eat Together App</h2>
          <div class="line-divider"></div>
          <div class="form-wrapper">
            <p class="signup-text">Signup now and satisfy your food cravings with others around you!</p>
            <form action="#">
              <fieldset class="form-group">
                <input type="text" class="form-control" id="name" v-model="fullName" placeholder="Enter full name" />
              </fieldset>
              <fieldset class="form-group">
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email" />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="string"
                  class="form-control"
                  id="phone-number"
                  v-model="phoneNumber"
                  placeholder="Enter phone number"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="string"
                  class="form-control"
                  id="zip-code"
                  v-model="zipCode"
                  placeholder="Enter your zip code"
                />
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" id="bio" v-model="bio" placeholder="Enter a bio" />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  placeholder="Enter a password"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="password-confirmation"
                  v-model="passwordConfirmation"
                  placeholder="Please confirm your password"
                />
              </fieldset>
            </form>
            <p>By signning up you agree to the terms and conditions.</p>
            <button class="btn-secondary">Signup</button>
          </div>
          <a href="/login">Already have an account?</a>
          <img class="form-shadow" src="images/bottom-shadow.png" alt="" />
        </div>
        <!-- Sign Up Form End -->
                <svg class="arrows hidden-xs hidden-sm">
                  <path class="a1" d="M0 0 L30 32 L60 0"></path>
                  <path class="a2" d="M0 20 L30 52 L60 20"></path>
                  <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </section>
      </form>
      <!--   <h1>Signup</h1>
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
        <input type="submit" class="btn btn-primary" value="Submit" /> -->
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
