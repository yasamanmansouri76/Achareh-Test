<template>
  <button type="button" class="empty-btn" @click="$emit('empty')">
    <img src="@/assets/img/cancel.png" />
  </button>
</template>
<style lang="scss">
.empty-btn {
  background: transparent;
  border: transparent;
  padding: 0px;
  position: absolute;
  top: 35px;
  left: 28px;
}
</style>
