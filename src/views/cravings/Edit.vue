<template>
  <div class="cravings-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          Edit Craving
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Cuisine Type:</label>
          <input type="string" class="form-control" v-model="craving.category" />
        </div>
        <!--      <div class="form-group">
          <label>Cuisine Type:</label>
          <select>
            <option value="American" class="form-control" v-model="craving.category">American</option>
            <option value="British" class="form-control" v-model="craving.category">British</option>
            <option value="Cajun" class="form-control" v-model="craving.category">Cajun</option>
            <option value="Caribbean" class="form-control" v-model="craving.category">Caribbean</option>
            <option value="Chinese" class="form-control" v-model="craving.category">Chinese</option>
            <option value="French" class="form-control" v-model="craving.category">French</option>
            <option value="German" class="form-control" v-model="craving.category">German</option>
            <option value="Greek" class="form-control" v-model="craving.category">Greek</option>
            <option value="Indian" class="form-control" v-model="craving.category">Indian</option>
            <option value="Italian" class="form-control" v-model="craving.category">Italian</option>
            <option value="Japanese" class="form-control" v-model="craving.category">Japanese</option>
            <option value="Korean" class="form-control" v-model="craving.category">Korean</option>
            <option value="Mediterranean" class="form-control" v-model="craving.category">Mediterranean</option>
            <option value="Mexican" class="form-control" v-model="craving.category">Mexican</option>
            <option value="American" class="form-control" v-model="craving.category">American</option>
            <option value="Soul Food" class="form-control" v-model="craving.category">Soul Food</option>
            <option value="Spanish" class="form-control" v-model="craving.category">Spanish</option>
            <option value="Thai" class="form-control" v-model="craving.category">Thai</option>
            <option value="Turkish" class="form-control" v-model="craving.category">Turkish</option>
            <option value="Vietnamese" class="form-control" v-model="craving.category">Vietnamese</option>
            <option value="Other" class="form-control" v-model="craving.category">Other</option>
          </select>
        </div> -->
        <div class="form-group">
          <label>Price:</label>
          <input type="radio" class="form-control" value="$" v-model="craving.price" />
          <label>
            <b>$</b>
            (under $10)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$" v-model="craving.price" />
          <label>
            <b>$$</b>
            ($11-$30)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$$" v-model="craving.price" />
          <label>
            <b>$$$</b>
            ($31-$60)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$$$" v-model="craving.price" />
          <label>
            <b>$$$$</b>
            ($61+)
          </label>
        </div>
        <div class="form-group">
          <label>Availability:</label>
          <input type="string" class="form-control" v-model="craving.appointment" />
        </div>
        <input type="submit" class="btn btn-primary" value="Edit" />
      </form>
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

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      craving: {},
      errors: []
    };
  },

  created: function() {
    axios.get("/api/cravings/" + this.$route.params.id).then(response => {
      this.craving = response.data;
      console.log(this.craving);
    });
  },

  methods: {
    submit: function() {
      var params = {
        category: this.craving.category,
        price: this.craving.price,
        appointment: this.craving.appointment
      };
      axios
        .patch("/api/cravings/" + this.craving.id, params)
        .then(response => {
          this.$router.push("/cravings");
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    }
    // destroyCraving: function() {
    //   axios.delete("/api/cravings/" + this.craving.id).then(response => {
    //     console.log("Success", response.data);
    //     this.$router.push("/cravings");
    //   });
    // }
  }
};
</script>
