import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let baseURL = `http://localhost:8000/api`

export default new Vuex.Store({
    state: {
        users: []
    },
    getters:{
        getUsers: state => state.users
    },
    mutations: {
        setUsers(state, data) {
            state.users = data
        }
    },
    actions: {
        async fetchUsers({commit}){
            try {
                let res = await axios.get(baseURL + "/users")
                commit('setUsers', res.data)

            } catch(e) {
                console.log(e)
            }
        },

    },
});
