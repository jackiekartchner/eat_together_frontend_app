<template>
  <div class="signup">
    <div class="container">
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

      <!-- Features Section
          ================================================= -->
      <section id="features">
        <div class="container wrapper">
          <h1 class="section-title slideDown"></h1>
          <div class="row slideUp">
            <div class="feature-item col-md-2 col-sm-6 col-xs-6 col-md-offset-2">
              <div class="feature-icon"><i class="icon ion-person-add"></i></div>
              <h3>Make Friends</h3>
            </div>
            <div class="feature-item col-md-2 col-sm-6 col-xs-6">
              <div class="feature-icon"><i class="icon ion-images"></i></div>
              <h3>Publish Posts</h3>
            </div>
            <div class="feature-item col-md-2 col-sm-6 col-xs-6">
              <div class="feature-icon"><i class="icon ion-chatbox-working"></i></div>
              <h3>Private Chats</h3>
            </div>
            <div class="feature-item col-md-2 col-sm-6 col-xs-6">
              <div class="feature-icon"><i class="icon ion-compose"></i></div>
              <h3>Restaurant Reviews</h3>
            </div>
          </div>
          <h2 class="sub-title">find awesome people like you</h2>
          <div id="incremental-counter" data-value="101242"></div>
          <p>People Already Signed Up</p>
          <img src="images/face-map.png" alt="" class="img-responsive face-map slideUp hidden-sm hidden-xs" />
        </div>
      </section>
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
