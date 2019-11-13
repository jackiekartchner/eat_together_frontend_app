<template>
  <div class="home">
    <section id="banner">
      <div class="container">
        <div class="row">
          <div class="col-sm-offset-3 col-sm-6">
            <div class="intro-texts text-center">
              <h1 class="text-white">Make Cool Friends !!!</h1>
              <p>
                Friend Finder is a social network template that can be used to connect people. The template offers
                Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more.
                <br />
                <br />
                Why are you waiting for? Buy it now.
              </p>
              <button class="btn btn-primary">Learn More</button>
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
              <h3 class="text-white">1,01,242</h3>
              <p>People registered</p>
            </li>
            <li>
              <div class="fact-icon"><i class="icon ion-images"></i></div>
              <h3 class="text-white">21,01,242</h3>
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
  methods: {}
};
</script>
