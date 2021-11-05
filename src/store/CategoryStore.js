import Vue from "vue";
import Vuex from "vuex";
import backendInstance from "../services/backendInstance";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
    },

    getters: {
        getCategories: (state) => state.categories,
    },

    mutations: {
        setCategories(state, res) {
            state.categories = res;
        },
    },

    actions: {
        async fetchData({ commit }) {
            let res = await backendInstance.get(`/api/categories`);
            commit("setCategories", res.data)
        },
    },
    
    modules: {},
})