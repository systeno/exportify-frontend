<script lang="ts" setup>
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: 'auth'
})
const access_token = useState("access_token").value
const { pending, data: playlists } = useLazyFetch("http://localhost:8080/playlist", {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${access_token}`
  }
})
watch(playlists, (newPlaylists) => {
  refreshNuxtData('playlists')
})

</script>

<script lang="ts">
/*
export default {
  mounted() {
    const access_token = useState("access_token").value
    const { pending, data: data } = useFetch("http://localhost:8080/playlist", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
        'Access-Control-Allow-Origin': "*"
      }
    })
    this.playlists = data;
  },
  data() {
    return {
      playlists: null,
    }
  },
  watch: {
    playlists(oldPlaylists, newPlaylists) {
      refreshNuxtData('playlists')
    }
  }
}
*/
</script>

<template>
  <NuxtLayout name="library">
    <table class="table">
      <thead>
      <tr>
        <th>UserId</th>
        <th>id</th>
        <th>title</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="playlist in playlists">
        <th>{{ playlist.id }}</th>
        <th>{{ playlist.name }}</th>
        <th>{{ playlist.owner }}</th>
      </tr>
      </tbody>
    </table>
  </NuxtLayout>
</template>

<style scoped lang="scss">

</style>
