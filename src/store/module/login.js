

export default {
  state: {
    userinfo: {}
  },
  mutations: {
    USER_INFO_INIT: state => {
      state.userinfo = {}
    },
    SET_USERINFO: (state, userinfo) => {
      state.userinfo = userinfo
    }
  }
}