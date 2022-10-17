<template>
  <b-col
    cols="12"
    class="float-right h-100"
    :class="[step !== 2 ? 'p-3 px-lg-large pt-lg-5' : 'p-0']"
  >
    <address-form
      v-if="step === 1"
      v-model="address"
      @submit="submitAddressInfo"
    />
    <map-component
      v-else-if="step === 2"
      v-model="address"
      :loadingSubmitBtn="loadingSubmitBtn"
      @backStep="backStep"
      @submit="submitAddress"
    />
    <success-component v-else-if="step === 3" />
  </b-col>
</template>

<script>
import { mapActions } from "vuex";
import addressForm from "@/components/addresses/address-form.vue";
import mapComponent from "@/components/addresses/map.vue";
import successComponent from "@/components/addresses/success-message.vue";

export default {
  name: "AddAddresses",
  data() {
    return {
      step: 1,
      address: {
        first_name: "",
        last_name: "",
        coordinate_mobile: "",
        coordinate_phone_number: "",
        address: "",
        region: "1",
        lat: "",
        lng: "",
        gender: "female",
      },
      loadingSubmitBtn: false,
    };
  },
  components: {
    addressForm,
    mapComponent,
    successComponent,
  },
  methods: {
    ...mapActions({
      addAddresses: "addresses/addAddresses",
    }),
    submitAddressInfo() {
      this.step = 2;
    },
    backStep() {
      this.step--;
    },
    submitAddress() {
      this.loadingSubmitBtn = true;
      this.addAddresses(this.address)
        .then(() => {
          this.loadingSubmitBtn = false;
          this.step = 3;
        })
        .catch(() => {
          this.loadingSubmitBtn = false;
        });
    },
  },
};
</script>
<style lang="scss"></style>
