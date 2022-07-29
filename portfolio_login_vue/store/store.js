import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default new createStore({
    state: {
        username: '',
        token: '',
    },

    getters: {
        isLogin(state) {
            return state.username !== '';
        },
    },

    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setToken(state, token) {
            state.token = token;
        },
        clearUsername(state) {
            state.username = '';
        },
    },

    plugins: [createPersistedState()],
});