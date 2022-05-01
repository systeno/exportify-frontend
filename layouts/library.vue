<script lang="ts" setup></script>

<script>

</script>

<template>

  <div class="is-flex is-flex-direction-column vh-100">
    <div class="is-flex">
      <SideBar class="is-flex-shrink-1"></SideBar>
      <div class="section">
        <slot/>
      </div>
    </div>

    <TheFooter></TheFooter>

  </div>
</template>

<style scoped lang="scss">

</style>
