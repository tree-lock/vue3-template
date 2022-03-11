<template>
  <div class="layout">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
defineProps();
</script>

<style lang="scss" scoped></style>
