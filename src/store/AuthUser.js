import Vue from 'vue'
import Vuex from 'vuex'

import AuthService from '../services/Authservice';

Vue.use(Vuex)

let auth_key = "auth-jobserm"
let auth = JSON.parse(localStorage.getItem(auth_key))

const initialState = {
    user: auth ? auth.user : "",
    jwt: auth ? auth.jwt : "",
    isAuthen :auth ? true : false,
    isAdmin: auth ? auth.user.role === "ADMIN" : false,
}

export default new Vuex.Store({
    state: initialState,

    getters:{
        user:(state) => state.user,
        jwt: (state) => state.jwt,
        isAuthen: (state) => state.isAuthen,
        isAdmin: (state) => state.isAdmin,
    },

    mutations: {
        loginSuccess(state, user, jwt){
          state.user = user
          state.jwt = jwt
          state.isAuthen = true
          state.isAdmin = state.user.role === "ADMIN"
        },
        logoutSuccess(state){
          state.user = ""
          state.jwt = ""
          state.isAuthen = false
          state.isAdmin = false
        },
    },
    actions: {
        async login({ commit }, { email, password }) {
            let res = await AuthService.login({ email,password })
            if (res.success) {
                let body = {
                    user: res.user,
                    jwt: res.jwt,
                };
                commit('loginSuccess', body); // type true=admin false=user
            }
            return res
        },
        async logout({ commit }){
            AuthService.logout()
            commit('logoutSuccess')
        },
        async register({ commit }, payload){
            let res = await AuthService.register(payload)
            if(res.success){
                commit("loginSuccess", res.user, res.jwt, res.type)
            }
            return res;
        },
    },

});
