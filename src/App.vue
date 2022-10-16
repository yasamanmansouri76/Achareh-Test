<template>
  <div id="app" class="bg-grey">
    <layout> </layout>
    <router-view />
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
}
</style>
