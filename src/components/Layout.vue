<template>
  <div class="LayoutWrapper">
    <picture class="LayoutBackground" v-if="background">
      <source media="(min-width: 800px)" :srcset="require(`../assets/images/large/${background}.jpg`)" />
      <source media="(min-width: 640px)" :srcset="require(`../assets/images/medium/${background}.jpg`)" />
      <img :src="require(`../assets/images/small/${background}.jpg`)" alt="" />
    </picture>
    <Header />
    <slot name="wrapper" />
    <div class="LayoutContainer" v-if="$slots.default || $slots.content">
      <slot />
      <div class="LayoutContent" v-if="$slots.content">
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
.LayoutWrapper {
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
  // filter: blur(2px);

  // &:before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background-color: rgba(black, 0.4);
  // }
}

.LayoutContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
}

.LayoutContent {
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
