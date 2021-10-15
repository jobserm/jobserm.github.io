import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import Authservice from '../services/Authservice';

let api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        data:[]
    },
    getters: {
        posts: (state) => state.posts,
        jobs: (state) => state.data,
    },
    mutations: {
        async fetch(state,{res}){
            state.data = (await res).data
        },
        addPost(state, post) {
            state.posts.unshift(post); 
        },
        // updatePost(state, res) {
        //     state.posts.forEach((post) => {
        //         if (post.id === res.id) {
                    
        //         }
        //     })
        // }
    },
    actions: {
        async fetchData({ commit }) {
            let header = Authservice.getApiHeader();
            let res = await Axios.get(`${api_endpoint}/jobs`, header);
            commit("fetch", res);
        },
        async addPost({ commit }, payload) {
            let header = Authservice.getApiHeader();
            let res = await Axios.post(`${api_endpoint}/jobs`, payload, header);
            commit("addPost", res)
            return res;
        },
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
        },
        async fetchJobById({ commit },id){
            console.log("---id---")
            console.log(id)
            let res = Axios.get(`${api_endpoint}/jobs/`,id)
            console.log(res)
            console.log("api")
            commit("fetch",{ res })
        },

    }
})
