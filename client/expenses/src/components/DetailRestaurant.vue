<template>
    <div id="DetailRestaurant">
        <h1>Detail d'un restau qui a pour id : {{id}}</h1>
        <img :src="this.urlImage"/>
        <ul>
            <li><b>Nom:</b> {{restaurant.name}}</li>
            <li><b>Cuisine:</b> {{restaurant.cuisine}}</li>
            <li><b>Rue:</b> {{restaurant.address.street}}</li>
            <li><b>Ville:</b> {{restaurant.borough}}</li>
           
            
        </ul>
        <!-- Recuperation de la cartes des plats-->
        <carte-des-plats/> 
        <menu-restaurant/>
        <!-- Affichage de la position sur plan du restaurant-->
        <GmapMap
            :center='center'
            :zoom='8'
            style='width:100%;  height: 400px;'
        >
        <GmapMarker
            :position='center'
          />
       
        </GmapMap>
        
        
        
    </div>
</template>


<script>
import CarteDesPlats from './CarteDesPlats.vue';
import MenuRestaurant from './MenuRestaurant.vue';

const GoogleImages = require('google-images');

const client = new GoogleImages('4693ac58732c81ac9', 'AIzaSyAuWMgnu2rK7rhrgEAIoKWVnqurYAiyQ9M');


export default {
    
    name:"DetailRestaurant",
  
    props:{
        
    },
    components:{
        CarteDesPlats,
        MenuRestaurant,
    },
    computed:{
        id(){
            return this.$route.params.id;
        }
    },
    data: function(){
        return{
            restaurant:null, 
            center: { lat:120 , lng: 120},
            urlImage:null,
            
        }

    },
   
  
    methods:{
        // recupere les données du restaurant
        async fetchResto(id){
            let url = "http://localhost:8080/api/restaurants/"+id;
            
            await fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data.restaurant.nom);
                    this.restaurant=data.restaurant;
                this.recupCoord();
                })
        },
       //recupère les coordonnées du restaurant est assigné le centre ou doit se positionner le marker de la carte
        recupCoord(){
            const coord = ""+this.restaurant.address.coord;
            var splitcoord = coord.split(",");

            var latcoord = splitcoord[0];
            var longcoord = splitcoord[1];
            console.log("latitude: "+latcoord+","+"longitude:"+longcoord);
            this.center={lat: parseFloat(latcoord), lng : parseFloat(longcoord)};

        },
        searchImage(){
            window.setImmediate = window.setTimeout;
            client.search('restaurants'+ this.restaurant.name)
            .then(images => {
                this.urlImage=images[0].url;
        
           
         
            });
        }
    },
    //mise en place du mounted en asynchrone afin d'attendre que le fetch recupere toutes les données pour les afficher dont la position de la map 
     async mounted(){
        console.log("Avant affichage, on pourra faire un fetch");
        console.log("ID="+this.id);
        await this.fetchResto(this.id);
       await this.searchImage();
        
            
    }
};
</script>

<style scoped>
li{
    text-align: left;
    margin: 2%;
}
</style>