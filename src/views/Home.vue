<template>
  <Layout background>
    <template slot="wrapper">
      <div class="Items">
        <template v-for="(item, index) in items">
          <span class="Gutter" v-if="index" :key="'gutter' + index"></span>
          <div
            class="Item"
            :key="index"
            :class="{
              'fade-out':
                activeNavigationIndex !== null &&
                activeNavigationIndex !== index,
              'fade-out-later':
                activeNavigationIndex !== null &&
                activeNavigationIndex === index
            }"
          >
            <div class="ItemArea" @click="navigate(item.name, index)">
              <span class="ItemCorner ItemCorner--topleft"></span>
              <span class="ItemCorner ItemCorner--topright"></span>
              <span class="ItemCorner ItemCorner--bottomleft"></span>
              <span class="ItemCorner ItemCorner--bottomright"></span>
              <div class="bold">{{ capitalize(item.name) }}</div>
            </div>
            <picture class="ItemImage">
              <source media="(min-width: 800px)" :srcset="item.images.l" />
              <source media="(min-width: 640px)" :srcset="item.images.m" />
              <img :src="item.images.s" alt="" />
            </picture>
          </div>
        </template>
      </div>
    </template>
  </Layout>
</template>

<script>
import { capitalize } from 'lodash'

export default {
  data () {
    return {
      items: [
        {
          name: 'photography',
          images: {
            s: require('../assets/images/small/PhotographyH.jpg'),
            m: require('../assets/images/medium/PhotographyH.jpg'),
            l: require('../assets/images/large/PhotographyH.jpg')
          }
        },
        {
          name: 'graphics',
          images: {
            s: require('../assets/images/small/GraphicsH.jpg'),
            m: require('../assets/images/medium/GraphicsH.jpg'),
            l: require('../assets/images/large/GraphicsH.jpg')
          }
        },
        {
          name: 'video',
          images: {
            s: require('../assets/images/small/VideoH.jpg'),
            m: require('../assets/images/medium/VideoH.jpg'),
            l: require('../assets/images/large/VideoH.jpg')
          }
        }
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
$size: 60%;
$padding: 15%;

$colWidth: 20%;
$gutterWidth: 5%;

@function span($colIndex) {
  @return $padding + ($colIndex * $colWidth) + ($colIndex * $gutterWidth);
}

.Items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;

  @include breakpoint($bp-m) {
    flex-direction: row;
    width: 100%;
    height: 80%;
  }
}

.Gutter {
  display: flex;
  flex-basis: $gutterWidth;
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
    flex-basis: $colWidth;
    $x-padding: 10%;

    &:nth-of-type(1) .ItemImage {
      clip-path: inset(span(0) $x-padding span(2) $x-padding);
    }
    &:nth-of-type(2) .ItemImage {
      clip-path: inset(span(1) $x-padding span(1) $x-padding);
    }
    &:nth-of-type(3) .ItemImage {
      clip-path: inset(span(2) $x-padding span(0) $x-padding);
    }
  }

  @include breakpoint($bp-m) {
    flex-basis: $colWidth;
    $y-padding: 30%;

    &:nth-of-type(1) .ItemImage {
      clip-path: inset($y-padding span(2) $y-padding span(0));
    }
    &:nth-of-type(2) .ItemImage {
      clip-path: inset($y-padding span(1) $y-padding span(1));
    }
    &:nth-of-type(3) .ItemImage {
      clip-path: inset($y-padding span(0) $y-padding span(2));
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
  filter: grayscale(1);
  opacity: 0.8;
  transition: all 0.4s ease;
  overflow: hidden;

  img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}
</style>
