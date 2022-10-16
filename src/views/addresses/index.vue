<template>
  <b-col class="p-3">
    <h6>آدرس‌ها و مشخصات</h6>
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
