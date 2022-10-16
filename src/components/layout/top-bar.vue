<template>
  <b-navbar type="light" variant="white" class="shadow-sm px-lg-5" fixed="top">
    <b-navbar-nav class="ml-auto pr-0">
      <img src="@/assets/img/achareh-logo.svg" />
    </b-navbar-nav>
    <b-navbar-nav>
      <router-link class="pr-4 py-2 txt-primary" :to="{ name: 'addresses' }">
        مشاهده آدرس‌ها
      </router-link>
      <router-link class="pr-4 py-2 txt-primary" :to="{ name: 'addArticle' }">
        ثبت آدرس
      </router-link>
    </b-navbar-nav>
  </b-navbar>
</template>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.router-link-exact-active {
  color: $color-dark !important;
}
</style>
