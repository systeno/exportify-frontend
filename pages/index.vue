<script setup>
import infoBoxes from "assets/content/info-boxes.json"
</script>

<template>
  <NuxtLayout name="home">
    <template #top>
      <div class="is-flex is-flex-direction-column is-justify-content-center h-100">
        <div class="title has-text-centered">Export and back up your Spotify library.</div>
        <SpotifyButton goto="/playlists" class="mx-auto">Login With Spotify</SpotifyButton>
      </div>
    </template>
    <template #bottom>
      <div class="is-flex is-flex-wrap-wrap is-justify-content-space-between mx-6">
        <InfoBox v-for="box in infoBoxes" :title="box.title" :warning="box.warning">
          {{ box.text }}
        </InfoBox>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">


.greeting {
    align-items: center;
    //font-size: $h1_size;
    //font-family: $title_font_stack;
    color: var(--greeting-color);
  }


</style>
