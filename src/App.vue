<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view class="child-view"></router-view>
    </transition>
    <book_footer></book_footer>
  </div>
</template>

<script>
 
  import book_footer from "./components/book_footer"
 

	export default{

    data(){
      return{
        show:""
      }
    },
  
    mounted () {
      this.$store.dispatch('initIMG');
      
      },
      components:{ 
          book_footer:book_footer
      }
	}




</script>

<style scoped>
.child-view{
   position: absolute;
  width:100%;

}
.introduce_content {
    padding-bottom: 2rem;
}
.slide-fade-active,.slide-fade-leave-active{
    transition: transform .5s;
        transform-origin: left;


  }
  .slide-fade,.slide-fade-leave-active{
    transform: scale(0,1);

  }
</style>
