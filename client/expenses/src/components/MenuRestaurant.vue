<template>
   <div id="MenuRestaurant">
         <!--<h1>Menus du restaurant</h1>-->
        
    </div>
</template>

<script>
//import listegastrodessert from './CarteDesPlats.vue';
export default {
    name:"CarteDesPlats",
    props:{
       
    },
    components:{
      //  listegastrodessert
    },
     data:function(){return{
          plats:null,  
            //creation des listes de tous les plats gatronomique
          /*listegastroplats:[],
          listegastrohdoeuvre:[],
          listegastrodessertmenu:[],
            //creation des listes de tous les plats du midi
          listemidiplats:[],
          listemidihdoeuvre:[],
          listemididessert:[],
*/
          
          
        }
    },
   methods:{
       CreateMenu(gastronomique){
           if(gastronomique){
            //this.listegastrodessertmenu=this.listegastrodessert;
            
            }
           
       }
    },

    mounted (){
        this.CreateMenu(false);
        this.CreateMenu(true);
        
    }
}
</script>
<style scoped>
h1{
    color:red;
}
</style>