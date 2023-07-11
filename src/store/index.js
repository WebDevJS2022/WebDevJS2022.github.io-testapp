import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: []
  },
  getters: {
    USERS(state) {
      return state.users;
    },
  },
  mutations: {
    SET_USERS_TO_STATE: (state, users) => {
      state.users = users;
    }
  },
  actions: {
    GET_USERS_FROM_API({commit}) {
      return axios('http://localhost:3000/users', {
        method: "GET"
      })
        .then((users) => {
          commit('SET_USERS_TO_STATE', users.data);
          return users;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    }
  },
});
