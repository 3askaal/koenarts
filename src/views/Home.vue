<template>
  <Layout background :hasLogo="true">
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
            <div class="ItemArea">
              <div class="ItemAreaCover" @click="navigate(item.name, index)">
                <div class="ItemAreaTitle bold">{{ capitalize(item.name) }}</div>
                <span class="ItemCorner ItemCorner--topleft"></span>
                <span class="ItemCorner ItemCorner--topright"></span>
                <span class="ItemCorner ItemCorner--bottomleft"></span>
                <span class="ItemCorner ItemCorner--bottomright"></span>
              </div>
              <picture class="ItemImage">
                <source media="(min-width: 800px)" :srcset="require(`../assets/images/large/${item.image}.jpg`)" />
                <source media="(min-width: 640px)" :srcset="require(`../assets/images/medium/${item.image}.jpg`)" />
                <img
                  :src="require(`../assets/images/small/${item.image}.jpg`)"
                  :alt="item.image"
                  :style="{ objectPosition: item.backgroundPosition }"
                />
              </picture>
            </div>
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
          image: 'PhotographyH',
          backgroundPosition: 'center center'
        },
        {
          name: 'graphics',
          image: 'GraphicsH',
          backgroundPosition: 'center center'
        },
        {
          name: 'video',
          image: 'VideoH',
          backgroundPosition: 'center center'
        },
        {
          name: 'fountain',
          image: 'FountainH',
          backgroundPosition: 'right 10%'
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
$itemAmount: 4;
$gutterWidth: 2%;

@function span($colIndex, $colWidth, $size) {
  @return ((100 - $size) / 2) + ($colIndex * $colWidth) + ($colIndex * $gutterWidth);
}

@function colWidth($size) {
  $startSpan: 100 - $size;
  @return (100% - $startSpan - ($gutterWidth * ($itemAmount - 1))) / $itemAmount;
}

@mixin getClipPaths($colWidth, $padding, $size, $horizontal: false) {
  @for $i from 1 through $itemAmount {
    &:nth-of-type(#{$i}) .ItemImage {
      @if $horizontal {
        clip-path: inset(
          $padding
          span($itemAmount - $i, $colWidth, $size)
          $padding
          span($i - 1, $colWidth, $size)
        );
      } @else {
        clip-path: inset(
          span($i - 1, $colWidth, $size)
          $padding
          span($itemAmount - $i, $colWidth, $size)
          $padding
        );
      }
    }
  }
}

@mixin grid($size, $otherSize, $horizontal: false) {
  $y-padding: (100 - $otherSize) / 2;
  $colWidth: colWidth($size);

  flex-basis: $colWidth;

  .ItemAreaCover {
    @if $horizontal {
      height: $otherSize;
    } @else {
      width: $otherSize;
    }
  }

  @include getClipPaths($colWidth, $y-padding, $size, $horizontal);
}

.Items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @include breakpoint($bp-m) {
    flex-direction: row;
  }
}

.Gutter {
  display: flex;
  flex-basis: $gutterWidth;
  height: 100%;
}

.Item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 1;

  &.fade-out {
    transition-property: opacity;
    transition-timing-function: ease;
    transition-duration: 0.4s;
    opacity: 0;
  }

  &.fade-out-later .ItemAreaCover {
    transition-property: opacity;
    transition-timing-function: ease;
    transition-duration: 0.4s;
    transition-delay: 0.4s;
    opacity: 0;
  }

  @include breakpoint(max $bp-m) {
    @include grid(40%, 80%)
  }

  @include breakpoint($bp-m) {
    @include grid(50%, 40%, true)
  }
}

.ItemArea {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ItemAreaTitle {
  @include breakpoint($bp-m) {
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    height: 40px;
  }
}

.ItemAreaCover {
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
  opacity: 0.75;
  transition: all 0.4s ease;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
