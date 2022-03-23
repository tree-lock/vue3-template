<template>
  <div class="layout-header">
    <div>{{ icon }}HHF后台管理系统</div>
    <div class="right">
      <div class="user-info" @click="goProfile">
        <span>{{ name }}</span>
        🪶
      </div>
      <el-button @click="changeMode">
        {{ mode ? "常规配色" : "暗黑配色" }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const icon = ["🏯", "🗼", "🎡"][Math.floor(Math.random() * 3)];
// 获取登录用户数据
const name = ref<string>();
const getProfile = async () => {
  const profile = await $.profile.getProfile();
  name.value = profile.name;
};
onBeforeMount(getProfile);
// 调整页面配色
const mode = $.dark.mode;
const changeMode = $.dark.changeMode;

const router = useRouter();
const goProfile = () => {
  router.push({
    name: "Profile",
  });
};
</script>

<style lang="scss" scoped>
div.layout-header {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  > .right {
    display: flex;
    align-items: center;
    gap: 16px;
    > div.user-info {
      display: flex;
      cursor: pointer;
      align-items: center;
      font-size: 2rem;
      > span {
        font-size: 12px;
      }
    }
  }
}
</style>
