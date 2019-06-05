import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login
  },
  plugins: [createPersistedState({
    key: 'storage',
    storage: {
      getItem: key => {
        return Cookies.get(key)
      },
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) => {
        Cookies.set(key, value)
      },
      removeItem: key => Cookies.remove(key)
    },
    paths: ['login.userinfo'] // 要持续化存储的条目
  })]
})
