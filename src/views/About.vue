<template>
  <Layout>
    <template slot="content">
      <div>
        <h1>About</h1>
        <div v-html="content"></div>
      </div>
    </template>
  </Layout>
</template>

<script>
export default {
  // props: ['content']
  data () {
    return {
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga?'
    }
  }
}
</script>
