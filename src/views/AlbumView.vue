<template>
  <LibraryView />
</template>

<script>
// @ is an alias to /src
import LibraryView from "@/layout/LibraryView";

export default {
  components: {
    LibraryView
  },
};
</script>


<style scoped lang="scss">
@use "src/styles/fonts";

$top-size: 700px;

.login-top {
  height: $top-size;
}
</style>