<template>
  <div v-if="dataReady" id="CarteDesPlats">
    <h1>Carte des plats du restaurants</h1>

    <div v-for="(value, index) in carte" :key="index">
      <p>Nom hors d'oeuvre: {{ value.hdoeuvre.nom }}</p>
      <p>Description hors d'oeuvre: {{ value.hdoeuvre.description }}</p>
      <p><img width="200" height="200" :src="value.hdoeuvre.photo" /></p>

      <p>Nom Plat: {{ value.plat.nom }}</p>
      <p>Description plat: {{ value.plat.description }}</p>
      <p><img width="200" height="200" :src="value.plat.photo" /></p>

      <p>Nom déssert: {{ value.dessert.nom }}</p>
      <p>Description déssert: {{ value.dessert.description }}</p>
      <p><img width="200" height="200" :src="value.dessert.photo" /></p>
    </div>

    <div class="menus">
      <div class="menuMidi">
        <h1>Menu Midi</h1>
        <div>
          <div class="wrapper">
            <div class="product-img">
              <img
                width="327"
                height="420"
                :src="this.menumidi.hdoeuvre.photo"
              />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Nom du hors d'oeuvre: {{ this.menumidi.hdoeuvre.nom }}</h1>
                <p>Description: {{ this.menumidi.hdoeuvre.description }}</p>
              </div>
              <div class="product-price-btn">
                <p>
                  <span>{{ this.menumidi.hdoeuvre.prix }}</span
                  >€
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="wrapper">
            <div class="product-img">
              <img width="327" height="420" :src="this.menumidi.plat.photo" />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Nom du plat: {{ this.menumidi.plat.nom }}</h1>
                <p>Description: {{ this.menumidi.plat.description }}</p>
              </div>
              <div class="product-price-btn">
                <p>
                  <span>{{ this.menumidi.plat.prix }}</span
                  >€
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="wrapper">
            <div class="product-img">
              <img
                width="327"
                height="420"
                :src="this.menumidi.dessert.photo"
              />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Nom du Dessert: {{ this.menumidi.dessert.nom }}</h1>
                <p>Description: {{ this.menumidi.dessert.description }}</p>
              </div>
              <div class="product-price-btn">
                <p>
                  <span>{{ this.menumidi.dessert.prix }}</span
                  >€
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>

      <div class="menuGastro">
        <h1>Menu Gastronomique</h1>
         <div>
          <div class="wrapper">
            <div class="product-img">
              <img
                width="327"
                height="420"
                :src="this.menugastro.hdoeuvre.photo"
              />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Nom du hors d'oeuvre: {{ this.menugastro.hdoeuvre.nom }}</h1>
                <p>Description: {{ this.menugastro.hdoeuvre.description }}</p>
              </div>
              <div class="product-price-btn">
                <p>
                  <span>{{ this.menugastro.hdoeuvre.prix }}</span
                  >€
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="wrapper">
            <div class="product-img">
              <img width="327" height="420" :src="this.menugastro.plat.photo" />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Nom du plat: {{ this.menugastro.plat.nom }}</h1>
                <p>Description: {{ this.menugastro.plat.description }}</p>
              </div>
              <div class="product-price-btn">
                <p>
                  <span>{{ this.menugastro.plat.prix }}</span
                  >€
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="wrapper">
            <div class="product-img">
              <img
                width="327"
                height="420"
                :src="this.menugastro.dessert.photo"
              />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Nom du Dessert : {{ this.menugastro.dessert.nom }}</h1>
                <p>Description: {{ this.menugastro.dessert.description }}</p>
              </div>
              <div class="product-price-btn">
                <p>
                  <span>{{ this.menugastro.dessert.prix }}</span
                  >€
                </p>
              </div>
            </div>
          </div>
    </div>
  </div>
  </div>
  </div>
</template>


