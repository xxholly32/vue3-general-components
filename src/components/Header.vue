<template>
  <header class="flex justify-between">
    <div class="m-6" for="logo">
      <router-link to="/">home</router-link>
    </div>
    <div class="flex text-xl items-center m-6">
      <a class="mx-2" @click="toggleDark">
        <carbon-moon v-if="isDark" />
        <carbon-sun v-else />
      </a>

      <a
        class="icon-btn mx-2"
        href="https://github.com/xxholly32/vue3-general-components"
        target="_blank"
        title="Github"
      >
        <carbon-logo-github />
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { isDark, useToggleDark } from "~/hooks";
const { toggleDark } = useToggleDark();

const showDrawer = ref(false)

</script>