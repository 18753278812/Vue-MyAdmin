

export default {
  state: {
    userinfo: {}
  },
  mutations: {
    SET_USERINFO: (state, userinfo) => {
      state.userinfo = userinfo
    }
  }
}