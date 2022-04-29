<script lang="ts" setup>

</script>

<script>
</script>

<template>
  <div class="title-bar">
    <div class="title">
      <NuxtLink to="/" class="title">Exportify</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/global";

.title-bar {
  position: fixed;
  height: $title_bar;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  background-color: var(--title-bg-color);
  z-index: 2;

  .title {
    margin-top: 0;
    font-size: $title_size;
    font-family: $title_font_stack;
    color: var(--title-font-color);
    text-decoration: none;
  }
  .title:hover {
    color: var(--title-hover-font-color);
    cursor: pointer;
  }
}
</style>
