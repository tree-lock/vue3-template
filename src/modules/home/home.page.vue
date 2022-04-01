<template>
  <div class="home-page">
    <div class="content">
      <div class="hello">
        {{ helloWord() }}，<span>{{ role }} {{ profile?.name }}</span>
      </div>
      <div class="date">{{ date }}</div>
      <div class="menu">
        <div v-for="item in menu" @click="goMenuItem(item.name)">
          {{ item.str }}
        </div>
      </div>
      <div class="recommend" v-loading="recommended === 'Loading'">
        {{ recommended }}
      </div>
    </div>
    <div class="version">
      版本: v{{ version }}
      <a href="https://gitee.com/dXmo" target="_blank">Authored by Xmo</a>
      <svg-icon name="favicon" size="16px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const recommended = $.poem.default;
const profile = $.profile.default;
const helloWord = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) {
    return "早上好";
  } else if (hour >= 11 && hour < 14) {
    return "中午好";
  } else if (hour >= 14 && hour < 19) {
    return "下午好";
  } else {
    return "晚上好";
  }
};

const version = config.version;
const date = ref<string>();
let interval: NodeJS.Timer;
/**
 * 生成当前时间(精确到分钟)
 */
const initDate = () => {
  const d = new Date();
  d.setHours(d.getHours() + 8);
  const [day, second] = d.toISOString().split(/T|Z|\./);
  date.value = day + " " + second.slice(0, -3);
  /** 到分钟整的时候生成循环计时器，每分钟执行一次 */
  setTimeout(() => {
    interval = setInterval(() => {
      const d = new Date();
      d.setHours(d.getHours() + 8);
      const [day, second] = d.toISOString().split(/T|Z|\./);
      date.value = day + " " + second.slice(0, -3);
    }, 60);
  }, 60 - new Date().getSeconds());
};
initDate();
/** 销毁组件的时候记得销毁计时器 */
onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval);
  }
});
const role = computed(() => {
  if (profile.value?.role) {
    return { admin: "管理员", manager: "经理" }[profile.value?.role];
  }
  return "";
});

// 跳转
const router = useRouter();
const goMenuItem = (name: string) => {
  router.push({ name });
};
const menu: { name: string; str: string }[] = [
  { name: "Profile", str: "📋个人信息" },
  { name: "CompanyManagement", str: "🏢公司管理" },
  { name: "Statistic", str: "📊使用统计" },
  { name: "Log", str: "💼日志系统" },
];

const borderColor = config.color.$borderColor;
const asideColor = config.color.$asideBgColor;
const levelColor = config.color.$level1Color;
const activeTextColor = config.color.$activeTextColor;
const ignoreColor = config.color.$ignoreColor;
const hoverBgColor = config.color.$hoverBgColor;
const clickBgColor = config.color.$clickBgColor;
</script>

<style lang="scss" scoped>
div.home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    > div.hello {
      font-size: 28px;
      > span {
        color: v-bind(levelColor);
      }
    }
    > div.date {
      color: v-bind(activeTextColor);
    }
    > div.menu {
      display: flex;
      gap: 16px;
      > * {
        height: 128px;
        width: 128px;
        background: v-bind(asideColor);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px v-bind(borderColor) solid;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background: v-bind(hoverBgColor);
        }
        &:active {
          background: v-bind(clickBgColor);
        }
      }
    }
    > div.recommend {
      color: v-bind(ignoreColor);
    }
  }
  .version {
    display: flex;
    justify-content: center;
    font-size: 12px;
    > a {
      margin-left: 8px;
    }
  }
}
</style>
