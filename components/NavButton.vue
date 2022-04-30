<script setup>

const props = defineProps({
  goto: String
})

</script>

<script>
</script>

<template>
  <NuxtLink class="btn btn-primary" :to="goto">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
</style>
