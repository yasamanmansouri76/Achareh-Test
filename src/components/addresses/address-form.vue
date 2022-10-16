<template>
  <div class="add-address-cmp">
    <h6 class="mb-3 txt-dark">ثبت آدرس</h6>
    <b-form class="p-3 bg-white rounded mb-5 float-right">
      <span class="txt-small txt-dark font-weight-bold mb-3 d-block">
        لطفا مشخصات و آدرس خود را وارد کنید
      </span>
      <div class="d-flex flex-column flex-lg-row float-right w-100">
        <b-col class="float-right" cols="12" lg="4">
          <b-form-group label="نام" label-for="first_name" class="mb-4">
            <b-form-input
              id="first_name"
              v-model="formData.first_name"
              name="first_name"
              placeholder="مثال: محمد"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('first_name')"
              aria-describedby="first_name-feedback"
              data-vv-as="نام"
            ></b-form-input>
            <form-error :errors-text="errors.collect('first_name')" />
          </b-form-group>
        </b-col>
        <b-col class="float-right" cols="12" lg="4">
          <b-form-group label="نام خانوادگی" label-for="last_name" class="mb-4">
            <b-form-input
              id="last_name"
              v-model="formData.last_name"
              name="last_name"
              placeholder="مثال: رضایی"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('last_name')"
              aria-describedby="last_name-feedback"
              data-vv-as="نام خانوادگی"
            ></b-form-input>
            <form-error :errors-text="errors.collect('last_name')" />
          </b-form-group>
        </b-col>
        <b-col class="float-right" cols="12" lg="4">
          <b-form-group
            label="شماره تلفن همراه"
            label-for="coordinate_mobile"
            class="mb-4"
          >
            <b-form-input
              id="coordinate_mobile"
              v-model="formData.coordinate_mobile"
              name="coordinate_mobile"
              placeholder="مثال 091212345678"
              v-validate="{ required: true, length: 11 }"
              :state="validateState('coordinate_mobile')"
              aria-describedby="coordinate_mobile-feedback"
              data-vv-as="شماره تلفن همراه"
            ></b-form-input>
            <form-error :errors-text="errors.collect('coordinate_mobile')" />
          </b-form-group>
        </b-col>
      </div>
      <div class="d-flex flex-column flex-lg-row float-right w-100">
        <b-col class="float-right" cols="12" lg="4">
          <b-form-group
            label="شماره تلفن ثابت (اختیاری)"
            label-for="coordinate_phone_number"
            class="mb-4"
          >
            <template #label>
              <div class="d-block d-flex justify-content-between">
                <span> شماره تلفن ثابت (اختیاری) </span>
                <span class="text-dark-grey"> *با پیش شماره </span>
              </div>
            </template>
            <b-form-input
              id="coordinate_phone_number"
              v-model="formData.coordinate_phone_number"
              name="coordinate_phone_number"
              placeholder="مثال 02144256870"
              v-validate="{ length: 11 }"
              :state="validateState('coordinate_phone_number')"
              aria-describedby="coordinate_phone_number-feedback"
              data-vv-as="شماره تلفن ثابت"
            ></b-form-input>
            <form-error
              :errors-text="errors.collect('coordinate_phone_number')"
            />
          </b-form-group>
        </b-col>
        <b-col class="float-right" cols="12" lg="8">
          <b-form-group label="آدرس" label-for="address" class="mb-4">
            <b-form-textarea
              id="address"
              v-model="formData.address"
              name="address"
              rows="1"
              max-rows="6"
              v-validate="{ required: true, min: 10 }"
              :state="validateState('address')"
              aria-describedby="address-feedback"
              data-vv-as="آدرس"
            ></b-form-textarea>
            <form-error :errors-text="errors.collect('address')" />
          </b-form-group>
        </b-col>
      </div>
      <b-col class="float-right" cols="12">
        <b-form-group class="mb-4">
          <label class="ml-5">جنسیت</label>
          <b-form-radio-group
            v-model="formData.gender"
            class="pt-2"
            :options="genders"
            value-field="value"
            text-field="name"
          ></b-form-radio-group>
        </b-form-group>
      </b-col>
      <div class="btn-container p-3">
        <b-button @click="handleSubmit" variant="primary" class="w-100 w-lg-20">
          ثبت و ادامه</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import formError from "@/components/shared/form-error.vue";

export default {
  name: "FormAddresses",
  data() {
    return {
      genders: [
        { value: "female", name: "خانم" },
        { value: "male", name: "آقا" },
      ],
      formData: {
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
    };
  },
  components: {
    formError,
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.$emit("submit", this.formData);
      });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.add-address-cmp {
  label,
  legend,
  .invalid-feedback {
    font-size: $font-small;
    font-weight: 500;
  }
  .form-control {
    font-size: $font-mid;
    padding: 1.3rem 0.75rem;
    &:focus {
      border-color: $color-primary;
      box-shadow: 0 0 0 0 rgb(0 191 165 / 25%);
    }
  }
  .custom-radio {
    input {
      right: 0px;
      left: unset;
    }
    .custom-control-label {
      &::before {
        right: -1.5rem;
        left: unset;
      }
      &::after {
        right: -1.5rem;
        left: unset;
      }
    }
  }
  fieldset {
    &.form-group {
      & > div {
        display: flex;
        align-items: baseline;
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
    box-shadow: 0 -0.125rem 0.25rem rgb(0 0 0 / 8%);
  }
  .form-control.is-invalid,
  .form-control.is-valid {
    background-image: none;
  }
}
</style>
