<script lang="ts" setup></script>

<script>
</script>

<template>
  <aside class="section pb-1 menu is-flex is-flex-direction-column is-justify-content-flex-start has-background-grey-dark">
      <NuxtLink to="/" class="is-size-4">Exportify</NuxtLink>
      <hr class="is-size-6 has-background-grey-lighter">
      <p class="menu-label is-size-6">
        Library
      </p>
      <ul class="menu-list is-size-6">
        <li>
          <NuxtLink to="/albums">Albums</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/artists">Artist</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/libraries">Libraries</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/playlists">Playlists</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/songs">Songs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user">User</NuxtLink>
        </li>
      </ul>
    <div class="mt-auto">
      <hr class="is-size-6 has-background-grey-lighter">
      <div class="dropdown is-up is-hoverable">
        <NuxtLink to="#" class="button" aria-haspopup="true" aria-controls="dropdown-user">
          <figure class="image is-32x32 mr-2">
            <img class="is-rounded" src="https://github.com/systeno.png">
          </figure>
          <strong>UserName</strong>
        </NuxtLink>
        <div class="dropdown-menu" id="dropdown-user" role="menu">
          <div class="dropdown-content">
            <NuxtLink class="dropdown-item" to="#">Settings</NuxtLink>
            <NuxtLink class="dropdown-item" to="#">Profile</NuxtLink>
            <hr class="dropdown-divider">
            <NuxtLink class="dropdown-item" to="#">Sign out</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">

</style>
