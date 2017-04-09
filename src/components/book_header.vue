<template>
<div>
 <div v-if="showor">
	 <header>
     <div class="person"><span>位置</span><em>搜索</em></div>
   </header>
  </div>
  <div v-else>
    <header>
       <i class="icon-font i-v-left icon-left" @click="hide"></i> 
       <div class="person">{{title}}</div>
    </header>
  </div>
</div>
</template>
<style scope>
   
  .person em {
    display: inline-block;
    width: 9rem;
    background: #68bc68;
    border-radius: 0.2rem;
    text-align: left;
    padding-left: 0.5rem;
    margin-left: 2rem;
}
.person span {
    display: inline-block;
    margin-left: 1.2rem;
    font-size: 0.65rem;
}
header{
   height: 1.6rem;
     color: #fff;
    text-align: center;
    line-height: 1.6rem;
    background:green;
  	width: 100%;
  	
  	z-index: 2
   }

  header span{

  	position: absolute;
  	left: 0.5rem;
  }
  header div{
    display: block;    
    height: 1.1rem;
    line-height: 1.1rem;
    color: white;
    border: 0;
    padding-top: 0.25rem;
    font-size: 0.55rem;

  }
  header .seach{
  	text-align: left;
  	 background-color: rgb(53,167,53);
  	  border-radius: 0.2rem;
  	  width: 70%;
  	  margin-left: 2.6rem;
  	  padding-left: 0.4rem;
  }

  .icon-left{
  	    position: absolute;
    left: 0.5rem;
  }

</style>
<script>
 export default{
    data(){
     return{
       showor:"",
       title:""
     }
   },
    mounted(){    
     if(this.$route.path=="/main"){  
          this.showor=true
        }else if(this.$route.path=="/person"){
           this.showor=false
           this.title="个人主页"
        } else if(this.$route.path=="/more"){

           this.showor=false
           this.title="查看更多"
        }
   },
        
    methods:{
     hide(){
       window.history.go(-1)
      }
    }
 }
</script>
