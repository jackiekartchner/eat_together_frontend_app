<template>
  <div class="container">
    <h1>All Cravings</h1>
    <div class="timeline-cover">
      <img src="/images/trendy_restaurant" alt="banner_image" />
      <!--Timeline Menu for Large Screens-->
      <div class="timeline-nav-bar hidden-sm hidden-xs">
        <div class="row">
          <div class="col-md-3">
            <div class="profile-info">
              <img src="/images/eric.png" alt="" class="img-responsive profile-photo" />
              <h3>{{ user.full_name }}</h3>
              <p class="text-muted">{{ user.bio }}</p>
            </div>
          </div>
          <div class="col-md-9">
            <ul class="list-inline profile-menu">
              <li>
                <router-link v-bind:to="`/cravings/new`">
                  <button class="btn btn-warning">Add A New Craving</button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--Timeline Menu for Large Screens End-->

      <!--Timeline Menu for Small Screens-->
      <div class="navbar-mobile hidden-lg hidden-md">
        <div class="profile-info">
          <img src="/images/eric.png" alt="" class="img-responsive profile-photo" />
          <h4>{{ user.full_name }}</h4>
          <p class="text-muted">{{ user.bio }}</p>
        </div>
        <div class="mobile-menu">
          <router-link v-bind:to="`/cravings/new`">
            <button class="btn btn-warning">Add A New Craving</button>
          </router-link>
        </div>
      </div>
      <!--Timeline Menu for Small Screens End-->
    </div>
    <div v-for="craving in cravings">
      <!-- Timeline
      ================================================= -->
      <div class="timeline">
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
                      <img v-bind:src="craving.category_image" alt="profile-cover" class="img-responsive cover" />
                      <div class="card-info">
                        <div class="friend-info">
                          <a href="/bookings" class="pull-right text-green">
                            Click here to see if a booking was created.
                          </a>
                          <h5>
                            <a href="timeline.html" class="profile-link">Cuisine Type: {{ craving.category }}</a>
                          </h5>
                          <p>
                            <b>Price:</b>
                            {{ craving.price }}
                          </p>
                          <p>
                            <b>Available Date:</b>
                            {{ relativeDate(craving.appointment) }}
                          </p>
                          <p>
                            <b>Available Time:</b>
                            {{ relativeTime(craving.appointment) }}
                          </p>
                          <p>
                            <b>Last Updated</b>
                            {{ updatedDate(craving.updated_at) }}
                          </p>
                        </div>
                        <!-- Trigger the modal with a button -->
                        <button
                          type="button"
                          class="btn btn-danger btn-sm"
                          data-toggle="modal"
                          data-target="#deleteModal"
                        >
                          Delete Craving
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="deleteModal" role="dialog">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Delete Craving</h4>
                              </div>
                              <div class="modal-body">
                                <p>Are you sure you want to delete this Craving?</p>
                              </div>
                              <div class="modal-footer">
                                <button class="btn btn-danger" v-on:click="destroyCraving(craving)">
                                  Delete Craving
                                </button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 static">
              <div id="sticky-sidebar">
                <h4 class="grey">{{ user.full_name }}'s activity</h4>
                <div class="feed-item">
                  <div class="live-activity">
                    <p>
                      <a href="/users/me" class="profile-link">{{ user.full_name }}</a>
                      Added {{ craving.category }} craving
                    </p>
                    <p class="text-muted">{{ updatedDate(craving.updated_at) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--     <h3>Cuisine Type: {{ craving.category }}</h3>
      <p>Price: {{ craving.price }}</p>
      <p>Available Date: {{ relativeDate(craving.appointment) }}</p>
      <p>Available Time: {{ relativeTime(craving.appointment) }}</p>
      <p>Last Updated {{ updatedDate(craving.updated_at) }}</p> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      cravings: [],
      user: {},
      userID: ""
    };
  },
  created: function() {
    axios.get("/api/cravings").then(response => {
      this.cravings = response.data;
      console.log("cravings", response.data);
    });
    console.log(moment("2019-11-12T13:00:00.000Z").format());
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
    destroyCraving: function(craving) {
      axios.delete("/api/cravings/" + craving.id).then(response => {
        console.log("Success", response.data);
        $("#deleteModal").modal("hide");
        this.$router.push("/");
      });
    },
    getUserInfo: function() {
      this.userId = localStorage.getItem("user_id", response.data.user_id);
    }
  }
};
</script>
