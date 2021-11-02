<template>
    <div id="CarteDesPlats">
        <h1>Carte des plats du restaurants</h1>
        <ul>
            <li v-for="item in listegastrodessert" :key="item.plat">{{item.plat}}</li>
            
        </ul>
    </div>
</template>


<script>
import data from './CartesPlats/cartes_plats.json';
export default {
    name:"CarteDesPlats",
    props:{
       
    },
    data:function(){return{
          plats:null,  
            //creation des listes de tous les plats gatronomique
          listegastroplats:[],
          listegastrohdoeuvre:[],
          listegastrodessert:[],
            //creation des listes de tous les plats du midi
          listemidiplats:[],
          listemidihdoeuvre:[],
          listemididessert:[],
          
          
        }
    },
    
    methods:{
        //Ajouter tous les plats, dessert, hors d'oeuvre dans les listes gastro ou midi correspondantes
        AddintoList(){
            this.plats.forEach((e) => {
                if(e.type==='plat' && e.gastronomique==true){
                    this.listegastroplats.push(e);
                }
                else if(e.type==="hors d'oeuvre" && e.gastronomique==true){
                    this.listegastrohdoeuvre.push(e);
                }
                else if (e.type==="dessert" && e.gastronomique==true){
                    this.listegastrodessert.push(e);
                }
                else if (e.type==='plat' && e.gastronomique==false){
                    this.listemidiplats.push(e);
                }
                else if (e.type==="hors d'oeuvre" && e.gastronomique==false){
                    this.listemidihdoeuvre.push(e);
                }
                else{
                    this.listemididessert.push(e);
                }
                
            });
        },

    },
    mounted (){
        this.plats=data.carte_plats;
        this.AddintoList();
    }
};
</script>

<style scoped>
h1{
    color:blueviolet;
}
</style>