import Vue from "vue";
import Vuex from "vuex";
import backendInstance from "../services/backendInstance";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        categories_after_remove: []
    },

    getters: {
        getCategories: (state) => state.categories,
    },

    mutations: {
        setCategories(state, res) {
            state.categories = res;
        },
        removeCategory(state, data) {
            state.categories_after_remove = state.categories_after_remove.map((category) => category.id != data.id);
        },
    },

    actions: {
        async fetchData({ commit }) {
            let res = await backendInstance.get(`/api/categories`);
            commit("setCategories", res.data)
        },

        async removeCategory({ commit }, id) {
            let res = await backendInstance.delete(`api/categories/${id}`)
            commit("removeCategory", res.data)
        }
    },
    
    modules: {},
})