<template>

	<footer v-show="isShow">
    	<ul class="footer-ul">
           <li>
           <router-link to="/main">
           	 <i class="icon-font i-home"></i>
           	 <p>主页</p>
            </router-link>
           </li>
          
           <li>
           	 <i class="icon-font i-home"></i>
           	 <p>主页</p>
           </li>

           <li>
            <router-link to="/person">
           	 <i class="icon-font i-user-border"></i>
           	 <p>个人</p>
            </router-link>
           </li>
        </ul>
    </footer>
</template>

<style scope>
   footer{
   height: 2rem;
     color: #fff;
    text-align: center;
    line-height: 1.6rem;
    background:white;
    position: fixed;
  	width: 100%;
  	left: 0;
  	bottom: 0;
  	box-shadow:0 -1px 5px #eaeaea
   }

  .footer-ul{display: flex;display: -webkit-flex;background: white}
   .footer-ul li{
   	flex: 1;
   	-webkit-flex:1;
   	color: #999;
   	font-size: 0.5rem;
   	line-height: 0.9rem
   }
.footer-ul i{padding-top: 0.2rem;display: block;}

.footer-ul li>a{color:#999;}

.router-link-active{
  color:green!important;
}
</style>

<script>
  export default{
     
     computed: {  
       isShow(){
       if(this.$route.path=="/"){
          return this.isShow=false
       }else{
        return this.isShow=true
       }
      
    }
  }
 }
 


</script>