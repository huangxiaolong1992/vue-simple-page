<template>

	<div >
      <book_header ></book_header>
     
      <swiper></swiper>

      <tab></tab>
   
      <recommend_article></recommend_article>
    </div> 
  
</template>
<script>
   import book_header from "./book_header"
  import swiper from "./swiper"
  import tab from "./tab"
  import recommend_article from "./recommend_article"
  export default{
  
  	components:{
          book_header:book_header,
          swiper:swiper,
          tab:tab,
          recommend_article:recommend_article

      }
  }
</script>
