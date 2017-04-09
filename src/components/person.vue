<template>
	<div class="person">
    <person_header></person_header>
    <div class="person-content">
       <img src="../static/images/man.jpg">
       <span>{{password}}</span>
     <i class="icon-font i-v-right icon-right"></i>
      
  </div>
  
   <ul class="person-information">
       <li><i class="i-list-index"></i>我的收藏<i class="icon-font i-v-right icon-right"></i></li>
       <li><i class="icon-font i-comment"></i>我的消息<i class="icon-font i-v-right icon-right"></i></li>
     </ul>

    </div>
</template>
<style scoped>
	.person-content{padding: 0.5rem 0.5rem 0.5rem 0.5rem;position: relative;}
     .person-content img{width: 2.6rem;height: 2.6rem;border-radius: 50%}
   .person-content span{color:#333;margin-left: 0.5rem;font-size: 0.7rem}

   .icon-right{position: absolute;right: 0.5rem;top: 1.5rem;color:#999;}
   .person-information{border-top: 0.3rem solid #f4f4f4;}
   .person-information li{
    position: relative;
    height: 2rem;
    line-height: 2rem;
    border-bottom:1px solid #eee;
    padding:0 0.5rem;
   }
   .person-information li .icon-right{top: 0}
   .person-information i{display: inline-block;width:1rem;font-size: 0.8rem}
   .i-comment{color:red;}
   .i-list-index{color:#2173ee;}
   .i-v-left{color:white;}
</style>

<script>
  import  person_header from "./book_header.vue"
  export default{
   
     computed:{
        password(){
         return localStorage.getItem("username")
        }
     },

    components:{
      person_header: person_header
    }
  }
  
</script>