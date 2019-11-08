<template>
  <div class="bookings-show">
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
    <div>
      <button class="btn btn-danger" v-on:click="destroyBooking()">Destroy</button>
    </div>
    <router-link v-bind:to="`/bookings`">
      <button class="btn btn-warning">All Bookings</button>
    </router-link>
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
        this.$router.push("/bookings");
      });
    }
  }
};
</script>
