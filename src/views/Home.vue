<template>
  <Layout background>
    <!-- <div class="cover" :style="{'background-image': `url(${background})`}">
      <h1 class="title">Koen Arts</h1>
      <div class="buttons">
        <router-link v-for="item in items" :to="item" class="button" :key="item">
          <p>{{ capitalize(item) }}</p>
          <div class="item">
            <div class="img" :style="{'background-image': `url(${background})`}" />
          </div>
        </router-link>
      </div>
    </div>-->

    <div class="Items">
      <div class="ItemsBackground" ref="background"></div>
      <div
        class="Item"
        v-for="(item, index) in items"
        :key="index"
        :style="{clipPath: `url(#clip${index + 1})`}"
        @mouseover="onMouseover(item.image)"
        @mouseout="onMouseout()"
      >
        <div class="ItemImage" :style="{backgroundImage: `url(${item.image})`}" :alt="item.name" />

        <svg class="ItemVector" width="100%" height="100%">
          <defs>
            <clipPath :id="`clip${index + 1}`">
              <rect width="100%" height="100%" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </Layout>
</template>

<script>
import * as WPAPI from 'wpapi'
import { capitalize } from 'lodash'

const wp = new WPAPI({
  endpoint: 'https://test56113140.wordpress.com/wp-json/wp/v2/posts'
})

wp.posts()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

export default {
  data () {
    return {
      items: [
        { name: 'photography', image: 'https://placeimg.com/1920/1080/animals' },
        { name: 'video', image: 'https://placeimg.com/1920/1080/nature' },
        { name: 'graphics', image: 'https://placeimg.com/1920/1080/tech' },
        { name: 'interactive', image: 'https://placeimg.com/1920/1080/arch' }
      ]
    }
  },
  methods: {
    capitalize (value) {
      return capitalize(value)
    },
    onMouseover (bg) {
      this.$refs.background.style.backgroundImage = `url(${bg})`
      this.$refs.background.style.opacity = 1
    },
    onMouseout () {
      this.$refs.background.style.opacity = 0
      this.$refs.background.style.backgroundImage = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.Items {
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: space-around;
  height: 100%;
  align-items: center;
}

.ItemsBackground {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-position: center center;
  opacity: 0;
  transition: all 0.2s ease;
}

.Item {
  flex-basis: 20%;
  height: 40%;
  cursor: pointer;
}

.ItemVector {
  filter: grayscale(1);
}

.ItemImage {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
}

// .title {
//   margin-bottom: 40px;
// }

// .cover {
//   display: inline-block;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }

// .buttons {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 80%;
//   flex-grow: 1;
//   flex-wrap: wrap;
// }

// .button {
//   display: flex;
//   flex-grow: 1;
//   flex-direction: column;
//   flex-basis: 20%;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   overflow: hidden;
// }

// .item {
//   display: block;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   z-index: 100;
//   opacity: 0;

//   .img {
//     filter: grayscale(0%);
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     width: 100%;
//     height: 100%;
//     background-repeat: no-repeat;
//     background-size: cover;

//     &:hover {
//       filter: grayscale(100%);
//     }
//   }
// }

// .button__content {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 40px;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(black, 0.8);
//   opacity: 0;
//   transition: opacity 0.4s ease;
// }
</style>
