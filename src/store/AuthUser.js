import Vue from "vue";
import Vuex from "vuex";

import AuthService from "../services/Authservice";
import backendInstance, { auth } from "../services/backendInstance";

Vue.use(Vuex);

const initialState = {
  user: auth ? auth.user : "",
  jwt: auth ? auth.jwt : "",
  isAuthen: auth ? true : false,
  isActivate: auth ? true : false,
  isAdmin: auth ? auth.user.role === "ADMIN" : false,
};

export default new Vuex.Store({
  state: initialState,

  getters: {
    user: (state) => state.user,
    jwt: (state) => state.jwt,
    isAuthen: (state) => state.isAuthen,
    isAdmin: (state) => state.isAdmin,
  },

  mutations: {
    loginSuccess(state, { user, jwt }) {
      state.isAuthen = true;
      state.user = user;
      state.jwt = jwt;
      console.log("loginsuccess ", jwt);
      state.isAdmin = state.user.role === "ADMIN";
    },
    logoutSuccess(state) {
      state.user = "";
      state.jwt = "";
      state.isAuthen = false;
      state.isAdmin = false;
    },
    registerSuccess(state, user) {
      state.user = user;
    },
    setUser(state, data) {
      state.user = data;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      let res = await AuthService.login({ email, password });

      if (res.success) {
        let body = {
          user: res.user,
          jwt: res.jwt,
        };
        commit("loginSuccess", body); // type true=admin false=user
      }
      return res;
    },
    async logout({ commit }) {
      AuthService.logout();
      commit("logoutSuccess");
    },
    async register({ commit }, body) {
      let res = await AuthService.register(body);
      commit("registerSuccess", res.user);

      console.log("register med", this.state.user);
      return res;
    },
    async firstRegister({ commit }, body) {
      try {
        console.log("body", body);
        let res = await backendInstance.post(
          `/api/users/${this.state.user.id}/first-register`, body
        );
        console.log("res", res);
        if (res.status === 201) {
          // console.log('first register successfully!')
          // console.log(this.state.jwt)
          let res = await backendInstance.post(`/api/auth/me`, {});

          commit("registerSuccess", res.data);
          return {
            success: true,
          };
        }
      } catch (e) {
        return {
          success: false,
          message: e.response.data,
        };

        //console.log(e)
      }
    },
    async me({ commit }) {
      let res = await backendInstance.post(`/api/auth/me`, {});
      commit("setUser", res.data);
    }
  },
});
