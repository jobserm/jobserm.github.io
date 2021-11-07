import { BIconJoystick } from "bootstrap-vue";
import Vue from "vue";
import Vuex from "vuex";
import Authservice from "../services/Authservice";
import backendInstance from "../services/backendInstance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    data: [],
    JobById: [],
    allJobs: [],
    JobSuggest: [],
    fetchRemark: [],
    fetchUserFinish: [],
    jobByUser: [],
    jobFromSearch: [],
    JobAvaNotLogIn: [],
    AllJobsAvaNotLogIn:[],
  },
  getters: {
    posts: (state) => state.posts,
    jobs: (state) => state.data,
    job_filtered: (state) => {
      return state.JobById;
    },
    getAllJobs: (state) => state.allJobs,
    getJobSuggest: (state) => state.JobSuggest,
    getUserFinish: (state) => state.fetchUserFinish,
    getJobByUser: (state) => state.jobByUser,
    getJobById: (state) => state.JobById,
    getJobFromSearch: (state) => state.jobFromSearch,
    getAvaJobNotLogIn: (state) => state.JobAvaNotLogIn,
    getAllJobsAvaNotLogIn: (state) => state.AllJobsAvaNotLogIn,
  },
  mutations: {
    async fetch(state, { res }) {
      state.data = (await res).data;
    },
    async fetchById(state, { res }) {
      state.JobById = (await res).data;
    },
    async fetchSuggest(state, { res }) {
      state.JobSuggest = (await res).data;
    },
    async fetchAllAvaJobNotLogIn(state, { res }) {
      state.AllJobsAvaNotLogIn = (await res).data;
    },
    async fetchByUser(state, { res }) {
      state.jobByUser = await res;
    },
    async fetchAvaJobNotLogIn(state, { res }) {
      state.JobAvaNotLogIn = await res.data;
    },
    async fetchFromSearch(state, { res }) {
      state.jobFromSearch = (await res).data;
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
      state.fetchRemark = data;
    },
    fetchUserFinishJob(state, data) {
      state.fetchUserFinish = data;
    },
    setJobById(state, data) {
      state.JobById = data;
    },
    removeJob(state, data) {
      state.allJobs = state.allJobs.map((job) => job.id != data.id);
    },
  },
  actions: {
    async fetchJobSuggest({ commit }, id) {
      console.log("fetchJobSuggest");
      console.log("---id---", id);
      let body = {
        id: id,
      };
      let res = await backendInstance.post(
        `/api/jobs/${id}/get-rand-jobs`,
        body
      );
      console.log("JobSuggest", (await res).data);
      console.log("fetchJobSuggest");
      commit("fetchSuggest", { res });
    },
    async fetchData({ commit }) {
      let header = Authservice.getApiHeader();
      let res = await backendInstance.get(`/api/jobs`, header);
      commit("fetch", res);
    },
    async postJob({ commit }, payload) {
      try {
        let res = await backendInstance.post(`/api/jobs`, payload);
        if (res.status === 201) {
          return {
            success: true,
          };
        }
      } catch (e) {
        //console.log(payload)
        return {
          success: false,
          message: "ตรวจสอบฟอร์มกรอกข้อมูลอีกครั้ง",
        };
      }
    },
    async fetchJob({ commit }) {
      try {
        let res = backendInstance.get("/api/jobs");
        console.log("res = ", (await res).data);
        if ((await res).status === 200) {
          console.log((await res).data);
          console.log("ดำะแ้ ่นิ");
          commit("fetch", { res });
          return {
            success: true,
          };
        }
      } catch (e) {
        return {
          success: false,
        };
      }

      // let res = backendInstance.get(api_endpoint + "/jobs")
      // console.log((await res).data)
      // console.log("ดำะแ้ ่นิ")
      // commit("fetch",{ res })
    },
    async paginate({ commit }, payload) {
      console.log(payload);
      let body = {
        id:payload.id
      }
      console.log(body.id);
      let res = await backendInstance.post(payload.url,body.id);
      console.log("route");
      
      console.log("data from url");
      console.log((await res));
      commit("fetch", { res });
    },
    async paginate_post({ commit }, route) {
      let res = backendInstance.post(route);
      console.log("route");
      console.log(route);
      console.log("data from url");
      console.log((await res).data);
      commit("fetch", { res });
    },
    async getJobByID({ commit }, id) {
      let res = await backendInstance.get(`/api/jobs/${id}`);
      let body = res.data;
      return body;
    },
    async fetchJobById({ commit }, id) {
      console.log("---id---");
      console.log(id);
      try {
        let res = await backendInstance.get(`/api/jobs/${id}`);
        commit("fetchById", { res });
        console.log((await res).data);
      } catch (e) {
        console.log(e.message);
      }
      console.log("fetchById");
    },
    async fetchJobFromSearch({ commit }, payload) {
      let body = {
        title : payload.title,
        province : payload.province,
        category : payload.category,
        compen : payload.compensatsion_array,
        check : payload.check,

      };
      console.log("body", payload);
      try {
        let res = await backendInstance.post(`/api/get-job-from-search`, body);
        commit("fetchFromSearch", { res });
        console.log("s",(await res).data);
      } catch (e) {
        console.log(e.message);
      }
      console.log("fetchJobFromSearch");
    },
    async fetchJobUserId({ commit }, id) {
      console.log("---id---");
      console.log(id);
      let body = {
        id: id,
      };
      let res = await backendInstance.post(`/api/get-job-by-user-id`, body);
      console.log((await res).data);
      console.log("fetchByUser");
      commit("fetchByUser", { res });
      console.log("fetchByUser");
    },

    async fetchAllAvaJobsNotLogIn({ commit }, id) {
      console.log("---id---");
      console.log(id);
      let body = {
        id: id,
      };
      let res = await backendInstance.post(`/api/jobs/get-all-avaliable-jobs-not-log-in`, body);
      console.log((await res).data);
      console.log("fetchAllAvaJobsNotLogIn");
      commit("fetchAllAvaJobNotLogIn", { res });
      console.log("fetchAllAvaJobsNotLogIn");
    },

    async fetchJobAvaliableNotLogedIn({ commit }, id) {
      console.log("fetchJobAvaliableNotLogedIn");
      console.log("id",id);
      let body = {
        id: id,
      };
      let res = await backendInstance.post(`api/jobs/get-avaliable-jobs-not-log-in`, body);
      console.log( res);
      commit("fetchAvaJobNotLogIn", { res });
    },

    async addRemarks({ commit }, payload) {
      try {
        console.log("payload.id---", payload.id);
        console.log("payload.remark---", payload.remark);
        let body = {
          id: payload.user_id,
          remark: payload.remark,
        };

        console.log("body.id---", body.id);
        console.log("body.remark---", body.remark);
        let res = await backendInstance.post(
          `/api/jobs/${payload.job_id}/apply-job`,
          body
        );
        console.log("res", res);
        commit("addRemark", { res });

        return {
          success: true
        }
      } catch(e) {
        return {
          success: false,
          message: e.response.data
        }
      }
    },
    async fetchAllJobs({ commit }) {
      try {
        let res = await backendInstance.get(`/api/get-all-jobs`);
        console.log(`line 82`, res.data);
        commit("setAllJobs", res.data);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchUserFinish({ commit }, id) {
      let res = await backendInstance.get(`/api/jobs/${id}/finish-job`);
      console.log("finish job =>", res);
      commit("fetchUserFinishJob", res);
    },
    async fetchJobByID({ commit }, id) {
      try {
        let res = await backendInstance.get(`/api/jobs/${id}`);
        commit("setJobById", res.data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async removeJob({ commit }, { headers, id }) {
      try {
        let res = await backendInstance.delete(`/api/jobs/${id}`);

        commit("removeJob", res.data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async employerSelectFreelancer({ commit }, body1) {
      try {
        let body2 = {
          id: body1.user_id
        }
        await backendInstance.put(`/api/jobs/${body1.job_id}/select-freelancer`, body2);
 
        return {
          success: true
        }
      } catch (e){
        return {
          success: false,
          message: e.response.data
        } 
      }
    }
  },
});
