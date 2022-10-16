<template>
  <div class="d-flex flex-column">
    <top-bar />
  </div>
</template>
<script>
import topBar from "@/components/layout/top-bar.vue";

export default {
  name: "LayoutComponent",
  components: {
    topBar,
  },
};
</script>
