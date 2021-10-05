<template>
    <div id="Newcompo">
        <h1>Hello je suis la nouvelle compooo:{{msg}}</h1>
    </div>
</template>


<script>
export default {
    name:"Newcompo",
    props:{
        msg:String
    }
};
</script>

<style scoped>
h1{
    color:blueviolet;
}
</style>