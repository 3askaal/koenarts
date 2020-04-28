<template>
  <Layout :background="background">
    <VideoRoll slot="wrapper" :items="videos"></VideoRoll>
  </Layout>
</template>

<script>
export default {
  // props: ['content']
  data () {
    return {
      videos: [
        'ggGHYpkHHDY',
        '1BZCpgpfQ9s',
        'bf7hKRNfanM',
        '7jaNVI7yCAs',
        'pnUYY9VYs30'
      ],
      background: require('../assets/images/VideoH.jpg')
      // content:
      //   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga?'
    }
  }
}
</script>
