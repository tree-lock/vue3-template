<template>
  <div class="login-form">
    <h1>账号登录</h1>
    <el-form :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="form.username" autocomplete="username">
          <template #prepend>
            <el-icon><avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" autocomplete="password">
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
          @click="login"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { Avatar, Lock } from "@element-plus/icons-vue";
import { FormItemRule } from "element-plus/es/components/form/src/form.type";
const form = reactive({
  username: "",
  password: "",
});
const rules: { [k: string]: FormItemRule[] } = reactive({
  username: [{ required: true, trigger: "blur", message: "请输入用户名" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
});
const login = () => {};
</script>

<style lang="scss" scoped>
div.login-form {
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
  transition: 1s;
  background-color: rgba(255, 255, 255, 1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .login-button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
