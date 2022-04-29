<script lang="ts" setup></script>

<template>
  <div class="home">
    <div class="login-top">
      <TitleBar />
      <slot name="top"></slot>
    </div>
    <div class="login-bottom">
      <slot name="bottom"></slot>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/global";

$top-size: 700px;

.home {
  display: flex;
  flex-direction: column;
}

.login-top {
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
  height: $top-size;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--bg-image-color);
  background-size: 400% 400%;
  animation: gradient 120s linear infinite;
}

.login-bottom {
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  z-index: 1;
  min-height: calc(100vh - #{$top-size});
  background-color: var(--second-bg-color);
}
</style>
