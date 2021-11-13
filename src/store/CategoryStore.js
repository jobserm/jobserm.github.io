import Vue from "vue";
import Vuex from "vuex";
import backendInstance from "../services/backendInstance";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        categories_after_remove: [],
        category: {}
    },

    getters: {
        getCategories: (state) => state.categories,
        getCategory: (state) => state.category,
    },

    mutations: {
        setCategories(state, res) {
            state.categories = res;
        },
        removeCategory(state, data) {
            state.categories_after_remove = state.categories_after_remove.map((category) => category.id != data.id);
        },
        setCategory(state, res) {
            state.category = res;
        }
    },

    actions: {
        async fetchData({ commit }) {
            let res = await backendInstance.get(`/api/categories`);
            commit("setCategories", res.data)
        },

        async removeCategory({ commit }, id) {
            let res = await backendInstance.delete(`api/categories/${id}`)
            commit("removeCategory", res.data)
        },

        async fetchCategoryById({ commit }, id) {
            let res = await backendInstance.get(`/api/categories/${id}`)
            commit("setCategory", res.data)
        },

        async editCategory({ commit }, body) {
            let res = await backendInstance.put(`/api/categories/${body.id}`, body)
        },

        async addCategory({ commit }, body) {
            let res = await backendInstance.post(`/api/categories/`, body)
        }
    },
    
    modules: {},
})