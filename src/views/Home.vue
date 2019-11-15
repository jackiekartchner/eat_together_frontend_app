<template>
  <div class="home">
    <section id="banner">
      <div class="container">
        <div class="row">
          <div class="col-sm-offset-3 col-sm-6">
            <div class="intro-texts text-center">
              <h1 class="text-white">Meet foodies like you!!!</h1>
              <p>
                Eat Together app will find the perfect eating companion based on location, schedule, and preferences
                entered by the user so that they don’t have to eat alone.
                <br />
                <br />
                What are you waiting for? Sign up now!
              </p>
              <router-link class="btn btn-primary" v-if="!isLoggedIn()" to="/signup">Signup</router-link>
            </div>
          </div>
        </div>

        <svg class="arrows hidden-xs hidden-sm">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </section>
    <!-- Facts Section
          ================================================= -->
    <section id="site-facts">
      <div class="container wrapper">
        <div class="circle">
          <ul class="facts-list">
            <li>
              <div class="fact-icon"><i class="icon ion-ios-people-outline"></i></div>
              <h3 class="text-white">101,242</h3>
              <p>People registered</p>
            </li>
            <li>
              <div class="fact-icon"><i class="icon ion-images"></i></div>
              <h3 class="text-white">2101,242</h3>
              <p>Bookings Made</p>
            </li>
            <li>
              <div class="fact-icon"><i class="icon ion-checkmark-round"></i></div>
              <h3 class="text-white">41,242</h3>
              <p>People online</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="features">
      <div class="container wrapper">
        <h1 class="section-title slideDown">FOODIES UNITE</h1>
        <div class="row slideUp">
          <div class="feature-item col-md-2 col-sm-6 col-xs-6 col-md-offset-2">
            <div class="feature-icon"><i class="icon ion-person-add"></i></div>
            <h3>Make Friends</h3>
          </div>
          <div class="feature-item col-md-2 col-sm-6 col-xs-6">
            <div class="feature-icon"><i class="icon ion-images"></i></div>
            <h3>Food Images</h3>
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
        <h2 class="sub-title">find foodies like you</h2>
        <div id="incremental-counter" data-value="101242"></div>
        <p>People Already Signed Up</p>
        <img src="images/face-map.png" alt="" class="img-responsive face-map slideUp hidden-sm hidden-xs" />
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Eat Together App landing page!"
    };
  },
  created: function() {},
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
