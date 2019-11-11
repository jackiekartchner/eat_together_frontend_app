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
    },
    destroyCraving: function() {
      axios.delete("/api/cravings/" + this.craving.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/cravings");
      });
    }
  }
};
</script>
