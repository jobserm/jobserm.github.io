import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import AuthService from "../services/Authservice";

let api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000";

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
            let res = await Axios.post(`${api_endpoint}/api/reviews`, payload);
            commit("addReview", res.data); 
            return res;
        },
        // async addReview({ commit }, id) {
        //     let res = await Axios.get(`${api_endpoint}/api/jobs/${id}/finish-job`);
        //     commit("addReview", res.data); 
        //     return res;
        // },
        async paginate({ commit }, route){
            let res = Axios.get(route)
            commit("fetch", { res })
        },
    },
    
    modules: {},
})