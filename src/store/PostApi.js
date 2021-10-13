import Vue from 'vue'
import Vuex from 'vuex'

import PostService from '@/services/PostService'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: []
    },
    getters: {
        posts: (state) => state.posts
    },
    mutations: {
        fetch(state, res) {
            state.posts = res;
        },
        addPost(state, post) {
            state.posts.unshift(post); //?? what is unshift 
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
            let res = await PostService.getAll();
            commit("fetch", res.data);
        },
        async addPost({ commit }) {
            let res = await PostService.post("jobs", payload);
            commit("addPost", res.res.data)
            return res;
        }
    }
})
