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
  color: #2c3e50;
  margin-top: 60px;
  
}
nav li:hover,
   nav li:active{
      background-color:white;
      cursor: pointer;
      color: black;
    }
nav li {
  
  display: inline-block;
  color: white;
  border-radius: 10%;
  size: 10%
  
}
nav{
  background-color: rgb(95, 168, 197);
  
}

</style>
