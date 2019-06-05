import store from '@/store'

export function auth_login() {
  return JSON.stringify(store.state.login.userinfo) === '{}'
}