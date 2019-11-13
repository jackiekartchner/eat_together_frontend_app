<template>
  <div class="container">
    <h1>All Bookings</h1>
    <!-- Timeline
    ================================================= -->
    <div class="timeline">
      <div class="timeline-cover">

        <!--Timeline Menu for Large Screens-->
        <div class="timeline-nav-bar hidden-sm hidden-xs">
          <div class="row">
            <div class="col-md-3">
              <div class="profile-info">
                <img src="http://placehold.it/300x300" alt="" class="img-responsive profile-photo" />
                <h3>{{user.full_name}}</h3>
                <p class="text-muted">{{user.bio}}</p>
              </div>
            </div>
            <div class="col-md-9">
              <ul class="list-inline profile-menu">
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href="" class="active"></a></li>
              </ul>
            </div>
          </div>
        </div><!--Timeline Menu for Large Screens End-->

        <!--Timeline Menu for Small Screens-->
        <div class="navbar-mobile hidden-lg hidden-md">
          <div class="profile-info">
            <img src="http://placehold.it/300x300" alt="" class="img-responsive profile-photo" />
            <h4>{{user.full_name}}</h4>
            <p class="text-muted">{{user.bio}}</p>
          </div>
          <div class="mobile-menu">
            <ul class="list-inline">
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href="" class="active"></a></li>
            </ul>
          </div>
        </div><!--Timeline Menu for Small Screens End-->

      </div>
      <div id="page-contents">

        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-7">

            <!-- Friend List
            ================================================= -->
            <div class="friend-list">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="friend-card">
                    <img src="" alt="profile-cover" class="img-responsive cover" />
                    <div class="card-info">
                      <img src="http://placehold.it/300x300" alt="user" class="profile-photo-lg" />
                      <div class="friend-info">
                        <h5><a href="timeline.html" class="profile-link">Restaurant Name: </a></h5>
                        <p>Student at Harvard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 static">
            <div id="sticky-sidebar">
              <h4 class="grey">{{user.full_name}}'s activity</h4>
              <div class="feed-item">
                <div class="live-activity">
                  <p><a href="/users/me" class="profile-link">{{user.full_name}}</a> Commended on a Photo</p>
                  <p class="text-muted">5 mins ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="booking in bookings">
      <h3>Restaurant Name: {{ booking.restaurant.name }}</h3>
      <img v-bind:src="booking.restaurant.image_url" alt="" />
      <p>Reservation Date: {{ relativeDate(booking.appointment) }}</p>
      <p>Reservation Time: {{ relativeTime(booking.appointment) }}</p>
      <p>Last Updated {{ updatedDate(booking.updated_at) }}</p>
      <router-link v-bind:to="`/bookings/${booking.id}`">
        <button class="btn btn-warning">Booking and Restaurant Details</button>
      </router-link>
      </div>
    </div>  
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      bookings: [],
      user: {},
      userID: ""
    };
  },
  created: function() {
    axios.get("/api/bookings").then(response => {
      this.bookings = response.data;
      console.log(response.data);
    });
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
      console.log("user", response.data);
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    relativeTime: function(time) {
      return moment(time).format("h:mm a");
    },
    updatedDate: function(date) {
      return moment(date).fromNow();
    },
    getUserInfo: function() {
      this.userId = localStorage.getItem("user_id", response.data.user_id);
    }
  }
};
</script>
