import Vue from 'vue' 
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import main from "../components/router_main"
import detail from "../components/detail"
import more from "../components/more"
import person from "../components/person"
import login from "../components/login"

const routes=[
   { path: '/',  component: login },
   { path: '/main',  component: main },
   { path: '/detail',  component: detail },
   { path: '/more',  component: more },
   { path: '/person',  component: person }

];

const router=new VueRouter({
	routes
})


export default router