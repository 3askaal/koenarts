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
      // content:
      //   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga?'
    }
  }
}
</script>
