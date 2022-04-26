<template>
  <footer class="footer">
    <div>&copy; Copyright Till Wittenburg</div>
    <a href="https://github.com/systeno" class="github">
      <font-awesome-icon class="github" :icon="['fab', 'github']" />
      GitHub
    </a>
  </footer>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@use "src/styles/sizes";
@use "src/styles/fonts";

.footer {
  height: sizes.$footer;
  text-align: center;
  align-items: center;
  padding: 8px;
  background-color: var(--footer-bg-color);
  display: flex;
  justify-content: space-between;
  z-index: 2;
  bottom: 0;
  font-weight: fonts.$normal_weight;
  font-size: fonts.$body_size;
  font-family: fonts.$font-stack;
  color: var(--footer-text-color);

  .github {
    color: var(--footer-text-color);
  }
}
</style>
