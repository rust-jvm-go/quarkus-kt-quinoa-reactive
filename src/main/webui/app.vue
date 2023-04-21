<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import {initFlowbite} from "flowbite";

onMounted(() => {
  // Initialize Flowbite here once.
  initFlowbite();
})
</script>
