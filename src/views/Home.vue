<template>
  <Layout background>
    <div class="Items">
      <div class="Item" v-for="(item, index) in items" :key="index">
        <router-link class="ItemArea" :to="item.name">
          <span class="corner corner--topleft"></span>
          <span class="corner corner--topright"></span>
          <span class="corner corner--bottomleft"></span>
          <span class="corner corner--bottomright"></span>
          <strong class="bold">{{ capitalize(item.name) }}</strong>
        </router-link>
        <div class="ItemImage" :style="{backgroundImage: `url(${item.image})`}" />
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
        { name: 'photography', image: 'https://source.unsplash.com/random/2000x1100' },
        { name: 'video', image: 'https://source.unsplash.com/random/2100x1100' },
        { name: 'graphics', image: 'https://source.unsplash.com/random/2200x1100' },
        { name: 'interactive', image: 'https://source.unsplash.com/random/2600x1400' }
      ]
    }
  },
  methods: {
    capitalize (value) {
      return capitalize(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.Items {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.Item {
  flex-basis: 20%;
  height: 100%;
  overflow: hidden;
  padding-top: 15.2%;
  padding-bottom: 15.2%;

  &:hover .ItemImage {
    filter: grayscale(0);
  }

  &:nth-of-type(1) .ItemImage {
    clip-path: inset(25% 74% 25% 10%);
  }
  &:nth-of-type(2) .ItemImage {
    clip-path: inset(25% 52.7% 25% 31.4%);
  }
  &:nth-of-type(3) .ItemImage {
    clip-path: inset(25% 31.4% 25% 52.7%);
  }
  &:nth-of-type(4) .ItemImage {
    clip-path: inset(25% 10% 25% 74%);
  }
}

.ItemArea {
  position: relative;
  display: flex;
  height: 100%;
  z-index: 200;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  .corner {
    opacity: 0;
    display: inline-block;
    position: absolute;
    width: 40px;
    height: 40px;
  }

  .corner--topleft {
    top: 0;
    left: 0;
    border-top: 2px solid white;
    border-left: 2px solid white;
  }

  .corner--topright {
    top: 0;
    right: 0;
    border-top: 2px solid white;
    border-right: 2px solid white;
  }

  .corner--bottomleft {
    bottom: 0;
    left: 0;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }

  .corner--bottomright {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
  }

  &:hover {
    .corner {
      opacity: 1;
    }

    ~ .ItemImage {
      clip-path: inset(0) !important;
      z-index: 0;
    }
  }
}

.ItemImage {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-size: cover;
  background-position: center center;
  filter: grayscale(1);
  transition: all 0.4s ease;
}
</style>
