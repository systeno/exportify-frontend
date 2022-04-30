<script lang="ts" setup></script>

<script></script>

<template>
  <div class="tile is-vertical vh-100">
    <div class="columns columns vh-100">
      <NavBar class=" column"></NavBar>
      <div class="column is-four-fifths section">
        <slot />
      </div>
    </div>

    <TheFooter class="tile"> </TheFooter>
  </div>
</template>

<style scoped lang="scss">

.slot {
  margin: 5vh;
}


</style>
