<template>
  <div class="wrapper">
    <picture class="LayoutBackground" v-if="background">
      <source media="(min-width: 800px)" :srcset="require(`../assets/images/large/${background}.jpg`)" />
      <source media="(min-width: 640px)" :srcset="require(`../assets/images/medium/${background}.jpg`)" />
      <img :src="require(`../assets/images/small/${background}.jpg`)" alt="" />
    </picture>
    <Header />
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
}

.LayoutBackground {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 0;
  opacity: 0.75;

  img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  // &:after {
  //   content: '';
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background-color: white;
  //   opacity:
  // }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  padding-top: 100px;
  padding-left: 40px;
  padding-right: 40px;

  @include breakpoint($bp-m) {
    padding-top: 140px;
  }
}
</style>
