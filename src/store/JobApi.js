import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = "http://127.0.0.1:8000/api"
Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        data:[]
    },
    getters:{
        jobs: (state) => state.data,
    },
    mutations:{
        async fetch(state,{res}){
            state.data = (await res).data
        }
    },
    actions:{
        async fetchJob({ commit }){
            console.log("api")
            let res = Axios.get(api_endpoint + "/jobs")
            console.log((await res).data)
            console.log("api")
            commit("fetch",{ res })
        },
        async paginate({commit},route){
            let res = Axios.get(route)
            console.log("route")
            console.log(route)
            console.log("data from url")
            console.log((await res).data)
            commit("fetch",{ res })
        }
    }

})