<template>
  <div class="bookings-show">

          <div class="container">
        <h1>Booking Details</h1>
        <div class="timeline">
          <div class="timeline-cover">
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
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href="" class="active"></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!--Timeline Menu for Large Screens End-->

            <!--Timeline Menu for Small Screens-->
            <div class="navbar-mobile hidden-lg hidden-md">
              <div class="profile-info">
                <img src="/images/eric.png" alt="" class="img-responsive profile-photo" />
                <h4></h4>
                <p class="text-muted"></p>
              </div>
              <div class="mobile-menu">
                <ul class="list-inline">
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href="" class="active"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                      <img v-bind:src="booking.restaurant.image_url"  alt="profile-cover" class="img-responsive cover" />
                      <div class="card-info">
                        
                        <div class="friend-info">
                          <h3>
                            <a class="">Restaurant Name: {{ booking.restaurant.name }}</a>
                          </h3>
                         <p><b>Reservation Date:</b> {{ relativeDate(booking.appointment) }}</p>
                         <p><b>Reservation Time:</b> {{ relativeTime(booking.appointment) }}</p>
                         <h3>
                           <a class="">Restaurant Info:</a>
                         </h3>
                        <p><b>Address:</b> {{ booking.restaurant.display_address }}</p>
                            <p><b>Phone Number:</b> {{ booking.restaurant.display_phone }}</p>
                            <p><b>Price:</b> {{ booking.restaurant.price }}</p>
                            <p><b>Category:</b> {{ booking.restaurant.categories }}</p>
                        <div class="here-maps">
                          <div style="width: 550px; height: 500px" id="map"></div>
                        </div>
                        </br>
                        <router-link class="btn btn-primary" v-bind:to="`/bookings/google/${booking.id}`">
                          Google Maps
                        </router-link>
                        <router-link class="btn btn-primary" v-bind:to="`/bookings/mapbox/${booking.id}`">
                          Mapbox Maps
                        </router-link>
                       <h2 class="text-blue">
                         <b>Name of Partner: Veronica Stephens</b>
                       </h2>
                     </br>
                     </br>
                       <img src="/images/jackie.png" alt="user" class="profile-photo-lg" />
                       <h4>
                         <a class="">Partner Contact Info:</a>
                       </h4>
                       <p>Phone Number: (805) 300-2432</p>
                       <p>Email: veronica@gmail.com</p>
                       </br>
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
    </div>
  </div>
</template>

<style>
body {
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
}
#googlemap {
        width: 100%;
        height: 400px;
        background-color: grey;
      }
</style>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      booking: {},
      user_id: localStorage.getItem("current_user.id"),
      user: {},
      userID: ""
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
    });
  },
  
  methods: {
    relativeDate: function(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    relativeTime: function(time) {
      return moment(time).format("h:mm a");
    },
    currentUser: function() {
      if (this.userId == this.booking.user1) {
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
    },
    getUserInfo: function() {
      this.user_id = localStorage.getItem("user_id", response.data.user_id);
      // console.log(this.userId);
    }
  }
};
</script>
