import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import backendInstance from '../services/backendInstance'

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
            let res = backendInstance.get("/api/jobs")
            console.log((await res).data)
            console.log("api")
            commit("fetch",{ res })
        },
        async paginate({commit},route){
            let res = backendInstance.get(route)
            console.log("route")
            console.log(route)
            console.log("data from url")
            console.log((await res).data)
            commit("fetch",{ res })
        },
        async fetchJobById({ commit }){
            console.log("api")
            let res = backendInstance.get("/api/jobs")
            console.log((await res).data)
            console.log("api")
            commit("fetch",{ res })
        },
    }

})