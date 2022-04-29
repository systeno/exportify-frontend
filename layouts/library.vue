<script lang="ts" setup></script>

<script></script>

<template>
  <div class="view">
    <TitleBar />
    <NavBar />
    <div class="content">
      <div class="slot"><slot /></div>
      <TheFooter />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/global";

.content {
  min-height: 100vh;
  display: flex;
  padding-top: $title_bar;
  padding-left: $side_bar;
  flex-direction: column;
  justify-content: space-between;

  .slot {
    margin: 5vh;
  }
}

</style>
