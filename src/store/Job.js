import Axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

import Authservice from '../services/Authservice';

let api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: []
    },  
    getters: {
        jobs: (state) => state.data
    },
    mutations: {
        fetch(state, res) {
            state.data = res.data;
        },
        addPost(state, post) {
            state.data.unshift(post); 
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
            // let header = Authservice.getApiHeader();
            let res = await Axios.get(`${api_endpoint}/api/jobs`);
            commit("fetch", res);
        },

        async addPost({ commit }, payload) {
            let header = Authservice.getApiHeader();
            let res = await Axios.post(`${api_endpoint}/api/jobs`, payload, header);
            commit("addPost", res)
            return res;
        },

        async getJobByID(id) {
            let res = await Axios.get(`${api_endpoint}/api/jobs/${id}`);
            let body = res.data;
            return body;
        },



    
    }
})
