<script lang="ts" setup></script>

<script>
</script>

<template>
  <div class="nav-bar">
    <nav class="navigators">
      <NavButton class="nav-item" goto="/playlists">Playlists</NavButton>
      <NavButton class="nav-item" goto="/albums">Albums</NavButton>
      <NavButton class="nav-item" goto="/artists">Artists</NavButton>
      <NavButton class="nav-item" goto="/songs">Songs</NavButton>
      <NavButton class="nav-item" goto="/libraries">Libraries</NavButton>
      <NavButton class="nav-item" goto="/user">User</NavButton>
    </nav>

    <nav class="actions">
      <NavButton class="nav-item">Download Library</NavButton>
      <NavButton class="nav-item">Save To Database</NavButton>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/global";

.nav-bar {
  background: var(--navbar-bg-color);
  width: $side_bar;
  position: fixed;
  left: 0;
  top: $title_bar;
  bottom: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .navigators {
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .nav-item {
      margin-bottom: 20px;
    }
  }

  .actions {
    bottom: 0;

    .nav-item {
      margin-top: 20px;
    }
  }
}
</style>
