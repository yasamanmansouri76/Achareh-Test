<template>
  <b-col cols="12" class="p-3 px-lg-large pt-lg-5 float-right">
    <h6 class="mb-3 txt-dark">آدرس‌ها و مشخصات</h6>
    <div v-if="isLoading" class="d-flex justify-content-center mb-3">
      <b-spinner variant="primary" label="Loading..."></b-spinner>
    </div>
    <div
      v-else-if="!isLoading && addresses.length === 0"
      class="d-block my-5 text-center"
    >
      داده‌ای موجود نمیباشد!
    </div>
    <div v-else>
      <addresse-card
        v-for="address in addresses"
        :key="address.id"
        :address="address"
      />
    </div>
  </b-col>
</template>

<script>
import { mapActions } from "vuex";
import addresseCard from "@/components/addresses/address-card.vue";

export default {
  name: "AddressesList",
  data() {
    return {
      addresses: [],
      isLoading: false,
    };
  },
  components: { addresseCard },
  methods: {
    ...mapActions({
      getAddresses: "addresses/getAddresses",
    }),
    loadData() {
      this.isLoading = true;
      this.getAddresses()
        .then((response) => {
          this.addresses = response;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.loadData();
  },
};
</script>
