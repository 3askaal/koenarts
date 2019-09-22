<template>
  <Layout background>
    <div class="Items">
      <div
        class="Item"
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'fade-out': activeNavigationIndex !== null && activeNavigationIndex !== index,
          'fade-out-later': activeNavigationIndex !== null && activeNavigationIndex === index,
        }"
      >
        <div class="ItemArea" @click="navigate(item.name, index)">
          <span class="ItemCorner ItemCorner--topleft"></span>
          <span class="ItemCorner ItemCorner--topright"></span>
          <span class="ItemCorner ItemCorner--bottomleft"></span>
          <span class="ItemCorner ItemCorner--bottomright"></span>
          <strong class="bold">{{ capitalize(item.name) }}</strong>
        </div>
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
      ],
      activeNavigationIndex: null
    }
  },
  methods: {
    capitalize (value) {
      return capitalize(value)
    },
    navigate (name, index) {
      this.activeNavigationIndex = index

      setTimeout(() => {
        this.$router.push(name)
      }, 800)
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
  opacity: 1;

  &.fade-out {
    transition-property: opacity;
    transition-timing-function: ease;
    transition-duration: 0.4s;
    opacity: 0;
  }

  &.fade-out-later .ItemArea {
    transition-property: opacity;
    transition-timing-function: ease;
    transition-duration: 0.4s;
    transition-delay: 0.4s;
    opacity: 0;
  }

  @include breakpoint(max $bp-m) {
    $gutter: 20;

    flex-basis: calc(25% - #{$gutter * 2}px);

    &:nth-of-type(1) .ItemImage {
      clip-path: inset(
        calc(10% + #{$gutter}px) 10% calc(70% + #{$gutter}px) 10%
      );
    }
    &:nth-of-type(2) .ItemImage {
      clip-path: inset(
        calc(30% + #{$gutter}px) 10% calc(50% + #{$gutter}px) 10%
      );
    }
    &:nth-of-type(3) .ItemImage {
      clip-path: inset(
        calc(50% + #{$gutter}px) 10% calc(30% + #{$gutter}px) 10%
      );
    }
    &:nth-of-type(4) .ItemImage {
      clip-path: inset(
        calc(70% + #{$gutter}px) 10% calc(10% + #{$gutter}px) 10%
      );
    }
  }

  @include breakpoint($bp-m) {
    $gutter: 40;

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
  width: 100%;
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
  border-radius: 1px;

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
  opacity: 0.8;
  transition: all 0.4s ease;
}
</style>
