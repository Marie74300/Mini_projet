<template>
    <div id="Restaurant">
        <h1>Detail d'un restau qui a pour id :{{id}}</h1>

        <ul>
            <li>Nom: {{restaurant.name}}</li>
            <li>Cuisine: {{restaurant.cuisine}}</li>
            <li>Rue: {{restaurant.address.street}}</li>
            <li>Ville: {{restaurant.borough}}</li>
            
        </ul>
        <GmapMap
            :center="recupCoord()"
            :zoom='12'
            
            style='width:100%;  height: 400px;'
            
        />
        
    </div>
</template>


<script>
export default {
    name:"Restaurant",
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
            center: { lat:46.07147 , lng: 6.55944 },
            
        }

    },
    mounted(){
        console.log("Avant affichage, on pourra faire un fetch");
        console.log("ID="+this.id);
        let url = "http://localhost:8080/api/restaurants/"+this.id;

        fetch(url)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data.restaurant.name);
                this.restaurant=data.restaurant;
            })
    },
    methods:{

        geolocate: function() {
           
        navigator.geolocation.getCurrentPosition(position => {
            this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };
        });
        
        },
        addMarker() {
        
        },
        recupCoord(){
            const coord = ""+this.restaurant.address.coord;
            console.log("coordonnées"+coord);
            var splitcoord = coord.split(",");

            var latcoord = splitcoord[0];
            var longcoord = splitcoord[1];
            console.log("latitude: "+latcoord+","+"longitude:"+longcoord);

            return "{ lat:"+latcoord+", lng:"+longcoord+"}";
        },
    }
};
</script>

<style scoped>

</style>