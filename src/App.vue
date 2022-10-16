<template>
  <div id="app" class="bg-grey d-flex">
    <layout> </layout>
    <div class="body-container w-100">
      <router-view />
    </div>
  </div>
</template>

<script>
import layout from "@/layouts/index.vue";

export default {
  name: "App",
  components: {
    layout,
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  .body-container {
    margin-top: 56px;
    overflow-y: scroll;
    direction: ltr;
  }
}
</style>
