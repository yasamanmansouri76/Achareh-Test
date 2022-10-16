<template>
  <div class="m-auto map-component position-relative text-center w-100 w-lg-60">
    <span class="title txt-dark">
      <span class="icon" @click="$emit('backStep')"> ---> </span>
      انتخاب موقعیت
    </span>
    <img class="w-100" src="@/assets/img/map.png" />
    <div class="btn-container p-3">
      <b-button @click="handleSubmitMap" variant="primary" class="w-100 w-lg-20"
        >ثبت و ادامه</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      address: this.value,
    };
  },
  props: {
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    handleSubmitMap() {
      this.address.lat = 4543;
      this.address.lng = 4543;
      this.$emit("input", this.address);
      this.$emit("submit");
    },
  },
};
</script>
<style lang="scss">
.map-component {
  .title {
    background: rgba(255, 255, 255, 0.67);
    position: absolute;
    width: 100%;
    display: block;
    text-align: center;
    padding: 6px;
    font-size: 0.8rem;
    font-weight: bold;
    .icon {
      position: absolute;
      right: 13px;
    }
  }
  .btn-container {
    position: fixed;
    bottom: 0px;
    width: 100%;
    right: 0px;
    background: white;
    text-align: center;
    z-index: 10;
    box-shadow: 0 -0.125rem 0.25rem rgb(0 0 0 / 8%);
  }
}
</style>
