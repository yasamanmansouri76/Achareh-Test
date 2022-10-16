<template>
  <b-col
    cols="12"
    class="p-3 bg-white float-lg-right shadow-lg-sm rounded mb-3"
  >
    <b-col cols="12" class="d-flex justify-content-between mb-2 d-lg-none">
      <span class="text-dark-grey txt-mid"> نام و نام‌خانوادگی </span>
      <span class="txt-dark txt-mid font-weight-bold">
        {{ address.first_name }} {{ address.last_name }}
      </span>
    </b-col>
    <b-col
      lg="4"
      class="d-none justify-content-between mb-2 float-lg-right d-lg-flex flex-lg-column p-lg-4"
    >
      <span class="text-dark-grey txt-mid mb-lg-3"> نام </span>
      <span class="txt-dark txt-mid font-weight-bold">
        {{ address.first_name }}
      </span>
    </b-col>
    <b-col
      lg="4"
      class="d-none justify-content-between mb-2 float-lg-right d-lg-flex flex-lg-column p-lg-4"
    >
      <span class="text-dark-grey txt-mid mb-lg-3"> نام‌خانوادگی </span>
      <span class="txt-dark txt-mid font-weight-bold">
        {{ address.last_name }}
      </span>
    </b-col>
    <b-col
      cols="12"
      lg="4"
      class="d-flex justify-content-between mb-2 float-lg-right flex-lg-column p-lg-4"
    >
      <span class="text-dark-grey txt-mid mb-lg-3"> جنسیت </span>
      <span class="txt-dark txt-mid font-weight-bold">
        {{ address.gender ? address.gender : "-" }}
      </span>
    </b-col>
    <b-col
      cols="12"
      lg="4"
      class="d-flex justify-content-between mb-2 float-lg-right flex-lg-column p-lg-4"
    >
      <span class="text-dark-grey txt-mid mb-lg-3"> شماره تلفن همراه </span>
      <span class="txt-dark txt-mid font-weight-bold">
        {{ address.coordinate_mobile ? address.coordinate_mobile : "-" }}
      </span>
    </b-col>
    <b-col
      cols="12"
      lg="4"
      class="d-flex justify-content-between mb-2 float-lg-right flex-lg-column p-lg-4"
    >
      <span class="text-dark-grey txt-mid mb-lg-3"> شماره تلفن ثابت </span>
      <span class="txt-dark txt-mid font-weight-bold">
        {{
          address.coordinate_phone_number
            ? address.coordinate_phone_number
            : "-"
        }}
      </span>
    </b-col>
    <hr class="d-lg-none" />
    <b-col cols="12" lg="4" class="d-flex flex-column float-lg-right p-lg-4">
      <span class="text-dark-grey txt-mid mb-2 mb-lg-3"> آدرس </span>
      <span class="txt-dark txt-mid font-weight-bold">
        {{ address.address }}
      </span>
    </b-col>
  </b-col>
</template>

<script>
export default {
  name: "AddressesCard",
  props: {
    address: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>
