<script lang="ts" setup>

</script>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item is-size-3">
          Exportify
        </NuxtLink>

        <a role="button" class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }"
           aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <NuxtLink class="navbar-item" to="/">Home</NuxtLink>
          <NuxtLink class="navbar-item" to="#">Features</NuxtLink>
          <NuxtLink class="navbar-item" to="#">FAQs</NuxtLink>
          <NuxtLink class="navbar-item" to="#">About</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">

</style>
