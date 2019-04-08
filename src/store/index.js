import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        username: '',
        email: '',
    },
    mutations: {
        logInUser(state, username, email){
            state.username = username;
            state.email = email;
            state.auth = true;
        },
        logOut(state){
            state.username = '';
            state.email = '';
            state.auth = false;
        }
    }
});