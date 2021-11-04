<template>
    <div id="bb">
        <div class="bienvenue">
            <h1>Bienvenue sur BB (bouffebien.com)</h1>
           <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
                <md-card>
                <el-carousel
                    trigger="click"
                    :interval="5000">
                    <el-carousel-item v-for="item in carousel" :key="item.image">
                    <h4 class="carousel-caption">
                        <md-icon>location_on</md-icon>
                        {{item.title}}
                    </h4>
                    <img :src="item.image" alt="">
                    </el-carousel-item>
                </el-carousel>
                </md-card>
            </div>
            </div>

                
        </div>
    </div>
</template>


<script>


export default {
    name:"BB",
     data() {
     return {
       carousel: [
           {image:"https://media-cdn.tripadvisor.com/media/photo-s/12/96/4b/a3/la-terrasse-au-coucher.jpg",title:'1'},
           {image:"https://www.sortiraparis.com/images/80/91874/582754-photos-le-cafe-de-l-homme.jpg",title:"2"},
           {image:"https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_sqGSCzb.jpg",title:"3"}
            
       ]
     }
     }
    
};
</script>

<style scoped>
h1{
    color:blueviolet;
}
</style>