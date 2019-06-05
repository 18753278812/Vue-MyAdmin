<template>
  <div class="about">
    <h1 @click="getUserInfo">This is an about page</h1>
    <h1 @click="loginOut">loginOut</h1>
  </div>
</template>

<script>
  import { login } from '@/api/login'
  export default {
    created() {
      console.log(this.$store)
    },
    methods: {
      getUserInfo() {
        login().then(res => {
          this.$store.commit('SET_USERINFO', res.data)
        })
      },
      loginOut() {
        this.$store.commit('USER_INFO_INIT')
      }
    }
  }
</script>


