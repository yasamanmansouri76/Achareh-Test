<template>
  <b-col cols="12" class="p-3 px-lg-large pt-lg-5">
    <h6 class="mb-3 txt-dark">آدرس‌ها و مشخصات</h6>
    <addresse-card />
    <addresse-card />
  </b-col>
</template>

<script>
import addresseCard from "@/components/addresses/address-card.vue";

export default {
  name: "AddressesList",
  components: { addresseCard },
};
</script>
