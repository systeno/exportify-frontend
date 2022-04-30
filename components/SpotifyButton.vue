<script lang="ts" setup>

const props = defineProps({
  goto: String
})

</script>

<script>
</script>

<template>
  <NuxtLink
      class="spotify-button has-background-success has-text-white has-text-weight-bold my-3 py-3 has-text-centered is-uppercase "
      :to="goto">
    <slot/>
  </NuxtLink>
</template>

<style scoped lang="scss">

.spotify-button {
  letter-spacing: 2px;
  border-radius: 500px;
  width: 300px;
}

.spotify-button:hover {
  background-color: var(--button-hover-bg-color);
  color: var(--button-text-color);
}
</style>
