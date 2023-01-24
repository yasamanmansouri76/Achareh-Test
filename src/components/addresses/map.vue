<template>
  <div
    class="m-auto map-component position-relative text-center w-100 w-lg-60 h-100"
  >
    <span class="title txt-dark">
      <span class="icon" @click="$emit('backStep')">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACa0lEQVRoge2VS2sTYRiFzztJLCoW2oV0kVah0VqEgIK5CGLd5NKWJAbjypULtWTnD9D+AEEQrOIf8DJqTRWnSRXBhTZFN0WqEaIhNAgulAY1JCHzuqkwGWOTFpt8yvfs5nxz4JyZOQwgkUgkEolEIpE0gTodwIgrEIoR03UAFUA/l04+TLTqVTYx17ohpmsAegH0AYrq8UWCrXqFKsJg3XBpY+K7Xl/4cCteoYqAEAdgLLNNJzxyB0LOZlahiizMzqgMjpvkHjDNuUaP713La9nEXBuikM28sjuGdQDHDPJ2gj7WN7hf/ZR9+62RT7giAFDIvntudwztAMiwD+qxgP39Duft5exSyewRsggAFLKZObtjuB/AAYO8k1Eb2dPvvJXLLVWM9wu1ERM80G07A+CeSXeXuirTwWCwyygK9UNshDcW21pbKWtEdLT+hO4PdNtOqqpaAwArALgD4VEwrgLY3fakTdCLFRA1et4cza9UrgCIA6sbsQ/uewpgVxvz/R0Ih+yOIUshm3km8kZahBhYHTsxnQXwsaN5NgJjKp1MXAT+6bHzzbT34ClMTuqA4EVisZglX6zeAThqOnrSq1TGNU0r/xKsbc62HihfrN74rQRjvoRSRNNSZaMs7Nhd/sglgE8bNQLeKLRlbDGV+m6+X8g34vaHLwB8vk4k/lBlq+91Uv3SyCPcRjy+yAQTT5nkz2xRjiw8nn7/J59QRTyBUJSZVNR/8l9BPJKenVlcyyvWRpguoz7TD4Ux3qwEIFgRrs9TJaYTL1OJF614xSrCygSAZQA5ZiU6n3qgdTqTRCKRSCQSieQ/4ifoxb/ba2BjZAAAAABJRU5ErkJggg=="
        />
      </span>
      انتخاب موقعیت
    </span>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
      @click="handleSetAddress($event)"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="withTooltip"></l-marker>
    </l-map>
    <div class="btn-container p-3">
      <b-button
        @click="handleSubmitMap"
        :disabled="loadingSubmitBtn"
        variant="primary"
        class="w-100 w-lg-20"
        >ثبت و ادامه</b-button
      >
    </div>
  </div>
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "MapComponent",
  data() {
    return {
      address: this.value,
      lat: "",
      lng: "",
      zoom: 15,
      withTooltip: latLng(35.700195, 51.33794),
      center: latLng(35.700195, 51.33794),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(35.700195, 51.33794),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      toastCount: 0,
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
    loadingSubmitBtn: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    handleSubmitMap() {
      if (this.lat === "" || this.lng === "") {
        this.toastCount++;
        this.$bvToast.toast("یک موقعیت مکانی انتخاب کنید", {
          title: "خطا",
          appendToast: false,
          noCloseButton: true,
          variant: "danger",
          autoHideDelay: 5000,
        });
      } else {
        this.address.lat = this.lat;
        this.address.lng = this.lng;
        this.$emit("input", this.address);
        this.$emit("submit");
      }
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    handleSetAddress(e) {
      this.withTooltip = latLng(e.latlng.lat, e.latlng.lng);
      this.lat = e.latlng.lat;
      this.lng = e.latlng.lng;
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
    z-index: 405;
    top: 0px;
    .icon {
      position: absolute;
      right: 13px;
      img {
        width: 25px;
        height: 25px;
      }
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
    z-index: 405;
    box-shadow: 0 -0.125rem 0.25rem rgb(0 0 0 / 8%);
  }
}
</style>
