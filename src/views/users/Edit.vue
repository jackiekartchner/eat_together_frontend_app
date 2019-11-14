<template>
  <div class="users-edit">
    <!-- Top Banner
    ================================================= -->
    <section id="banner">
      <div class="container">
        <div class="container">
          <form v-on:submit.prevent="submit()">
            <h1>
              <New>Edit Profile</New>
            </h1>
            <div class="hello">
              <picture-input
                ref="pictureInput"
                width="400"
                height="400"
                margin="16"
                accept="image/jpeg,image/png"
                size="10"
                button-class="btn"
                :custom-strings="{
                  upload: '<h1>Bummer!</h1>',
                  drag: 'Click and select a Profile Picture here'
                }"
                @change="onChange"
              ></picture-input>
            </div>
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label>Name:</label>
              <input type="string" class="form-control" v-model="user.full_name" />
            </div>
            <div class="form-group">
              <label>Bio:</label>
              <input type="text" class="form-control" v-model="user.bio" />
            </div>
            <div class="form-group">
              <label>Phone Number:</label>
              <input type="string" class="form-control" v-model="user.phone_number" />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input type="string" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
              <label>Zip Code:</label>
              <input type="string" class="form-control" v-model="user.zip_code" />
            </div>
            <div>
              <input type="submit" class="btn btn-primary" value="Save Edits" />
              <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal">
                Delete User
              </button>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="deleteModal" role="dialog">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Delete User</h4>
                  </div>
                  <div class="modal-body">
                    <p>Are you sure you want to delete this User?</p>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-danger" v-on:click="destroyUser()">Delete User</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import PictureInput from "vue-picture-input";

export default {
  name: "app",
  data: function() {
    return {
      user: {},
      errors: []
    };
  },
  components: {
    PictureInput
  },

  created: function() {
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },

  methods: {
    submit: function() {
      var params = {
        full_name: this.user.full_name,
        bio: this.user.bio,
        phone_number: this.user.phone_number,
        email: this.user.email,
        zip_code: this.user.zip_code
      };
      axios
        .patch("/api/users/" + this.user.id, params)
        .then(response => {
          this.$router.push("/users/me");
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    destroyUser: function() {
      axios.delete("/api/users/" + this.user.id).then(response => {
        console.log("Success", response.data);
        $("#deleteModal").modal("hide");
        this.$router.push("/logout");
      });
    },
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported");
      }
    }
  }
};
</script>
