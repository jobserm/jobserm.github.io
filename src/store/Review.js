import Vue from "vue";
import Vuex from "vuex";
import Postservice from "../services/PostService";
import AuthService from "../services/AuthService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
    },

    getters: {
        reviews: (state) => state.data,
    },

    mutations: {
        setData(state, res) {
            state.data = res;
        },
    },

    actions: {
        async fetchData({ commit }) {
            let header = AuthService.getApiHeader();
            let res = await Axios.get(`${api_endpoint}/api/reviews`, header);
            commit("setData", res)
        },

        async addReview({ commit }, payload) {
            let res = await Postservice.post("reviews", payload);
            commit("addReview", res.data); ///????
            return res;
        }
    },
    
    modules: {},
})