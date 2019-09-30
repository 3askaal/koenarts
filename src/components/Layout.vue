<template>
  <div class="wrapper" :style="{backgroundImage: `url(${background})`}">
    <Nav />
    <slot name="wrapper" />
    <div class="container" v-if="$slots.default || $slots.content">
      <slot />
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
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
  background-color: $dark;
  position: relative;
  background-position: center center;
  background-size: cover;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;

  @include breakpoint(max $bp-m) {
    padding-top: 90px;
  }
}
</style>
