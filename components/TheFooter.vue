<script lang="ts" setup></script>

<template>
  <footer class="footer">
    <div>&copy; Copyright Till Wittenburg</div>
    <a href="https://github.com/systeno" class="github">
      <font-awesome-icon class="github" :icon="['fab', 'github']" />
      GitHub
    </a>
  </footer>
</template>

<style lang="scss">
@import "assets/styles/global";

.footer {
  height: $footer;
  text-align: center;
  align-items: center;
  padding: 8px;
  background-color: var(--footer-bg-color);
  display: flex;
  justify-content: space-between;
  z-index: 2;
  bottom: 0;
  font-weight: $normal_weight;
  font-size: $body_size;
  font-family: $font-stack;
  color: var(--footer-text-color);

  .github {
    color: var(--footer-text-color);
  }
}
</style>
