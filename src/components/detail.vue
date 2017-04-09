<template>
   <div class="article">
      <p><i class="icon-font i-v-left icon-left" @click="hide"></i> {{Data.article.man[id].title}}</p>
      <div>
            {{Data.article.man[id].text}}

      </div>
      
   </div>
</template>

<script>

  export default{
   
  	created(){
      this.id=this.$route.query.id
  	},
    computed:{
         Data(){
             return this.$store.getters.Data;
          }
      },
   methods:{
     hide(){
       window.history.go(-1)
      }
    }
  }

</script>
<style scoped>
	.article{text-align: center}
  .article>p{
        height: 1.6rem;
    color: #fff;
    text-align: center;
    line-height: 1.6rem;
    background: green;
    width: 100%;
    z-index: 2;
  }
  .article div{padding:0.5rem;line-height:1rem;text-align:left;text-indent: 2em;}
</style>