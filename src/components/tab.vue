<template>
	<ul class="type">
      <li>
      	<img src="../static/images/man.jpg" >
      	<p>男生</p>
      </li>
      <li>
      	<img src="../static/images/woman.jpg" index="1">
      	<p>女生</p>
      </li>
    </ul>

</template>
<style scoped>
.type {
    display: flex;
    display: -webkit-flex;
    margin-top: 0.3rem;
    padding: 0.2rem 0;
    box-shadow: 0 2px 5px #ebebeb;
   }
  .type li {
    flex: 1;
    -webkit-flex: 1;
    text-align: center;
}
  .type li img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    box-shadow: 0 1px 5px #7d7b7b;
}
.type li p {
    margin-top: 0.5rem;
    color: #666;
}

</style>