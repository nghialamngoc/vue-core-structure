import Profile from '@/models/profile'
import { getProfile } from '@/api/profile'
import { getToken } from '@/helpers/auth'

export default {
  namespaced: true,
  state: {
    admin: new Profile({}),
  },
  getters: {},
  mutations: {
    setAdmin(state, admin) {
      state.admin = admin
    },
  },
  actions: {
    // init auth for admin
    async init({ dispatch }) {
      // get admin if does not have
      try {
        if (getToken()) {
          return await dispatch('fetch')
        }
      } catch (error) {
        return Promise.resolve()
      }
    },

    // fetch admin profile
    async fetch({ commit }) {
      try {
        const profile = await getProfile()

        commit('setAdmin', profile)
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },
}
