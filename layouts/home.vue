<script lang="ts" setup></script>

<template>
  <div class="is-flex is-flex-direction-column vh-100">
    <TitleBar></TitleBar>
    <div class="min-vh-50 has-background-grey-dark box">
      <slot name="top"></slot>
    </div>
    <div class="container">
      <slot name="bottom"></slot>
    </div>
    <div class="mt-auto">
      <TheFooter class="mt-5"></TheFooter>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>
