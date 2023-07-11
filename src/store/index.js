import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
    documents: []
  },
  getters: {
    USERS(state) {
      return state.users;
    },
    DOCUMENTS(state) {
      return state.documents;
    },
  },
  mutations: {
    SET_USERS_TO_STATE: (state, users) => {
      state.users = users;
    },
    SET_DOCUMENTS_TO_STATE: (state, documents) => {
      state.documents = documents;
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
    },

    GET_DOCUMENTS_FROM_API({commit}) {
      return axios('http://localhost:3000/documents', {
        method: "GET"
      })
        .then((documents) => {
          commit('SET_DOCUMENTS_TO_STATE', documents.data);
          return documents;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    }

  },
});
