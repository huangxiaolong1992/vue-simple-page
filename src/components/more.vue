<template>
  
  	<div class="introduce_content">
  	 <more_header></more_header>
     <div class="introduce_content_1">
    	<div class="introduce">
            
            <ul class="introduce_ul">
               <li class="clearfix" v-for="item in Data.more.man">
                 <router-link :to="{path:'detail',query:{id:item.id}}">
                 <img v-bind:src="item.cover" class="book-cover">
                 <div class="book-text">
                     <p>{{item.title}}</p>
                     <div class="book-cell">
                        {{item.summary}}
                     </div>
                     <span class="book-auto">
                     	<i class="icon-font i-user-border"></i>
                     	<em>{{item.autor}}</em>
                     	<i class="book-style">{{item.style}}</i>
                     	<i class="book-state">{{item.state}}</i>
                     </span>
                 </div>
                </router-link>
               </li>

            </ul>
        </div>

       </div>
    </div>


</template>
<style scoped>
	  .introduce{
       	border-bottom: 1px solid #eee;
       	margin-top: 0.3rem;
       	padding-top: 0.2rem
       
       }
       .introduce>p{
       	
       	font-size: 0.7rem;color: #666;
       	padding: 0.5rem;
       	position: relative;
       }
       .introduce>p span{
       	display:block;border-left: 2px solid #ed424b;  
         padding-left: 0.2rem
         }
    .introduce>p a{position: absolute;right: 0.5rem;top:0.55rem;color: #969ba3;font-size: 0.6rem}
   .more{font-size: 0.6rem;margin-left: 0.1rem}
   .book-cover {
		   
		    float: left;
		    width: 4rem;
		    height: 5rem;
		    margin-right: .5rem;
		    box-shadow: 0 1px 3px rgba(0,0,0,.3);
		}
		.book-text{overflow: hidden;}
			.book-cell{
		    line-height: 0.8rem;
		    display: -webkit-box;
		    height: 2.5rem;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp: 3;
		    font-size: 0.5rem;
		     color: #969ba3;
		     overflow: hidden;
		     margin-top: 0.6rem;
		     margin-bottom: 0.4rem

		     
	  }
	  .introduce_content>p{
	  	    height: 1.6rem;
		    color: #fff;
		    text-align: center;
		    line-height: 1.6rem;
		    background: linear-gradient(to right,green, #3fe8b0);
		   
		    width: 100%;
		    left: 0;
		    top: 0
	  }
	  .introduce_ul{
	  	padding:0 0.5rem
	  }
	  .book-auto{
	  	color:#969ba3;

	  }
	  .book-auto em{font-size: 0.5rem}

	  .introduce_ul li{margin-bottom: 1rem}

	 .book-style{    font-size: 0.5rem;
    border: 1px solid #ccc;
    position: absolute;
    right: 2.6rem;padding:1px 2px;border-radius: 2px}
    
    .book-state{
	     font-size: 0.5rem;
	    border: 1px solid #ed424b;
	    position: absolute;
	    right: 1rem;padding:1px 2px;border-radius: 2px;
	    color:#ed424b;
    }
    .introduce_content{
    	padding-bottom: 2rem
    }
	.icon-left{font-size:0.7rem;}
	.person span{display:inline-block;margin-left:1.2rem;font-size:0.65rem}
	.person em{display:inline-block;width:9rem;background:#68bc68;border-radius:0.2rem;text-align:left;padding-left:0.5rem;margin-left:2rem}

  .book-text>p{color:black}
</style>
<script>
  import  more_header from "./book_header.vue"

  export default{
    computed:{
         Data(){
             return this.$store.getters.Data   

          }
      },
     components:{
      more_header: more_header
    }
  } 
 

</script>