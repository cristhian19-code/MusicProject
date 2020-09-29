import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	response: null
  },
  mutations: {
	getMusic(state,paylist){
		state.response = paylist;	
	}
  },
  actions: {
  	async Search({commit},search){
  		axios({
	        "method":"GET",
	        "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
	        "headers":{
	        "content-type":"application/octet-stream",
	        "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
	        "x-rapidapi-key":"c750f476e6mshf8d1c90e5b2142bp17510cjsn09f1faa45bb3",
	        "useQueryString":true
	        },"params":{
	        "q": search
	        }
        })
        .then((response) => {
          	return response.data;
        })
        .then(async res => {
        	console.log(res.data)
			commit('getMusic',res.data);
        })
        .catch((error)=>{
          	console.log(error)
        })
  	}
  }
})
