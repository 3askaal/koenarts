<template>
  <div class="wrapper">
    <slot name="wrapper" />
    <div class="container" v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['background']
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  max-width: 480px;

  @include breakpoint(max $bp-m) {
    padding-top: 90px;
  }
}
</style>
