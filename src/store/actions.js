
import Vue from 'vue';

import * as types  from './types';
export default{
	  initIMG: ({ commit }) => {
       Vue.http.get("/src/data/data.json").then((response) => {
          var res=response.body;
          commit(types.FETCH_IMG, res)
      
        })
   }
}