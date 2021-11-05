<template>
  <div>
    <br /><br />
          <div id="DetailRestaurant">
      <h1>Details Restaurant ID : {{ id }}</h1>
    </div>
    
    <div class="card-container">
      <div class="card u-clearfix">
        <div class="card-body">
          <h2 class="card-title">{{ restaurant.name }}</h2>
          <span class="card-number">Cuisine: {{ restaurant.cuisine }} </span>
          <br /><br />

          <span class="card-description subtle"
            >Rue: {{ restaurant.address.street }}</span>
          <span class="card-author subtle"
            >Ville: {{ restaurant.borough }}</span>
          
        </div>
        <img
          :src="this.urlImage"
          alt="image"
          height="600"
          width="300"
          class="card-media"
        />
      </div>
      <div class="card-shadow"></div>
      <br /><br />
    </div>
    <h2 />coordonnées GPS Google Maps <h2 />
       <!-- Affichage de la position sur plan du restaurant-->
    <div class="center-div">
    <GmapMap :center="center" :zoom="8" style="width: 100%; height: 400px">
      <GmapMarker :position="center" />
    </GmapMap>
  </div>


    <!-- Recuperation de la cartes des plats-->
    <carte-des-plats />
    <menu-restaurant />
   </div>
</template>


<script>
import CarteDesPlats from "./CarteDesPlats.vue";
import MenuRestaurant from "./MenuRestaurant.vue";

const GoogleImages = require("google-images");

const client = new GoogleImages(
  "4693ac58732c81ac9",
  "AIzaSyAuWMgnu2rK7rhrgEAIoKWVnqurYAiyQ9M"
);

export default {
  name: "DetailRestaurant",

  props: {},
  components: {
    CarteDesPlats,
    MenuRestaurant,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  data: function () {
    return {
      restaurant: null,
      center: { lat: 120, lng: 120 },
      urlImage: null,
    };
  },

  methods: {
    // recupere les données du restaurant
    async fetchResto(id) {
      let url = "http://localhost:8080/api/restaurants/" + id;

      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.restaurant = data.restaurant;
          this.recupCoord();
        });
    },
    //recupère les coordonnées du restaurant est assigné le centre ou doit se positionner le marker de la carte
    recupCoord() {
      const coord = "" + this.restaurant.address.coord;
      var splitcoord = coord.split(",");

      var latcoord = splitcoord[1];
      var longcoord = splitcoord[0];
      console.log("latitude: " + latcoord + "," + "longitude:" + longcoord);
      this.center = { lat: parseFloat(latcoord), lng: parseFloat(longcoord) };
    },
    searchImage() {
      window.setImmediate = window.setTimeout;
      client.search("restaurants" + this.restaurant.name).then((images) => {
        this.urlImage = images[0].url;
      });
    },
  },
  //mise en place du mounted en asynchrone afin d'attendre que le fetch recupere toutes les données pour les afficher dont la position de la map
  async mounted() {
    console.log("Avant affichage, on pourra faire un fetch");
    console.log("ID=" + this.id);
    await this.fetchResto(this.id);
    await this.searchImage();
  },
};
</script>

<style scoped>


template {
  background: #010216;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-size: 25px;
  font-weight: 200;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.u-clearfix:before,
.u-clearfix:after {
  content: " ";
  display: table;
}

.u-clearfix:after {
  clear: both;
}

.u-clearfix {
  *zoom: 1;
}

.subtle {
  color: rgb(8, 0, 0);
}

.card-container {
  margin: 25px auto 0;
  position: relative;
  width: 692px;
}

.card {
  background-color: rgb(180, 235, 243);
  padding: 30px;
  position: relative;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  z-index: 1;
}

.card-body {
  display: inline-block;
  float: left;
  width: 310px;
}

.card-author {
  display: block;
  font-size: 15px;
  letter-spacing: 0.5px;
  margin: 15px 0 0;
  text-transform: uppercase;
}

.card-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 60px;
  font-weight: 300;
  line-height: 60px;
  margin: 10px 0;
}

.card-description {
  display: inline-block;
  font-weight: 300;
  line-height: 22px;
  margin: 10px 0;
}

.card-read {
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 6px;
  margin: 5px 0 20px;
  position: relative;
  text-align: right;
  text-transform: uppercase;
}

.card-read:after {
  background-color: #01020c;
  content: "";
  display: block;
  height: 1px;
  position: absolute;
  top: 9px;
  width: 75%;
}

.card-media {
  float: right;
}

.card-shadow {
  background-color: rgb(3, 0, 0);
  box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 1), 0 2px 50px 2px rgba(0, 0, 0, 1),
    0 0 100px 3px rgba(0, 0, 0, 0.25);
  height: 1px;
  margin: -1px auto 0;
  width: 80%;
  z-index: -1;
}
</style>