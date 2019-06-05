<template>
  <div class="login">
    <el-card class="login-box">
      <div class="top">登录</div>
      <el-form :model="loginForm">
        <el-form-item class="inp" prop="username">
          <el-input placeholder="用户名" v-model.trim="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item class="inp" prop="password">
          <el-input type="password" placeholder="密码" v-model.trim="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="btn" @click="submit">登录</el-button>
    </el-card>
  </div>
</template>

<script>
  import { checkSpace } from '@/utils/filters'
  export default {
    name: 'login',
    filters: {
      checkSpace
    },
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    beforeMount() {
    },
    methods: {
      submit() {
        console.log(this.loginForm)
      }
    }
  }
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: #373d41;
  padding-top: 14vh;
}
.login-box {
  width: 480px;
  height: 360px;
  margin: 0 auto;
  .top {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .inp {
    height: 48px;
    border: 1px solid #cccccc;
    /deep/ input {
      border: 0;
      height: 46px;
      line-height: 48px;
    }
  }
  .btn {
    margin-top: 40px;
    width: 100%;
    height: 48px;
    border-radius: 0;
  }
}
</style>

