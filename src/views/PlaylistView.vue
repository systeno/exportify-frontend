<template>
  <LibraryView>
    <h1>{{ todos }}</h1>
  </LibraryView>
</template>

<script>
import LibraryView from "/src/layout/LibraryView";
import axios from "axios";

export default {
  name: "PlaylistView",
  components: {
    LibraryView
  },
  data() {
    return {
      todos: null
    };
  },
  beforeMount() {
    this.getPlaylists();
  },
  methods: {
    async login() {
      window.location.href = "localhost:4001/";
    },
    getPlaylists: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => (this.todos = response));
    }
  }
};
</script>

<style scoped lang="scss">
@use "src/styles/fonts";
</style>