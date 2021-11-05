import Vue from "vue";
import Vuex from "vuex";
import backendInstance from "../services/backendInstance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    // usersArePublish: []
  },
  getters: {
    getUsers: (state) => state.users,
    // getUsersArePublish: state => state.usersArePublish
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    // setUsersArePublish(state, data) {
    //     state.usersArePublish = data
    // }
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

    // async getUsersArePublish({ commit }) {
    //     try {
    //         let jwt = JSON.parse(localStorage.getItem(auth_key))
    //         let res = await axios.get(`http://localhost:8000/api/get-user-is-publish`, {}, {
    //             headers: {
    //                 'Authorization': `Bearer ${jwt.access_token}`
    //             }
    //         })

    //         console.log(res.data)
    //         commit('setUsersArePublish', res.data)

    //     } catch(e) {
    //         console.log(e)
    //     }
    // },
  },
});
