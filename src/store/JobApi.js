import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import Authservice from '../services/Authservice';

const auth_key = process.env.VUE_APP_AUTH_KEY || 'auth-jobserm';
let api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000/api";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        data:[],
        JobById:[],
        allJobs: [],
        JobSuggest:[],
        fetchRemark: [],
        fetchUserFinish: [],
        jobByUser:[],
        jobFromSearch:[],
    },
    getters: {
        posts: (state) => state.posts,
        jobs: (state) => state.data,
        job_filtered: (state) => {
            return state.JobById
        },
        getAllJobs: (state) => state.allJobs,
        getJobSuggest: (state) => state.JobSuggest,
        getUserFinish: (state) => state.fetchUserFinish,
        getJobByUser: (state) => state.jobByUser,
        getJobById: (state) => state.JobById,
        getJobFromSearch: (state) => state.jobFromSearch
    },
    mutations: {
        async fetch(state,{res}){
            state.data = (await res).data
        },
        async fetchById(state,{res}){
            state.JobById = (await res).data
        },
        async fetchSuggest(state,{res}){
            state.JobSuggest = (await res).data
        },
        async fetchByUser(state,{res}){
            state.jobByUser = (await res).data
        },
        async fetchFromSearch(state,{res}){
            state.jobFromSearch = (await res).data
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
        },
        setJobById(state, data) {
            state.JobById = data
        },
        removeJob(state, data) {
            state.allJobs = state.allJobs.map(job => job.id != data.id)
        }
    },
    actions: {
        async fetchJobSuggest({ commit },id){
            console.log("fetchJobSuggest")
            console.log("---id---",id)
            let body = {
                id:id
            }
            let res = await Axios.post(`${api_endpoint}/jobs/${id}/get-rand-jobs`,body)
            console.log("JobSuggest",(await res).data )
            console.log("fetchJobSuggest")
            commit("fetchSuggest",{ res })
        },
        async fetchData({ commit }) {
            let header = Authservice.getApiHeader();
            let res = await Axios.get(`${api_endpoint}/jobs`, header);
            commit("fetch", res);
        },
        async postJob({ commit }, payload ) {
            try {
                let jwt = JSON.parse(localStorage.getItem(auth_key))
                console.log(jwt)
                let res = await Axios.post(`http://localhost:8000/api/jobs`, payload, { 
                    headers: {
                        'Authorization': `Bearer ${jwt.access_token}`
                    }
                })
                if (res.status === 201) {
                    return {
                        success: true
                    }
                }
            } catch (e) {
                //console.log(payload)
                return {
                    success: false,
                    message: "ตรวจสอบฟอร์มกรอกข้อมูลอีกครั้ง"
                }
            }
        },
        async fetchJob({ commit }){
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
        async getJobByID({ commit }, id) {
            let res = await Axios.get(`${api_endpoint}/jobs/${id}`);
            let body = res.data;
            return body;
        },
        async fetchJobById({ commit },id){
            console.log("---id---")
            console.log(id)
            try {
                let res = await Axios.get(`${api_endpoint}/jobs/${id}`)
                commit("fetchById",{ res })
                console.log((await res).data)
            } catch (e) {
                console.log(e.message)
            }
            console.log("fetchById")
        },
        async fetchJobFromSearch({ commit }, payload){
            let body={
                province:payload
            }
            console.log("body",payload)
            try {
                let res = await Axios.post(`${api_endpoint}/get-job-from-search`,body)
                commit("fetchFromSearch",{ res })
                console.log((await res).data)
            } catch (e) {
                console.log(e.message)
            }
            console.log("fetchJobFromSearch")
        },
        async fetchJobUserId({ commit },id){
            console.log("---id---")
            console.log(id)
            let body={
                id:id
            }
            let res = await Axios.post(`${api_endpoint}/get-job-by-user-id`,body)
            console.log((await res).data)
            console.log("fetchByUser")
            commit("fetchByUser",{ res })
            console.log("fetchByUser",)
        },
        async addRemarks({ commit }, payload) {
            let header = Authservice.getApiHeader();
            console.log("payload.id---", payload.id)
            console.log("payload.remark---", payload.remark)
            let body = {
                id: payload.user_id,
                remark: payload.remark
            }

            console.log("body.id---", body.id)
            console.log("body.remark---", body.remark)
            let res = await Axios.post(`${api_endpoint}/jobs/${payload.job_id}/apply-job`, body);
            console.log("res",res)
            commit("addRemark", {res})
            return res;
        },
        async fetchAllJobs ({ commit }) {
            try {
                let jwt = JSON.parse(localStorage.getItem(auth_key))
                let res = await Axios.get(`${api_endpoint}/get-all-jobs`, { 
                    headers: {
                        'Authorization': `Bearer ${jwt.access_token}`
                    }
                });
                console.log(`line 82`, res.data)
                commit("setAllJobs", res.data)
            } catch (e) {
                console.log(e)
            }
        },
        async fetchUserFinish({ commit }, id){
            let res = await Axios.get(`${api_endpoint}/jobs/${id}/finish-job`);
            console.log("finish job =>",res)
            commit("fetchUserFinishJob", res)
        },
        async fetchJobByID({ commit }, { headers, id }) {
            try {
                let res = await Axios.get(`${api_endpoint}/jobs/${id}`, {
                    headers: headers
                })
                commit('setJobById', res.data)
            } catch (e) {
                console.log(e.message)
            }
        },
        async removeJob({ commit }, { headers, id }) {
            try {
                let res = await Axios.delete(`${api_endpoint}/jobs/${id}`, {
                    headers: headers
                })

                commit('removeJob', res.data)
            } catch (e) {
                console.log(e.message)
            }
        }
    }
})
