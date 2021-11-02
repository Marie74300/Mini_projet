<template>
    <div id="DetailRestaurant">
        <h1>Detail d'un restau qui a pour id :{{id}}</h1>

        <ul>
            <li>Nom: {{restaurant.name}}</li>
            <li>Cuisine: {{restaurant.cuisine}}</li>
            <li>Rue: {{restaurant.address.street}}</li>
            <li>Ville: {{restaurant.borough}}</li>
            
        </ul>
        
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

export default {
    name:"DetailRestaurant",
  
    props:{
        
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
        }

    },
   
     async mounted(){
        console.log("Avant affichage, on pourra faire un fetch");
        console.log("ID="+this.id);
        await this.fetchResto(this.id);
        
            
    },
    methods:{
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
       
        recupCoord(){
            const coord = ""+this.restaurant.address.coord;
            var splitcoord = coord.split(",");

            var latcoord = splitcoord[0];
            var longcoord = splitcoord[1];
            console.log("latitude: "+latcoord+","+"longitude:"+longcoord);
            this.center={lat: parseFloat(latcoord), lng : parseFloat(longcoord)};

        }
    }
};
</script>

<style scoped>

</style>