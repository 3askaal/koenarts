<template>
  <Layout :background="'VideoH'">
    <VideoRoll slot="wrapper" :items="videos"></VideoRoll>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      videos: [
        'ggGHYpkHHDY',
        '1BZCpgpfQ9s',
        'bf7hKRNfanM',
        '7jaNVI7yCAs',
        'pnUYY9VYs30'
      ]
    }
  }
}
</script>
