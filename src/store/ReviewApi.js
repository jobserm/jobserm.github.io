import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import backendInstance from "../services/backendInstance";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],
        postsReview: []
    },

    getters: {
        reviews: (state) => state.data,
        getReviews: (state) => state.postsReview
    },

    mutations: {
        setData(state, res) {
            state.data = res;
        },
        setReview(state, res) {
            state.data = res
        }
    },

    actions: {
        async fetchData({ commit }) {
            let res = await backendInstance.get(`/api/reviews`);
            commit("setData", res)
        },
        async addReview({ commit }, payload) {
            let body = {
                comment: payload.comment,
                rating: payload.rating,
                id: payload.id
            }
            let res = await backendInstance.post(`/api/reviews`, body);
            console.log("-----------", res)
            commit("setReview", res.data); 
            return res;
        },
        // async addReview({ commit }, id) {
        //     let res = await Axios.get(`${api_endpoint}/api/jobs/${id}/finish-job`);
        //     commit("addReview", res.data); 
        //     return res;
        // },
        async paginate({ commit }, route){
            let res = backendInstance.get(route)
            commit("fetch", { res })
        },
    },
    
    modules: {},
})