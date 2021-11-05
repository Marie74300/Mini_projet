<template>

 <div id="NbResto">
     
    
        <br/><br/><br/>
         <h1> Trouve ta Bouffe </h1>
         <p>Recherche ou ajoute un nouveau restaurant dans la base de données de BB</p>
        <br/><br/><br/>


    <div class="formulaire">
        <!--affiche le nombre de restaurants dans la base de données-->
        <h2 class="nbResto">Nombre de restaurants :<b style="color:green;"> {{nbRestaurantTotal}}</b></h2><br/>


          <!--Affiche le formulaire permettant d'ajouter un restaurant -->
        <h2>Ajouter un restaurant</h2>
         <p class="explicationResto">Tu n'as pas trouver ta super bouffe, alors ajoute-le </p>
        <form v-on:submit="ajouterRestaurant">
                <md-field>
                    <label>Nom : </label>
                        <md-input type="text" name="nom" required v-model="nom"></md-input>
                </md-field>
        
                <md-field>
                    <label>Cuisine :</label>
                        <md-input type="text" name="cuisine" required v-model="cuisine"></md-input>
                    
                </md-field>
            
           <md-button type="submit" class="md-raised">Ajouter</md-button>
        </form>
        <br/>
    
    
        <!--affiche une barre de recherche ainsi que d'une snackbar permettant d'afficher une erreur si restaurant n'est pas trouver dans la bdd-->
        <h2>Rechercher un restaurant</h2>
        <p class="explicationResto">Find your perfect bouffe</p>


            <md-field>
                <label>Chercher par nom: </label>
                <md-input @input="getRestaurantsFromServer()" type="text" v-model="nomRestoRechercher"></md-input>
                <md-snackbar
                    :md-duration="4000"
                    :md-active.sync="showSnackbar"
                    md-persistent>
                    <span class="md-error" >Erreur: Nom introuvable dans la base de données</span>
                </md-snackbar>
            </md-field>
            <br/>


        <!--Permet de filtrer le nombre de restaurants afficher par page du tableau -->
        <h2 style="text-align:left;">NB pages total : <b style="color:green;">{{nbpageTotal}}</b></h2>
        
            <div class="slidecontainer">
                <h2>Nombre de resto: 
                    
                    <input 
                        @input="getRestaurantsFromServer()"
                        type="range" min="5" max="100" value="50" class="slider" step="5" wid="myRange" v-model="pagesize">{{pagesize}}</h2>
            </div>
    </div>

        
        <md-button  class="md-raised" style="font-size:20px;" :disabled="page===0" @click="pagePrecedente()">Précédent</md-button>&nbsp;&nbsp;
        <md-button  class="md-raised" style="font-size:20px;" :disabled="page===nbpageTotal" @click="pageSuivante()">Suivant</md-button>
    
    <md-table v-model="restaurants" md-sort="name" md-sort-order="asc" >
        <md-table-row  >
            <md-table-head style="text-align:center; font-size:20px;" >Nom</md-table-head>
            <md-table-head style="text-align:center; font-size:20px;">Cuisine </md-table-head>
            <md-table-head style="text-align:center; font-size:20px;">Ville </md-table-head>
            <md-table-head style="text-align:center; font-size:20px;">Actions </md-table-head>
            <md-table-head style="text-align:center; font-size:20px;">Supression restaurant</md-table-head>
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
                    <md-button class="md-raised" :to="'/Restaurant/'+r._id">DetailRestaurant</md-button>
                </md-table-cell>
                <md-table-cell><md-button class="md-raised md-accent" @click="supprimerRestaurant()">Supprimer le restaurant</md-button></md-table-cell>
            </md-table-row>
        
    </md-table>
</div>
</template>

<script>
import _ from "lodash"
export default {
  name: 'Restaurant',
        
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
            showSnackbar:null,
        
        }},
        mounted(){
            console.log("AVANT RENDU HTML");
            this.getRestaurantsFromServer();
        },
        methods: {
            getValidationNom(fieldName){
                const field = this.$r.nom[fieldName]
                console.log(field);
                if(field){
                    return{
                        'md-invalid':field.$invalid && field.$dirty
                    }
                }
            },
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
                            if(resJS.count==0){
                                this.showSnackbar=true;
                            }
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
                
                let form = event.target;
                let donneesForm= new FormData(form);
                let url="http://localhost:8080/api/restaurants?";
                fetch(url,{
                    method:"POST",
                    body: donneesForm,
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
                return (index % 2) ? 'lightBlue' : 'white';
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
    background-color: rgb(199, 216, 226);
}
input:invalid {
    background-color: rgb(202, 221, 203);
}

input:valid {
    background-color: rgb(195, 233, 195);
}

.bordureRouge {
    border: 2px dashed;
}

.slider{
    width: 100%;
}
div .formulaire{
    display:block;
    width: 50%;
}
.md-table-head-label {
    padding-left: 40%;
    size: 40%;
}
h2{
    font-size: 30px;
}
.nbResto{
    text-align: left;
    font-size:40px;
    
    
}
h1{
    font-size: 50px;
    
}
p{
    font-size: 20px;
    font: 2rem 'AmstelvarAlpha', sans-serif;
}
.explicationResto{
    font: 2rem 'AmstelvarAlpha', sans-serif;
    font-size: 18px;
}

</style>
