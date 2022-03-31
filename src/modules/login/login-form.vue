<template>
  <div class="login-form">
    <h1>账号登录</h1>
    <el-form :rules="rules" :model="form">
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="用户名(mock状态下请随意输入)"
          autocomplete="username"
        >
          <template #prepend>
            <el-icon><avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          placeholder="密码(mock状态下请随意输入)"
          autocomplete="password"
          type="password"
        >
          <template #prepend
            ><el-icon><lock /></el-icon
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="large"
          class="login-button"
          type="primary"
          @click="submit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Lock } from "@element-plus/icons-vue";
import { AxiosResponse } from "axios";
const form = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [{ required: true, trigger: "blur", message: "请输入用户名" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
});
const submit = async () => {
  try {
    await $.auth.login(form);
    location.href = "/";
  } catch (err) {
    const axiosError = err as AxiosResponse;
    if (axiosError.status === 401) {
      ElNotification.warning("用户名或密码错误");
    }
  }
};
</script>

<style lang="scss" scoped>
div.login-form {
  > h1 {
    font-size: 1.65rem;
    color: #333333;
    margin-bottom: 2rem;
  }
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
  transition: 1s;
  background-color: #ffffff;
  border: #00000085 3px solid;
  border-radius: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .login-button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
