<template>
  <div class="view">
    <TitleBar />
    <NavBar />
    <div class="content">
      <div>
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import Footer from "@/components/TheFooter";
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
    TitleBar,
    Footer,
  },
};
</script>

<style scoped lang="scss">
@use "src/styles/fonts";
@use "src/styles/sizes";

.content {
  min-height: 100vh;
  display: flex;
  padding-top: sizes.$title_bar;
  padding-left: sizes.$side_bar;
  flex-direction: column;
  justify-content: space-between;
}
</style>