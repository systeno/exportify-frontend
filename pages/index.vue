<script>
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
        <InfoBox title="Login with Spotify">
          Login with your Spotify account, to see your library. Exportify will
          show you your: Playlists, Albums, Artists and Songs. Exportify cannot
          delete or create anything. It will only read your existing data.
        </InfoBox>
        <InfoBox title="Download your library">
          Exportify gives you the ability to download your current library state.
          Since this app is still in early development, the format of the
          downloaded data may change over time.
        </InfoBox>
        <InfoBox title="Backup your library" warning="Warning: experimental feature">
          <p class="mt0">
            Exportify also gives you the ability to safe your library online. It
            is connected to your Spotify ID, so you dont need an additional
            account.
          </p>
          <p>
            <b>Do not</b> rely on this <b>yet</b>. This is feature is not ready
            for serious use at this time.
          </p>
        </InfoBox>
        <InfoBox title="Lorem Ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis
          blandit facilisis. Vestibulum a feugiat diam, eget egestas enim. Proin
          varius neque quis orci gravida efficitur nec at libero. Ut ut odio eu
          est vestibulum ullamcorper sed eu mauris. Sed ac dapibus diam. Quisque
          congue pellentesque pellentesque. Cras blandit, est id aliquet
          vulputate, erat est euismod massa, nec hendrerit neque neque in magna.
          Nam non felis dui. Phasellus molestie turpis pharetra venenatis
          imperdiet. Suspendisse potenti. In dignissim odio suscipit, euismod
          purus vel, laoreet dui. Vivamus id nisl mi. Sed ac consequat lacus, nec
          euismod sem. Vivamus scelerisque felis sed efficitur ornare. Aliquam
          auctor aliquam ipsum quis lobortis. Fusce massa nibh, sodales
          sollicitudin enim ac, tincidunt sollicitudin est. Ut diam eros,
          imperdiet sollicitudin vestibulum quis, ornare eget tortor. Pellentesque
          facilisis nisi vitae purus convallis, in volutpat elit cursus. Morbi
          egestas tempor quam, ut dignissim mauris posuere nec. Vivamus ultrices
          mi ut consequat porta. Duis turpis leo, ultricies at pretium nec,
          efficitur ut est.
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
