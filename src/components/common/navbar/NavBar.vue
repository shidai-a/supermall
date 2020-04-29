<template>
  <div class="tab-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
.tab-bar {
  height: 44px;
  display: flex;
  background-color: #f6f6f6;
  text-align: center;
  line-height: 44px;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>