<script>
import data from "./CartesPlats/cartes_plats.json";
export default {
  name: "CarteDesPlats",
  props: {},
  data: function () {
    return {
      plats: null,
      //creation des listes de tous les plats gatronomique
      listegastroplats: [],
      listegastrohdoeuvre: [],
      listegastrodessert: [],
      //creation des listes de tous les plats du midi
      listemidiplats: [],
      listemidihdoeuvre: [],
      listemididessert: [],

      listeplats: [],
      listehdoeuvre: [],
      listedessert: [],

      carte: [],
      menugastro: [],
      menumidi: [],
      hdoeuvre: null,
      dessert: null,
      plat: null,

      hdoeuvregastro: null,
      dessertgastro: null,
      platgastro: null,

      hdoeuvremidi: null,
      dessertmidi: null,
      platmidi: null,

      tmphdoeuvre: null,
      tmpdessert: null,
      tmpplat: null,
      dataReady: false,
    };
  },

  methods: {
    //Ajouter tous les plats, dessert, hors d'oeuvre dans les listes gastro ou midi correspondantes
    AddintoListCategory() {
      this.plats.forEach((e) => {
        if (e.type === "plat") {
          this.listeplats.push(e);
        } else if (e.type === "hors d'oeuvre") {
          this.listehdoeuvre.push(e);
        } else if (e.type === "dessert") {
          this.listedessert.push(e);
        }
      });
    },
    RecupElementCategorie(i) {
      let tmpplat = parseInt(Math.random() * this.listeplats.length);
      let tmphdoeuvre = parseInt(Math.random() * this.listehdoeuvre.length);
      let tmpdessert = parseInt(Math.random() * this.listedessert.length);

      this.plat = this.listeplats[tmpplat];
      this.hdoeuvre = this.listehdoeuvre[tmphdoeuvre];
      this.dessert = this.listedessert[tmpdessert];

      this.carte[i] = {
        plat: this.plat,
        hdoeuvre: this.hdoeuvre,
        dessert: this.dessert,
      };

      // ajout des plats des cartes dans les listes gastro midi
      if (this.plat.gastronomique === true) {
        this.listegastroplats.push(this.plat);
      } else {
        this.listemidiplats.push(this.plat);
      }

      if (this.hdoeuvre.gastronomique === true) {
        this.listegastrohdoeuvre.push(this.hdoeuvre);
      } else {
        this.listemidihdoeuvre.push(this.hdoeuvre);
      }

      if (this.dessert.gastronomique === true) {
        this.listegastrodessert.push(this.dessert);
      } else {
        this.listemididessert.push(this.dessert);
      }
      
    
    },
    CreateCarte() {
      //Ajout de x nb de plats, hors d'oeuvre et dessert aleatoire dans la carte
      let taille = parseInt(Math.random() * this.listeplats.length);
      console.log(taille);
      for (let i = 0; i < taille; i++) {
        this.RecupElementCategorie(i);
      }
      let i=0;
      while (
        this.listegastroplats.length === 0 ||
        this.listegastrohdoeuvre.length === 0 ||
        this.listegastrodessert.length === 0 ||
        this.listemidiplats.length === 0 ||
        this.listemidihdoeuvre.length === 0 ||
        this.listemididessert.length === 0
      ) {
        this.RecupElementCategorie(i);
        i++;
      }
    },
    CreateMenu(gastronomique) {
      if (gastronomique) {
        let tmpplat = parseInt(Math.random() * this.listegastroplats.length);
        let tmphdoeuvre = parseInt(
          Math.random() * this.listegastrohdoeuvre.length
        );
        let tmpdessert = parseInt(
          Math.random() * this.listegastrodessert.length
        );

        this.platgastro = this.listegastroplats[tmpplat];
        this.hdoeuvregastro = this.listegastrohdoeuvre[tmphdoeuvre];
        this.dessertgastro = this.listegastrodessert[tmpdessert];

        this.menugastro = {
          plat: this.platgastro,
          hdoeuvre: this.hdoeuvregastro,
          dessert: this.dessertgastro,
        };
      } else {
        let tmpplat = parseInt(Math.random() * this.listemidiplats.length);
        let tmphdoeuvre = parseInt(
          Math.random() * this.listemidihdoeuvre.length
        );
        let tmpdessert = parseInt(Math.random() * this.listemididessert.length);

        this.platmidi = this.listemidiplats[tmpplat];
        this.hdoeuvremidi = this.listemidihdoeuvre[tmphdoeuvre];
        this.dessertmidi = this.listemididessert[tmpdessert];

        this.menumidi = {
          plat: this.platmidi,
          hdoeuvre: this.hdoeuvremidi,
          dessert: this.dessertmidi,
        };
      }
    },
  },
  async mounted() {
    this.plats = data.carte_plats;
    await this.AddintoListCategory();
    await this.CreateCarte();
    await this.CreateMenu(false);
    await this.CreateMenu(true);
    this.dataReady = true;
  },
};
</script>

<style scoped>
h1 {
  color: rgb(2, 17, 22);
}
div .menuMidi,
div .menuGastro {
  display: inline-block;
}

.wrapper {
  height: 420px;
  width: 654px;
  margin: 70px auto;
  border-radius: 7px 7px 7px 7px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.product-img {
  float: left;
  height: 420px;
  width: 327px;
}

.product-img img {
  border-radius: 7px 0 0 7px;
}

.product-info {
  float: left;
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
}

.product-text {
  height: 300px;
  width: 327px;
}

.product-text h1 {
  margin: 0 0 0 34px;
  padding-top: 48px;
  font-size: 30px;
  color: #474747;
}

.product-text h1,
.product-price-btn p {
  font-family: "Bentham", serif;
}

.product-text p {
  height: 125px;
  margin: 0 0 0 38px;
  font-family: "Playfair Display", serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}

.product-price-btn {
  height: 103px;
  width: 327px;
  margin-top: 17px;
  position: relative;
}

.product-price-btn p {
  display: inline-block;
  position: absolute;
  top: -13px;
  height: 50px;
  font-family: "Trocchi", serif;
  margin: 0 0 0 38px;
  font-size: 28px;
  font-weight: lighter;
  color: #474747;
}

span {
  display: inline-block;
  height: 50px;
  font-family: "Suranna", serif;
  font-size: 34px;
}
</style>