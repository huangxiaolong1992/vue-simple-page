
const state={
	Data:[]

  
};

import * as types  from './types';

import getters from  './getters' 

const mutations={
   [types.FETCH_IMG]:(state,res ) => {
      state.Data = res;
    }
   
}

export default{
	state,
	mutations,
	getters
}