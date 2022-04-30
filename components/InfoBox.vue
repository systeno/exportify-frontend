<script lang="ts" setup>


</script>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    warning: String("")
  },
};
</script>

<template>
  <div class="box has-background-grey-darker">
    <h2 class="title " :class="{ 'mb-6': !warning }">{{ title }}</h2>
    <div v-if="warning" class="has-text-danger is-size-6">{{ warning }}</div>
    <slot />
  </div>
</template>

<style scoped lang="scss">

  .box {
    width: 370px;

    height: 400px;
    overflow: hidden;
  }
</style>
