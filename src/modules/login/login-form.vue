<template>
  <div class="login-form">
    <h1>账号登录</h1>
    <el-form ref="formRef" :rules="rules" :model="form">
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
          @keyup.enter="submit"
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
import { FormInstance } from "element-plus/es";
const formRef = ref<FormInstance>();
const form = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [{ required: true, trigger: "blur", message: "请输入用户名" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
});
const submit = async () => {
  let ifValid = false;
  await (formRef.value as FormInstance).validate(
    (valid: boolean) => (ifValid = valid)
  );
  if (ifValid) {
    try {
      await $.auth.login(form);
      // 因为项目要部署在github.io，所以根据环境变量动态判断前缀。
      // 实际开发写成定值即可
      location.href = import.meta.env.BASE_URL;
    } catch (err) {
      const axiosError = err as AxiosResponse;
      if (axiosError.status === 401) {
        ElNotification.warning("用户名或密码错误");
      }
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
