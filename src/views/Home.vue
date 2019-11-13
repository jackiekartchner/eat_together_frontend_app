<template>

  <div class="home">
    <div class="container wrapper">
      <img src="images/trendy_restaurant.png" alt="home image" height="42" width="42">

      <h1 class="section-title slideDown">Foodie Heaven</h1>

      <h2 class="sub-title">find foodies like you</h2>
      <div id="incremental-counter" data-value="101242"></div>
      <p>People Already Signed Up</p>
      <img src="images/face-map.png" alt="" class="img-responsive face-map slideUp hidden-sm hidden-xs" />
    </br>
    </br>
    </br>
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
