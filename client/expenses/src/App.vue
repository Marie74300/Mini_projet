<template>
  <div id="app">

      <nav class="navbar navbar-expand-lg fixed-top row">
        
        <router-link tag="li" class="col" class-active="active" to="/" style="margin-right:10%; ">Home</router-link>
        <router-link tag="li" class="col" class-active="active" to="/Newcompo" style="margin-right:10%;">Newcompo</router-link>
        <router-link tag="li" class="col" class-active="active" to="/Restaurant" style="margin-right:10%;">DetailRestaurant</router-link>
        <router-link tag="li" class="col" class-active="active" to="/GoogleMap" style="margin-right:10%;">GoogleMap</router-link>
        
    </nav>
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
