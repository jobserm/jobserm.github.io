import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import AuthService from "../services/Authservice";

let api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000";

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
            let header = AuthService.getApiHeader();
            let res = await Axios.get(`${api_endpoint}/api/categories`, header);
            commit("setCategories", res.data)
        },
    },
    
    modules: {},
})