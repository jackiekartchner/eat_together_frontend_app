<template>
  <div class="bookings-show">
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
    <h2>Booking Details</h2>
    <p>Reservation Date: {{ relativeDate(booking.appointment) }}</p>
    <p>Reservation Time: {{ relativeTime(booking.appointment) }}</p>
    <p>Restaurant Name: {{ booking.restaurant.name }}</p>
    <img v-bind:src="booking.restaurant.image_url" alt="" />
    <p><b>Restaurant Info:</b></p>
    <div style="width: 640px; height: 480px" id="map"></div>
    <!-- <div id="map"></div> -->
    <p>Address: {{ booking.restaurant.display_address }}</p>
    <p>Phone Number: {{ booking.restaurant.display_phone }}</p>
    Yelp Review:
    <a v-bind:href="booking.restaurant.url">{{ booking.restaurant.name }}</a>
    <p>Price: {{ booking.restaurant.price }}</p>
    <p>Category: {{ booking.restaurant.categories }}</p>
    <p v-if="!currentUser()">
      <b>Name of Partner: {{ booking.user1.full_name }}</b>
    </p>
    <p v-else="!currentUser()">
      <b>Name of Partner: {{ booking.user2.full_name }}</b>
    </p>
    <p><b>Partner Contact Info:</b></p>
    <p v-if="!currentUser()">Phone Number: {{ booking.user1.phone_number }}</p>
    <p v-else="!currentUser()">Phone Number: {{ booking.user2.phone_number }}</p>
    <p v-if="!currentUser()">Email: {{ booking.user1.email }}</p>
    <p v-else="!currentUser()">Email: {{ booking.user2.email }}</p>
    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal">
      Delete Booking
    </button>

    <!-- Modal -->
    <div class="modal fade" id="deleteModal" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Delete Booking</h4>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete this Booking?</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" v-on:click="destroyBooking()">Delete Booking</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div>
    <router-link v-bind:to="`/bookings`">
      <button class="btn btn-warning">All Bookings</button>
    </router-link>
  </br>
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

<style>
/*body {
  margin: 0;
  padding: 0;
}
#map {
  top: 0;
  bottom: 0;
  height: 700px;
  width: 100%;
}
.mapboxgl-popup {
  max-width: 200px;
}*/
</style>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      booking: {},
      user_id: localStorage.getItem("current_user.id")
    };
  },
  created: function() {
    axios.get("/api/bookings/" + this.$route.params.id).then(response => {
      this.booking = response.data;
      console.log(this.booking);

      var platform = new H.service.Platform({
        apikey: process.env.VUE_APP_HERE_API_KEY
      });

      // Retrieve the target element for the map:
      var targetElement = document.getElementById("map");

      // Get default map types from the platform object:
      var defaultLayers = platform.createDefaultLayers();

      // Create the parameters for the geocoding request:
      var geocodingParams = {
        searchText: this.booking.restaurant.display_address
      };

      // Define a callback function to process the geocoding response:
      var onResult = function(result) {
        var locations = result.Response.View[0].Result,
          position,
          marker;

        function moveMapToRestaurant(map) {
          map.setCenter({
            lat: locations[0].Location.DisplayPosition.Latitude,
            lng: locations[0].Location.DisplayPosition.Longitude
          });
          map.setZoom(14);
        }

        // Instantiate the map:
        var map = new H.Map(document.getElementById("map"), defaultLayers.vector.normal.map, {
          center: {
            lat: locations[0].Location.DisplayPosition.Latitude,
            lng: locations[0].Location.DisplayPosition.Longitude
          },
          zoom: 19,
          pixelRaio: window.devicePixelRatio || 1
        });

        // add a resize listener to make sure that the map occupies the whole container
        window.addEventListener("resize", () => map.getViewPort().resize());

        //Step 3: make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Create the default UI components
        var ui = H.ui.UI.createDefault(map, defaultLayers);

        window.onload = function() {
          moveMapToRestaurant(map);
        };

        // Add a marker for first location found
        position = {
          lat: locations[0].Location.DisplayPosition.Latitude,
          lng: locations[0].Location.DisplayPosition.Longitude
        };
        marker = new H.map.Marker(position);
        map.addObject(marker);
      };

      // Get an instance of the geocoding service:
      var geocoder = platform.getGeocodingService();

      // Call the geocode method with the geocoding parameters,
      // the callback and an error callback function (called if a
      // communication error occurs):
      geocoder.geocode(geocodingParams, onResult, function(e) {
        alert(e);
      });

      // this.display_address = response.data.restaurant.display_address;
      // console.log(this.display_address);

      // mapboxgl.accessToken =
      //   "pk.eyJ1IjoiamthcnRjaDIiLCJhIjoiY2sxdXozZ3N2MTcxMTNscDRzY2Z1cTY1eCJ9.W_YhUE5-d-Z5RbJE2Zf3HQ";

      // var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
      // mapboxClient.geocoding
      //   .forwardGeocode({
      //     query: this.display_address,
      //     autocomplete: false,
      //     limit: 1
      //   })
      //   .send()
      //   .then(function(response) {
      //     if (response && response.body && response.body.features && response.body.features.length) {
      //       var feature = response.body.features[0];
      //       var map = new mapboxgl.Map({
      //         container: "map",
      //         style: "mapbox://styles/mapbox/streets-v11",
      //         center: feature.center,
      //         zoom: 15
      //       });
      //       new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
      //     }
      //   });
    });
  },
  mounted: function() {},
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    relativeTime: function(time) {
      return moment(time).format("h:mm a");
    },
    currentUser: function() {
      if (this.user_id == this.booking.user1_id) {
        return true;
      } else {
        return false;
      }
    },
    destroyBooking: function() {
      axios.delete("/api/bookings/" + this.booking.id).then(response => {
        console.log("Success", response.data);
        $("#deleteModal").modal("hide");
        this.$router.push("/bookings");
      });
    }
  }
};
</script>
