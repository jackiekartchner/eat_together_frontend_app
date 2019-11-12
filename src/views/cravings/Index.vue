<template>
  <div class="container">
    <header id="header">
      <nav class="navbar navbar-default navbar-fixed-top menu">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index-register.html"><img src="" alt="logo" /></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown"><a href="/logout">Logout</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown"><a href="/login">Login</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown"><a href="/signup">Signup</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown"><a href="/bookings">Bookings</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown"><a href="/cravings">Cravings</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown"><a href="/users/me">Profile</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right main-menu">
              <li class="dropdown"><a href="/">Home</a></li>
            </ul>
            <form class="navbar-form navbar-right hidden-sm">
              <div class="form-group">
                <i class="icon ion-android-search"></i>
                <input type="text" class="form-control" placeholder="Search friends, photos, videos" />
              </div>
            </form>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
      </nav>
    </header>
    <!--Header End-->
    <h1>All Cravings</h1>
    <router-link v-bind:to="`/cravings/new`">
      <button class="btn btn-warning">New Craving</button>
    </router-link>
    <div v-for="craving in cravings">
      <h3>Cuisine Type: {{ craving.category }}</h3>
      <p>Price: {{ craving.price }}</p>
      <p>Available Date: {{ relativeDate(craving.appointment) }}</p>
      <p>Available Time: {{ relativeTime(craving.appointment) }}</p>
      <p>Last Updated {{ updatedDate(craving.updated_at) }}</p>

      <!-- Trigger the modal with a button -->
      <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">
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
              <button class="btn btn-danger" v-on:click="destroyCraving(craving)">Delete Craving</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </br>
    <!-- Footer
        ================================================= -->
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="footer-wrapper">
            <div class="col-md-2 col-sm-2">
              <a href=""><img src="" alt="" class="footer-logo" /></a>
              <ul class="list-inline social-icons">
                <li>
                  <a href="#"><i class="icon ion-social-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon ion-social-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon ion-social-googleplus"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon ion-social-pinterest"></i></a>
                </li>
                <li>
                  <a href="#"><i class="icon ion-social-linkedin"></i></a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-3">
              <h6>For Foodies</h6>
              <ul class="footer-links">
                <li>
                  <a href="https://bucketlistjourney.net/things-every-foodie-must-do-in-their-lifetime/">
                    Foodie Bucket List
                  </a>
                </li>
                <li>
                  <a href="https://travel.usnews.com/rankings/best-foodie-destinations-in-the-usa/">
                    Best Foodie Cities in the U.S.
                  </a>
                </li>
                <li>
                  <a href="https://www.rd.com/culture/best-foodie-cities-in-the-world/">
                    Best Foodie Cities in the World
                  </a>
                </li>
                <li><a href="http://www.foodtimeline.org/">Food Timeline</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-3">
              <h6>Best Food Blogs to Follow</h6>
              <ul class="footer-links">
                <li><a href="https://www.fiction-food.com/">Fiction-Food Cafe</a></li>
                <li><a href="https://pinchofyum.com/">Pinch of Yum</a></li>
                <li>
                  <a href="https://chocolatecoveredkatie.com/">Chocolate Covered Katie</a>
                </li>
                <li><a href="https://howtofeedaloon.com/">How to feed a loon</a></li>
                <li><a href="https://www.thefoodieaffair.com/">The Foodie Affair</a></li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-4">
              <h6>Contact Us</h6>
              <ul class="contact">
                <li>
                  <i class="icon ion-ios-telephone-outline"></i>
                  +1 (800) 111 0000
                </li>
                <li>
                  <i class="icon ion-ios-email-outline"></i>
                  info@eat_together.com
                </li>
                <li>
                  <i class="icon ion-ios-location-outline"></i>
                  228 Eat Ave Seattle, WA USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>copyright @thunder-team 2016. All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      cravings: []
    };
  },
  created: function() {
    axios.get("/api/cravings").then(response => {
      this.cravings = response.data;
      console.log(this.cravings);
    });
    console.log(moment("2019-11-12T13:00:00.000Z").format());
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
    }
  }
};
</script>
