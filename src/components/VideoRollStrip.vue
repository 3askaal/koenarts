<template>
  <svg width="300" height="60">
    <defs>
      <mask id="hole">
        <rect width="10%" height="100%" fill="white" />
        <rect rx="3" y="25%" x="10" width="2.5%" height="50%" fill="black" />
      </mask>
    </defs>

    <rect
      width="30"
      height="100%"
      mask="url(#hole)"
      v-for="index in 50"
      :key="index"
      :style="{transform: `translateX(${(index - 1) * 30}px)`}"
    />
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
svg {
  fill: $black;
}
</style>
