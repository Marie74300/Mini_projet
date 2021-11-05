<template>
  <div v-if="dataReady" id="CarteDesPlats">
    <!-- Affichage de la carte des plats-->
    <h1>Carte des plats du restaurants</h1>
    <div class="toutesCarte">
    <div class="afficheCarte">
      <h2>Hors d'oeuvres: </h2>
      <div class="wrapper">
      <!-- Affichage par un for de la carte des hdoeuvres-->
          <div v-for="(value, index) in cartehdoevre" :key="index">
              <div class="product-img">
                <img width="327" height="420" :src="value.hdoeuvre.photo" />
              </div>
              <div class="product-info">
                    <div class="product-text">
                      <p>Nom hors d'oeuvre: {{ value.hdoeuvre.nom }}</p>
                      <p>Description hors d'oeuvre: {{ value.hdoeuvre.description }}</p>
                    </div>
                    <div class="product-price-btn">
                      <p>
                      <span>{{ value.hdoeuvre.prix }}</span
                      >€
                      </p>
                  </div>
                    
              </div>
            
          </div>
      </div>
    </div>
  

    <div class="afficheCarte">
      <h2>Plats:</h2>
      <div class="wrapper">
        <!-- Affichage par un for de la carte des plats-->
          <div   v-for="(value, index) in carte" :key="index">
              <div class="product-img">
                  <img width="327" height="420" :src="value.plat.photo" />
              </div>
                <div class="product-info">
                      <div class="product-text">
                        <p>Nom Plat: {{ value.plat.nom }}</p>
                        <p>Description plat: {{ value.plat.description }}</p>
                      </div>
                      <div class="product-price-btn">
                        <p>
                        <span>{{ value.plat.prix }}</span
                        >€</p>
                      </div>
              </div>
          </div>
      </div>
    </div>
  

    <div class="afficheCarte">
    <h2>Désserts:</h2>
     <div class="wrapper">
        <!-- Affichage par un for de la carte des dessert-->
        <div  v-for="(value, index) in cartedessert" :key="index">
          <div class="product-img">
              <img width="327" height="420" :src="value.dessert.photo" />
          </div>
           <div class="product-info">
                  <div class="product-text">
                    <p>Nom déssert: {{ value.dessert.nom }}</p>
                    <p>Description déssert: {{ value.dessert.description }}</p>
                  </div>
                  <div class="product-price-btn">
                    <p>
                     <span> {{ value.dessert.prix }}</span
                    >€</p>
                  </div>
           </div>
        </div>
      </div>
    </div>
    
    </div>
  
   <!-- Affichage des menus -->
    <div class="menus">
      <!-- Affichage des menus du midi -->
      <div class="menuMidi">
        <h1>Menu Midi</h1>
        <div>
          <!-- Affichage des hors d'oeuvre des menus du midi -->
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
                <h1>Hors d'oeuvre: {{ this.menumidi.hdoeuvre.nom }}</h1><br/>
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
      <!-- Affichage des plats des menus du midi -->
        <div>
          <div class="wrapper">
            <div class="product-img">
              <img width="327" height="420" :src="this.menumidi.plat.photo" />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Plat: {{ this.menumidi.plat.nom }}</h1><br/>
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
      <!-- Affichage des désserts des menus du midi -->
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
                <h1>Dessert: {{ this.menumidi.dessert.nom }}</h1><br/>
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

    <!-- Affichage du menu gastro -->
      <div class="menuGastro">
        <h1>Menu Gastronomique</h1>
        <!-- Affichage des hors d'oeuvre du menu gastro-->
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
                <h1>Hors d'oeuvre: {{ this.menugastro.hdoeuvre.nom }}</h1><br/>
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
        <!-- Affichage des plats du menu gastro-->
        <div>
          <div class="wrapper">
            <div class="product-img">
              <img width="327" height="420" :src="this.menugastro.plat.photo" />
            </div>
            <div class="product-info">
              <div class="product-text">
                <h1>Plat: {{ this.menugastro.plat.nom }}</h1><br/>
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
      <!-- Affichage des dessert du menu gastro-->
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
                <h1>Dessert : {{ this.menugastro.dessert.nom }}</h1> <br/>
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
      //creation des listes de chaque type 
      listeplats: [],
      listehdoeuvre: [],
      listedessert: [],

      //creation des cartes par type
      carte: [],
      cartehdoevre:[],
      cartedessert:[],

      //creation des menus et des types correspondant
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
      //permet d'afficher les données seulement si elles sont toutes chargées
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
    //permet de recuperer aleatoirement i elements de chaque categorie et de les ajouter aux cartes correspondantes
    RecupElementCategorie(i) {
      let tmpplat = parseInt(Math.random() * this.listeplats.length);
      let tmphdoeuvre = parseInt(Math.random() * this.listehdoeuvre.length);
      let tmpdessert = parseInt(Math.random() * this.listedessert.length);

      this.plat = this.listeplats[tmpplat];
      this.hdoeuvre = this.listehdoeuvre[tmphdoeuvre];
      this.dessert = this.listedessert[tmpdessert];

      this.carte[i] = {
        plat: this.plat
      };
      this.cartehdoevre[i] = {
       
        hdoeuvre: this.hdoeuvre
      };
      this.cartedessert[i] = {
       
        dessert: this.dessert
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
      //tant que  l'une des liste est null on recupere de nouveaux elements dans les listes
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
      //si le menu est gastronomique on recupere aleatoirement  element de chaque categorie qui constitura notre menu gastro
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
      } else {//si le menu n'est pas gastro on recupere aleatoirement  element de chaque categorie qui constitura notre menu midi
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
.toutesCarte{
  display: inline-block;
}
div.afficheCarte{
  float:left;
}

</style>