import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import Authservice from '../services/Authservice';

let api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        data:[],
        JobById:[],
        allJobs: [],
        fetchRemark: [],
        fetchUserFinish: []
    },
    getters: {
        posts: (state) => state.posts,
        jobs: (state) => state.data,
        job_filtered: (state) => {
            return state.JobById
        },
        getAllJobs: (state) => state.allJobs,
        getUserFinish: (state) => state.fetchUserFinish
    },
    mutations: {
        async fetch(state,{res}){
            state.data = (await res).data
        },
        async fetchById(state,{res}){
            state.JobById = (await res).data
        },
        addPost(state, post) {
            state.posts.unshift(post); 
        },
        // updatePost(state, res) {
        //     state.posts.forEach((post) => {
        //         if (post.id === res.id) {
                    
        //         }
        //     })
        // },
        setAllJobs(state, data) {
            state.allJobs = data;
        },
        addRemark(state, data) {
            state.fetchRemark = data
        },
        fetchUserFinishJob(state, data) {
            state.fetchUserFinish = data
        }
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
        async getJobByID(id) {
            let res = await Axios.get(`${api_endpoint}/api/jobs/${id}`);
            let body = res.data;
            return body;
        },
        async fetchJobById({ commit },id){
            console.log("---id---")
            console.log(id)
            let res = await Axios.get(`${api_endpoint}/jobs/${id}`)
            console.log((await res).data)
            console.log("fetchById")
            commit("fetchById",{ res })
        },
        async addRemarks({ commit }, payload) {
            let header = Authservice.getApiHeader();
            console.log("payload.id---", payload.id)
            console.log("payload.remark---", payload.remark)
            let body = {
                id: payload.id,
                remark: payload.remark
            }

            console.log("body.id---", body.id)
            console.log("body.remark---", body.remark)
            let res = await Axios.post(`${api_endpoint}/jobs/${payload.id}/apply-job`, body, header);
            commit("addRemark", {res})
            return res;
        },
        async fetchAllJobs ({ commit }) {
            try {
                let res = await Axios.get(`${api_endpoint}/get-all-jobs`);
                console.log(`line 82`, res.data)
                commit("setAllJobs", res.data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchUserFinish({ commit }, id){
            let res = await Axios.get(`${api_endpoint}/jobs/${id}/finish-job`);
            commit("fetchUserFinishJob", res)
        },
    }
})
