<template>

	<div class="login">
    <span class="no_empty" v-if="show">请输入账号或密码</span>

       <div class="book">
         书 城
       </div>

       <p>

       	<input type="text" placeholder="账号"  v-model="username">
       </p>
      
       <p>
     
       	<input type="text" placeholder="密码" v-model="password">
       </p>
      
         <a href="javascript:;" class="login_1" @click="login" >登录</a>
      
        <ul>
          <li>
            <i class="icon-font i-qq-border"></i>
            <p>QQ登录</p>
          </li>
          <li>
            <i class="icon-font i-weixin-border"></i>
            <p>微信登录</p>
          </li>
        </ul>
    </div>

</template>
<style scoped>
	 .login{
    	text-align: center
    }
    .login>p{margin-top: 1rem}
     input{
     	width: 70%;
     	padding-left: 0.2rem;
     	background: #F6F7F9;
     	border-radius:4px;
     	height: 1.4rem;
     	border:1px solid #e0e0e0;
      font-size: 
     }
    .login_1{
       background: #ED424B;
        margin: 1rem 0 0.1rem;
	    height: 1.4rem;
	    line-height: 1.4rem;
	    border-radius: 1rem;
	    display: inline-block;
	    width: 72%;
        font-size: 0.7rem;
        color: white
	  }
	  .book{text-align: center;font-size:1rem;font-weight: bold;margin-top: 3.5rem;color: green}
	  .login ul{width:70%;margin:1.8rem auto;display: flex;display: -webkit-flex}
	  .login ul li {flex: 1;-webkit-flex:1;}
	  .login ul li p{font-size: 0.6rem;margin-top: 0.4rem;color:#6b6b6b;}
	  .login ul li i{font-size: 1.2rem;}
	  .i-qq-border{color: blue}

	  .i-weixin-border{color: green}
	  
    .no_empty{position: absolute;display: block;width: 6rem;height: 1.8rem;text-align: center;line-height: 1.8rem;border-radius: 0.5rem;background: rgba(0,0,0,0.8);color: white;top: 50%;left: 50%;margin-top: -1rem;margin-left: -3rem}
   
    .no_empty{
      animation:my_opacity 3s ;
     -webkit-animation:my_opacity 3s ; 
    opacity: 0
    }
   @keyframes my_opacity{
      0% { opacity: 0;}
      30%{ opacity: 1;}
      60%{ opacity: 1;}
     100% {opacity: 0}
   }
   
</style>
<script>
  export default{
    data(){
      return{
        password:'',
        username:'',
        show:false
      }
    },
    methods:{
      login(){
        if(this.username =="" || this.password=="" ){
          this.show=true
        }else{
          localStorage.setItem("username",this.username);
          this.$router.push({path:'main'})
        }   
      }
     }
  }


</script>