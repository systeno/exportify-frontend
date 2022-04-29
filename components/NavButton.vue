<script setup>

const props = defineProps({
  goto: String
})

</script>

<script>
</script>

<template>
  <NuxtLink class="nav-button" :to="goto">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
@import "assets/styles/global";

.nav-button {
  background: var(--navbutton-bg-color);
  cursor: pointer;
  color: var(--navbutton-text-color);
  transition-duration: 0.3s;
  box-sizing: border-box;
  font-family: $font-stack;
  font-size: $nav_button_size;
  font-weight: $thick;
  letter-spacing: 2px;
  text-align: center;
  vertical-align: middle;
  border-radius: $border_radius;
  margin: 0;
  padding: 15px 10px 15px 10px;
  width: $nav_button_width;
  display: inline-block;
  text-decoration: none;
  border: none;
}

.nav-button:hover {
  background: var(--navbutton-hover-bg-color);
}
</style>
