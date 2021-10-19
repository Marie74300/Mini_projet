<template>
 <div id="HelloWorld">
    <h1>Nombre de restaurants : {{nbRestaurantTotal}}</h1>
    <h2>{{msg}}</h2>>

    <div class="formulaire">
        <h2>Ajouter un restaurant</h2>
        <form @submit="ajouterRestaurant">
                <md-field>
                    <label>Nom : </label>
                        <md-input type="text"  required v-model="nom"></md-input>
                </md-field>
        
                <md-field>
                    <label>Cuisine :</label>
                        <md-input type="text" required v-model="cuisine"></md-input>
                    
                </md-field>
            <md-button class="md-raised">Ajouter</md-button>
        </form>
    
    
        
        <h1>Rechercher un restaurant</h1>

            <!--:class="getValidationNom('nom')"-->

                <md-field >
                    <label>Chercher par nom: </label>
                    <md-input @input="getRestaurantsFromServer()" type="text" v-model="nomRestoRechercher"></md-input>
                   <!-- <span class="md-error" v-else-if="!$r.nom">Nom invalid</span>>-->
                </md-field>
        
        <p>NB pages total : {{nbpageTotal}}</p>
        
            <div class="slidecontainer">
                <h2>Nombre de resto: 
                    
                    <input 
                        @input="getRestaurantsFromServer()"
                        type="range" min="5" max="100" value="50" class="slider" step="5" wid="myRange" v-model="pagesize">{{pagesize}}</h2>
            </div>
    
        <md-button  class="md-raised" :disabled="page===0" @click="pagePrecedente()">Précédent</md-button>&nbsp;&nbsp;
        <md-button  class="md-raised" :disabled="page===nbpageTotal" @click="pageSuivante()">Suivant</md-button>
    </div>
    <md-table v-model="restaurants" md-sort="name" md-sort-order="asc">
        <md-table-row>
            <md-table-head >Nom</md-table-head>
            <md-table-head>Cuisine </md-table-head>
            <md-table-head>Ville </md-table-head>
            <md-table-head>Actions </md-table-head>
            <md-table-head>Supression restaurant</md-table-head>
        </md-table-row>
        
            <md-table-row v-bind:key="index" v-for="r,index in restaurants" 
            @click="supprimerRestaurant(index)"
            :style="{backgroundColor:getColor(index)}"
            :class="{bordureRouge:(index === 2)}"
            >

                <md-table-cell md-label="Name" md-sort-by="name">{{r.name}}</md-table-cell>
                <md-table-cell md-label="Cuisine" md-sort-by="cuisine"> {{r.cuisine}}</md-table-cell>
                <md-table-cell md-label="Ville" md-sort-by="ville">{{r.borough}}</md-table-cell>
                <md-table-cell md-label="Router">
                    <router-link :to="'/Restaurant/'+r._id">[Restaurant]</router-link>
                </md-table-cell>
                <md-table-cell><md-button class="md-raised" @click="supprimerRestaurant()">Supprimer le restaurant</md-button></md-table-cell>
            </md-table-row>
        
    </md-table>
  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: 'HelloWorld',
        
        data: function(){return{
            restaurants: [],
            nom: '',
            cuisine: '',
            nbRestaurantTotal:0,
            page:0,
            pagesize:10,
            nbpageTotal:0,
            msg:"",
            nomRestoRechercher:"",
        
        }},
        mounted(){
            console.log("AVANT RENDU HTML");
            this.getRestaurantsFromServer();
        },
        methods: {
            /*getValidationNom(fieldName){
                const field = this.$r.name[fieldName]
                if(field){
                    return{
                        'md-invalid':field.$invalid && field.$dirty
                    }
                }
            },*/
            pagePrecedente(){
                if(this.page === 0 ) return;
                this.page--;
                this.getRestaurantsFromServer();
            },
            pageSuivante(){
                if(this.page === this.dernierepage) return;
                this.page++;
                this.getRestaurantsFromServer();
            },
            getRestaurantsFromServer(){
                let url = "http://localhost:8080/api/restaurants?";
                url += "page=" + this.page;
                url += "&pagesize="+this.pagesize;
                url += "&name=" + this.nomRestoRechercher;

                fetch(url)
                    .then((responseJson) => { // arrow functions conserve le bon this 
                        responseJson.json().then((resJS)=> {
                            //res est un obj JS
                            this.restaurants = resJS.data;
                            this.nbRestaurantTotal = resJS.count;
                            this.nbpageTotal = Math.round(
                                this.nbRestaurantTotal/this.pagesize);

                        });
                    })
                    .catch(function(err){
                        console.log(err);
                    })

            },
            chercherRestaurants: _.debounce(function(){
                this.getRestaurantsFromServer();
            },300),
            supprimerRestaurant(index) {
                this.restaurants.splice(index, 1);
            },
            ajouterRestaurant(event) {
                // eviter le comportement par defaut
                let form = event.target();
                let donneesFrom= new FormData(form);
                let url="http://localhost:8080/api/restaurants?";
                fetch(url,{
                    method:"POST",
                    body: donneesFrom,
                })
                    .then((responseJson)=>{
                        responseJson.json().then((resJS)=>{
                            console.log(resJS.msg);
                            this.msg = resJS.msg;
                            this.getRestaurantsFromServer();
                        });
                    })
                    .catch(function(err){
                        console.log(err);
                    });
                

                this.nom = "";
                this.cuisine = "";
            },
            getColor(index) {
                return (index % 2) ? 'lightBlue' : 'pink';
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
}

tr,
td {
    border: 1px solid black;
}

td {
    padding: 5px;
}

tr:hover {
    background-color: yellow;
}
input:invalid {
    background-color: pink;
}

input:valid {
    background-color: lightGreen;
}

.bordureRouge {
    border: 2px dashed red;
}

.slider{
    width: 100%;
}
div .formulaire{
    display:block;
    width: 50%;
}

</style>
