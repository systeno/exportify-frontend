<script lang="ts" setup>

const props = defineProps({
  goto: String
})

</script>

<script>
</script>

<template>
  <NuxtLink class="spotify-button" :to="goto">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">

.spotify-button {
  background-color: var(--button-bg-color);
  cursor: pointer;
  color: var(--button-text-color);
  transition-duration: 0.3s;
  box-sizing: border-box;
  //font-family: $font-stack;
  //font-size: $button_size;
  //font-weight: $thick;
  letter-spacing: 2px;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  border-radius: 500px;
  margin: 30px 0;
  padding: 15px 10px 15px 10px;
  min-width: 300px;
  display: inline-block;
  text-decoration: none;
  border: none;
}

.spotify-button:hover {
  background-color: var(--button-hover-bg-color);
  color: var(--button-text-color);
}
</style>
