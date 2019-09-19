<template>
  <div class="Icon" v-html="icons[name].toSvg()"></div>
</template>

<script>
import feather from 'feather-icons'

export default {
  props: [
    'name'
  ],
  data () {
    return {
      icons: feather.icons
    }
  }
}
</script>

<style lang="scss">
.Icon {
  display: inline-block;

  svg {
    display: block;
  }
}
</style>
