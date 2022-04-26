<template>
  <LibraryView>
    <h1>{{ todos }}</h1>
  </LibraryView>
</template>

<script>
import LibraryView from "@/layout/LibraryView";
import axios from "axios";

export default {
  components: {
    LibraryView,
  },
  data() {
    return {
      todos: {},
    };
  },
  beforeMount() {
    this.getPlaylists();
  },
  methods: {
    getPlaylists: function () {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => (this.todos = response));
    },
  },
};
</script>

<style scoped lang="scss">
@use "src/styles/fonts";
</style>
