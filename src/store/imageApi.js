
import Vue from "vue";
import Vuex from "vuex";
import backendInstance from "../services/backendInstance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  getters: {
    getImages: (state) => state.images,
  },
  mutations: {
    async fetchImages(state, { res }) {
      state.images = (await res).data;
    },
  },
  actions: {
    async fetchJob({ commit },id) {
      try {
        let res = backendInstance.get(`/api/images/${id}`);
        console.log("res = ", (await res).data);
        if ((await res).status === 200) {
          console.log((await res).data);
          commit("images", { res });
          return {
            success: true,
          };
        }
      } catch (e) {
        return {
          success: false,
        };
      }
    },
    
  },
});
