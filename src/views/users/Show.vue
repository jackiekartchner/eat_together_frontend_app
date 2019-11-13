<template>
  <div class="users-show">
      <div class="container">
        <h1>Profile Page</h1>
        <div class="timeline">
          <div class="timeline-cover">
            <!--Timeline Menu for Large Screens-->
            <div class="timeline-nav-bar hidden-sm hidden-xs">
              <div class="row">
                <div class="col-md-3">
                  <div class="profile-info">
                    <img src="/images/eric.png" alt="" class="img-responsive profile-photo" />
                    <h3></h3>
                    <p class="text-muted"></p>
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
            <!--Timeline Menu for Small Screens End-->
          </div>

          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <div class="reg-form-container">
                
                <!--Registration Form Contents-->
                <div class="tab-content">
                  <div class="tab-pane active" id="register">
                    <h3>{{ user.full_name }}</h3>
                    <p class="text-muted">{{ user.bio }}</p>
                    
                    <!--Register Form-->
                    <form name="registration_form" id='registration_form' class="form-inline">
                      <p>Phone Number: {{ user.phone_number }}</p>
                      <p>Email: {{ user.email }}</p>
                      <p>Zip Code: {{ user.zip_code }}</p>
                        <router-link v-bind:to="`/users/${user.id}/edit`">
                          <button class="btn btn-warning">Edit Profile</button>
                        </router-link>
                      </form>
                    </br>
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
