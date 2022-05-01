<script lang="ts" setup></script>

<script>
</script>

<template>
  <aside class="has-background-grey-dark section menu is-flex is-flex-direction-column fixed vh-100" >

      <NuxtLink to="/" class="is-size-4">Exportify</NuxtLink>

      <hr class="is-size-6 has-background-grey-lighter">

      <p class="menu-label is-size-6">Library</p>

      <ul class="menu-list is-size-6">
        <li><NuxtLink to="/library/albums">Albums</NuxtLink></li>
        <li><NuxtLink to="/library/artists">Artist</NuxtLink></li>
        <li><NuxtLink to="/library/libraries">Libraries</NuxtLink></li>
        <li><NuxtLink to="/library/playlists">Playlists</NuxtLink></li>
        <li><NuxtLink to="/library/songs">Songs</NuxtLink></li>
        <li><NuxtLink to="/library/user">User</NuxtLink></li>
      </ul>

      <hr class="mt-auto is-size-6 has-background-grey-lighter">

      <div class="dropdown is-up is-hoverable">
        <NuxtLink to="#" class="button" aria-haspopup="true" aria-controls="dropdown-user">
          <figure class="image is-32x32 mr-2">
            <img class="is-rounded" src="https://github.com/systeno.png" alt="">
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
  </aside>
</template>

<style scoped lang="scss">
.fixed {
  top: 0;
  position: sticky;
}
</style>
