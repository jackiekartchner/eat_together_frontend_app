<template>
  <div class="cravings-new">
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
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>
          New Craving
        </h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Cuisine Type:</label>
          {{ category }}
          <select v-model="category">
            <option value="American" class="form-control">American</option>
            <option value="British" class="form-control">British</option>
            <option value="Cajun" class="form-control">Cajun</option>
            <option value="Caribbean" class="form-control">Caribbean</option>
            <option value="Chinese" class="form-control">Chinese</option>
            <option value="French" class="form-control">French</option>
            <option value="German" class="form-control">German</option>
            <option value="Greek" class="form-control">Greek</option>
            <option value="Indian" class="form-control">Indian</option>
            <option value="Italian" class="form-control">Italian</option>
            <option value="Japanese" class="form-control">Japanese</option>
            <option value="Korean" class="form-control">Korean</option>
            <option value="Mediterranean" class="form-control">Mediterranean</option>
            <option value="Mexican" class="form-control">Mexican</option>
            <option value="American" class="form-control">American</option>
            <option value="Soul Food" class="form-control">Soul Food</option>
            <option value="Spanish" class="form-control">Spanish</option>
            <option value="Thai" class="form-control">Thai</option>
            <option value="Turkish" class="form-control">Turkish</option>
            <option value="Vietnamese" class="form-control">Vietnamese</option>
            <option value="Other" class="form-control">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input type="radio" class="form-control" value="$" v-model="price" />
          <label>
            <b>$</b>
            (under $10)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$" v-model="price" />
          <label>
            <b>$$</b>
            ($11-$30)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$$" v-model="price" />
          <label>
            <b>$$$</b>
            ($31-$60)
          </label>
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" value="$$$$" v-model="price" />
          <label>
            <b>$$$$</b>
            ($61+)
          </label>
        </div>
        <div class="form-group">
          <label>Available Date and Time:</label>
          <input type="datetime-local" class="form-control" v-model="appointment" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
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

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: "",
      price: "",
      appointment: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        category: this.category,
        price: this.price,
        appointment: this.appointment
      };
      axios
        .post("/api/cravings", params)
        .then(response => {
          this.$router.push("/cravings");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
