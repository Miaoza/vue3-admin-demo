<!-- 登录页 -->

<template>
  <section class="login">
    <div class="form-wrap">
      <el-form
        :model="form"
        :rules="rules"
        ref="loginFormRef"
        label-width="80px"
        class="login-form"
      >
        <el-form-item label="手机" prop="phone">
          <el-input v-model="form.phone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" maxlength="18" show-password></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss" scoped>
.login {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(./images/login-bg.jpeg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .form-wrap {
    width: 500px;
    height: 400px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: rgba(#fff, 0.2);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form {
      width: 300px;
      height: 200px;
    }
  }
}
</style>
