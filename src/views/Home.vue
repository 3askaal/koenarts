<template>
  <Layout background>
    <div class="Items">
      <div class="Item" v-for="(item, index) in items" :key="index">
        <router-link class="ItemArea" :to="item.name">
          <span class="ItemCorner ItemCorner--topleft"></span>
          <span class="ItemCorner ItemCorner--topright"></span>
          <span class="ItemCorner ItemCorner--bottomleft"></span>
          <span class="ItemCorner ItemCorner--bottomright"></span>
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
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @include breakpoint($bp-m) {
    flex-direction: row;
  }
}

.Item {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;

  $gutter: 20;

  flex-basis: calc(25% - #{$gutter * 2}px);

  @include breakpoint(max $bp-m) {
    &:nth-of-type(1) .ItemImage {
      clip-path: inset(
        calc(10% + #{$gutter}px) 30% calc(70% + #{$gutter}px) 30%
      );
    }
    &:nth-of-type(2) .ItemImage {
      clip-path: inset(
        calc(30% + #{$gutter}px) 30% calc(50% + #{$gutter}px) 30%
      );
    }
    &:nth-of-type(3) .ItemImage {
      clip-path: inset(
        calc(50% + #{$gutter}px) 30% calc(30% + #{$gutter}px) 30%
      );
    }
    &:nth-of-type(4) .ItemImage {
      clip-path: inset(
        calc(70% + #{$gutter}px) 30% calc(10% + #{$gutter}px) 30%
      );
    }
  }

  @include breakpoint($bp-m) {
    $gutter: 40;

    height: 100%;
    flex-basis: calc(25% - #{$gutter * 2}px);

    &:nth-of-type(1) .ItemImage {
      clip-path: inset(
        30% calc(70% + #{$gutter}px) 30% calc(10% + #{$gutter}px)
      );
    }
    &:nth-of-type(2) .ItemImage {
      clip-path: inset(
        30% calc(50% + #{$gutter}px) 30% calc(30% + #{$gutter}px)
      );
    }
    &:nth-of-type(3) .ItemImage {
      clip-path: inset(
        30% calc(30% + #{$gutter}px) 30% calc(50% + #{$gutter}px)
      );
    }
    &:nth-of-type(4) .ItemImage {
      clip-path: inset(
        30% calc(10% + #{$gutter}px) 30% calc(70% + #{$gutter}px)
      );
    }
  }
}

.ItemArea {
  position: relative;
  display: flex;
  z-index: 200;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  cursor: pointer;

  @include breakpoint($bp-m) {
    height: 50%;
    width: 100%;
  }

  &:hover {
    .ItemCorner {
      opacity: 1;
    }

    ~ .ItemImage {
      clip-path: inset(0) !important;
      filter: grayscale(0);
      z-index: 0;
    }
  }
}

.ItemCorner {
  opacity: 0;
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;

  &.ItemCorner--topleft {
    top: 0;
    left: 0;
    border-top: 1px solid white;
    border-left: 1px solid white;
  }

  &.ItemCorner--topright {
    top: 0;
    right: 0;
    border-top: 1px solid white;
    border-right: 1px solid white;
  }

  &.ItemCorner--bottomleft {
    bottom: 0;
    left: 0;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
  }

  &.ItemCorner--bottomright {
    bottom: 0;
    right: 0;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
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
