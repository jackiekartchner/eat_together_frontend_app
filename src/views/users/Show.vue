<template>
  <div class="users-show">
  </br>
    <!-- Newsfeed Common Side Bar Left
          ================================================= -->
    <div class="col-md-3 static">
      <div class="profile-card">
        <img src="/images/eric.png" alt="user" class="profile-photo" />
        <h5><a href="/users/me" class="text-white">{{ user.full_name }}</a></h5>
      </div>
      <!--profile card ends-->
      <ul class="nav-news-feed">
        <li>
          <i class="icon ion-ios-paper"></i>
          <div><a href="newsfeed.html">My Newsfeed</a></div>
        </li>
        <li>
          <i class="icon ion-ios-people"></i>
          <div><a href="newsfeed-people-nearby.html">People Nearby</a></div>
        </li>
        <li>
          <i class="icon ion-ios-people-outline"></i>
          <div><a href="newsfeed-friends.html">Friends</a></div>
        </li>
        <li>
          <i class="icon ion-chatboxes"></i>
          <div><a href="newsfeed-messages.html">Messages</a></div>
        </li>
        <li>
          <i class="icon ion-images"></i>
          <div><a href="newsfeed-images.html">Images</a></div>
        </li>
        <li>
          <i class="icon ion-ios-videocam"></i>
          <div><a href="newsfeed-videos.html">Videos</a></div>
        </li>
      </ul>
      <!--news-feed links ends-->
      <!--chat block ends-->
    </div>
    <!-- Friend List
    ================================================= -->
    <div class="friend-list">
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="friend-card">
            <img src="/images/eric.png" alt="profile-cover" class="img-responsive cover" />
              <div class="friend-info">
                <h2>Name: {{ user.full_name }}</h2>
                <h5>Bio: {{ user.bio }}</h5>
                <p>Phone Number: {{ user.phone_number }}</p>
                <p>Email: {{ user.email }}</p>
                <p>Zip Code: {{ user.zip_code }}</p>
                <router-link v-bind:to="`/users/${user.id}/edit`">
                  <button class="btn btn-warning">Edit Profile</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  <!--   <h3>Name: {{ user.full_name }}</h3>
    <p>Bio: {{ user.bio }}</p>
    <p>Phone Number: {{ user.phone_number }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Zip Code: {{ user.zip_code }}</p>
    <router-link v-bind:to="`/users/${user.id}/edit`">
      <button class="btn btn-warning">Edit Profile</button>
    </router-link> -->

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
