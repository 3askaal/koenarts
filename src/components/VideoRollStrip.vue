<template>
  <svg class="Strip">
    <defs>
      <mask id="hole">
        <rect class="StripOuter" width="100%" height="100%" fill="white" />
        <rect rx="3" y="25%" x="25%" width="50%" height="50%" fill="black" />
      </mask>
    </defs>

    <rect width="100%" height="100%" mask="url(#hole)" />
  </svg>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Strip {
  display: block;
  fill: $black;
  width: 100%;
  height: 80px;
  overflow: hidden;

  .StripOuter {
    flex-grow: 1;
    width: 100%;
  }
}
</style>
