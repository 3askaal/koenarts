<template>
  <div class="VideoRollWrapper">
    <div class="VideoRoll">
      <div class="VideoRollItem" v-for="(item, index) in items" :key="item">
        <div :id="`video-${index}`"></div>
      </div>
    </div>
  </div>
</template>

<script>
import YouTubePlayer from 'youtube-player'

export default {
  props: ['items'],
  mounted () {
    const players = []

    this.items.forEach((item, index) => {
      const player = YouTubePlayer(`video-${index}`, {
        videoId: item,
        playerVars: { controls: 0 }
      })

      players.push(player)
    })
  }
}
</script>

<style lang="scss">
.VideoRollWrapper {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  overflow-x: scroll;
  padding-left: 200px;
}

.VideoRoll {
  display: flex;
  background-color: $black;
  box-shadow: 0 0 30px 20px $black;
  border-radius: 30px;
  padding: 80px 40px;
}

$videoRollWhite: darken(white, 10%);

.VideoRollItem {
  position: relative;
  background-color: $videoRollWhite;
  border-radius: 20px;

  iframe {
    border-radius: 30px;
    padding: 10px;
    // height: 100%;
    // height: auto;
    // width: auto;
  }

  + .VideoRollItem {
    margin-left: 20px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 25px;
    width: 100%;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      90deg,
      $videoRollWhite,
      $videoRollWhite 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 6% 100%;
  }

  &:before {
    top: 0;
    transform: translateY(-140%);
  }

  &:after {
    bottom: 0;
    transform: translateY(140%);
  }
}
</style>
