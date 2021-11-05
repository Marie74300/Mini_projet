<template>
  <div id="app" style="margin:0; " >
      
       <md-tabs class="md-primary" md-alignment="centered" md-sync-route>
        <md-tab id="tab-home" md-icon="home" to="/"> </md-tab>
        <md-tab id="tab-pages" md-icon="search" to="/Rechercherestaurant"></md-tab>
      </md-tabs>
      
        <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0000;
  margin-top: 60px;
  
}
nav li:hover,
   nav li:active{
      background-color:rgb(20, 69, 230);
      cursor: pointer;
      color: rgb(228, 13, 13);
    }
nav li {
  
  display: inline-block;
  color: rgb(219, 28, 28);
  border-radius: 10%;
  size: 10%
  
}
nav{
  background-color: rgb(221, 61, 12);
  
}

</style>
