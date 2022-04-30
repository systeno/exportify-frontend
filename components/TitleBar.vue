<script lang="ts" setup>

</script>

<script>
</script>

<template>
  <div>
    <header class="d-flex py-3 text-light bg-dark">
      <NuxtLink to="/" class="ms-4 fs-4 me-md-auto d-flex align-items-center text-light text-decoration-none">
        Exportify
      </NuxtLink>

      <ul class="nav nav-pills">
        <li class="nav-item"><NuxtLink class="nav-link active" to="/">Home</NuxtLink></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
</template>

<style scoped lang="scss">

.title-bar {
  position: fixed;
  //height: $title_bar;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  background-color: var(--title-bg-color);
  z-index: 2;

  .title {
    margin-top: 0;
   // font-size: $title_size;
    //font-family: $title_font_stack;
    color: var(--title-font-color);
    text-decoration: none;
  }
  .title:hover {
    color: var(--title-hover-font-color);
    cursor: pointer;
  }
}
</style>
