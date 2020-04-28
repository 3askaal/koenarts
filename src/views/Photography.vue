<template>
  <Layout :background="background">
    <div class="Polaroids">
      <div class="Polaroid" :style="{ transform: `rotate(${genRandomRotation()})` }">
        <img class="PolaroidImage" :src="'http://placeimg.com/200/300/animals'" />
        <p class="PolaroidTitle">products</p>
      </div>
      <div class="Polaroid" :style="{ transform: `rotate(${genRandomRotation()})` }">
        <img class="PolaroidImage" :src="'http://placeimg.com/200/300/architecture'" />
        <p class="PolaroidTitle">shoots</p>
      </div>
      <div class="Polaroid" :style="{ transform: `rotate(${genRandomRotation()})` }">
        <img class="PolaroidImage" :src="'http://placeimg.com/200/300/nature'" />
        <p class="PolaroidTitle">sports</p>
      </div>
      <div class="Polaroid" :style="{ transform: `rotate(${genRandomRotation()})` }">
        <img class="PolaroidImage" :src="'http://placeimg.com/200/300/people'" />
        <p class="PolaroidTitle">explore</p>
      </div>
      <div class="Polaroid" :style="{ transform: `rotate(${genRandomRotation()})` }">
        <img class="PolaroidImage" :src="'http://placeimg.com/200/300/tech'" />
        <p class="PolaroidTitle">interior</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import { sample, random } from 'lodash'

export default {
  // props: ['content']
  data () {
    return {
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum doloremque adipisci eos pariatur blanditiis dicta impedit molestias et deserunt commodi, rem temporibus cumque quisquam ullam vitae quos eaque fuga?'
    }
  },
  methods: {
    genRandomRotation () {
      const isMinus = sample([true, false])
      return isMinus ? `-${random(2, 3)}deg` : `${random(2, 3)}deg`
    }
  }
}
</script>

<style lang="scss" scoped>
.Polaroids {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 140px;
  margin-bottom: 100px;

  @include breakpoint($bp-m) {
    margin-top: 200px;
  }
}

.Polaroid {
  padding: 15px;
  flex-shrink: 1;
  background-color: $white;
  box-shadow: 0 0 20px 10px rgba(black, 0.2);
  margin-bottom: 10px;
  max-width: 50%;

  @include breakpoint($bp-m) {
    margin-bottom: 20px;

    + .Polaroid {
      margin-left: 20px;
    }
  }
}

.PolaroidImage {
  width: 100%;
  box-shadow: inset 0 0 20px 10px rgba(black, 0.2);

  @include breakpoint($bp-m) {
    max-width: 200px;
  }
}

.PolaroidTitle {
  color: $black;
  margin-top: 20px;
  text-align: right;
  font-family: $handwriting-font;
  font-size: 1.2em;
}
</style>
