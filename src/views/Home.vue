<template>
  <div class="home">
    <div class="container wrapper">
      <h1 class="section-title slideDown">Foodie Heaven</h1>
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
          <h3>Create Polls</h3>
        </div>
      </div>
      <h2 class="sub-title">find foodies like you</h2>
      <div id="incremental-counter" data-value="101242"></div>
      <p>People Already Signed Up</p>
      <img src="images/face-map.png" alt="" class="img-responsive face-map slideUp hidden-sm hidden-xs" />
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
