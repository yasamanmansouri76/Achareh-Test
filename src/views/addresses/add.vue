<template>
  <b-col
    cols="12"
    class="float-right"
    :class="[step !== 2 ? 'p-3 px-lg-large pt-lg-5' : 'p-0']"
  >
    <address-form v-if="step === 1" @submit="submitAddressInfo" />
    <map-component
      v-else-if="step === 2"
      v-model="address"
      @backStep="backStep"
      @submit="submitAddress"
    />
  </b-col>
</template>

<script>
import { mapActions } from "vuex";
import addressForm from "@/components/addresses/address-form.vue";
import mapComponent from "@/components/addresses/map.vue";

export default {
  name: "AddAddresses",
  data() {
    return {
      step: 1,
      address: {},
    };
  },
  components: {
    addressForm,
    mapComponent,
  },
  methods: {
    ...mapActions({
      getAddresses: "addresses/getAddresses",
    }),
    submitAddressInfo(address) {
      this.address = address;
      this.step = 2;
    },
    backStep() {
      this.step--;
    },
    submitAddress() {
      console.log(this.address);
    },
  },
};
</script>
<style lang="scss"></style>
