<template>
	<div class="swiper-container">

        <div class="swiper-wrapper" >

            <div class="swiper-slide" v-for="item in Data.swiper" >
              <img v-bind:src="item.img">
           </div>
         
           
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>


</template>
<script>
	import "../static/js/swiper.min.js"
	import "../static/css/swiper.min.css"
     export default{
        computed:{
          Data(){
             return this.$store.getters.Data   
          }
        },
    
        mounted(){
            
          var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
                autoplay: 5000,
                loop: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true
		    });
        }
     }


</script>
<style scoped>
	.swiper-wrapper img{width: 100%;height: 6rem}
     .swiper-container{margin-top: 0rem;height: 6rem}	

</style>