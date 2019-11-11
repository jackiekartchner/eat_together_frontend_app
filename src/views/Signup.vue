<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
                <!-- Sign Up Form
                ================================================= -->
                <div class="sign-up-form">
                  <a href="index.html" class="logo"><img src="images/logo.png" alt="Eat Together App"/></a>
                  <h2 class="text-white">Find My Friends</h2>
                  <div class="line-divider"></div>
                  <div class="form-wrapper">
                    <p class="signup-text">Signup now and meet awesome people around the world</p>
                    <form action="#">
                      <fieldset class="form-group">
                        <input type="text" class="form-control" id="example-name" placeholder="Enter name">
                      </fieldset>
                      <fieldset class="form-group">
                        <input type="email" class="form-control" id="example-email" placeholder="Enter email">
                      </fieldset>
                      <fieldset class="form-group">
                        <input type="password" class="form-control" id="example-password" placeholder="Enter a password">
                      </fieldset>
                    </form>
                    <p>By signning up you agree to the terms</p>
                    <button class="btn-secondary">Signup</button>
                  </div>
                  <a href="#">Already have an account?</a>
                  <img class="form-shadow" src="images/bottom-shadow.png" alt="" />
                </div><!-- Sign Up Form End -->
                </form>

                <svg class="arrows hidden-xs hidden-sm">
                  <path class="a1" d="M0 0 L30 32 L60 0"></path>
                  <path class="a2" d="M0 20 L30 52 L60 20"></path>
                  <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </section>
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
