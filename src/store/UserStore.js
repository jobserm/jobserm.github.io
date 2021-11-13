import Vue from "vue";
import Vuex from "vuex";
import backendInstance from "../services/backendInstance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user: {},
    usersArePublish: []
  },
  getters: {
    getUsers: (state) => state.users,
    fetchUser: (state) => state.user,
    fetchUsersArePublish: (state) => state.usersArePublish
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },

    fetchUser(state, data) {
        (state).user = data;
    },

    fetchUsersArePublish(state, data) {
        (state).usersArePublish = data
    }
  },
  actions: {
    async fetchUsers({ commit }, headers) {
      try {
        let res = await backendInstance.get("/api/users");
        commit("setUsers", res.data);
      } catch (e) {
        console.log(e);
      }
    },

    async fetchUserByID({ commit }, id) {
        try {
            let res = await backendInstance.get(`/api/users/${id}`)
            commit("fetchUser", res.data)
        } catch (e) {
            console.log(e);
        }
    },

    async fetchUsersArePublish({ commit }) {
        try {
            let res = await backendInstance.get(`/api/get-user-is-publish`)
            commit('fetchUsersArePublish', res.data)

        } catch(e) {
            console.log(e)
        }
    },
  },
});
