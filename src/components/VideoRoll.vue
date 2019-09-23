<template>
  <div class="VideoRollWrapper">
    <div class="VideoRoll" :class="{'is-playing': isPlaying !== null}">
      <div
        class="VideoRollItem"
        v-for="(item, index) in items"
        :key="item"
        :class="{'is-playing': isPlaying !== null && isPlaying === index}"
        @click="isPlaying === index ? isPlaying = null : isPlaying = index"
      >
        <div class="VideoRollItemTop">
          <VideoRollStrip v-for="index in 20" :key="index" />
        </div>
        <div class="VideoRollItemMiddle">
          <Icon name="play" />
          <div class="VideoRollItemMiddleWrapper">
            <img
              v-if="isPlaying !== index"
              :src="`https://img.youtube.com/vi/${item}/maxresdefault.jpg`"
            />
            <iframe
              v-if="isPlaying === index"
              width="560"
              height="315"
              :src="`https://www.youtube.com/embed/${item}?autoplay=1&controls=0`"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="VideoRollItemBottom">
          <VideoRollStrip v-for="index in 20" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import YTPlayer from 'yt-player'

export default {
  props: ['items'],
  data () {
    return {
      isPlaying: null
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss">
.VideoRollWrapper {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  overflow-x: auto;
  padding-left: 200px;
}

.VideoRoll {
  display: flex;
  box-shadow: 0 0 50px 20px $black;
  background-color: rgba($black, 0.6);
  padding-right: 200px;
}

.VideoRollItem {
  position: relative;
  transition: all 0.4s ease;
  width: 80vw;

  @include breakpoint($bp-m) {
    width: 40vw;
  }

  .VideoRoll.is-playing & {
    width: 75vw;

    @include breakpoint($bp-m) {
      width: 60vw;
    }
  }
}

.VideoRollItemMiddle {
  padding: 0 20px;
  background-color: $black;

  .Icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    color: $white;
    cursor: pointer;

    svg {
      width: 60px;
      height: 60px;
      background-color: $black;
      padding: 10px;
      border-radius: 100%;
    }

    .VideoRollItem.is-playing & {
      display: none;
    }
  }
}

.VideoRollItemMiddleWrapper {
  position: relative;
  display: block;
  padding-bottom: 56.25%;
  height: 0;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}

.VideoRollItemTop,
.VideoRollItemBottom {
  display: flex;
}
</style>
