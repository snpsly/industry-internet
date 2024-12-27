<template>
  <video ref="videoPlayer" class="video-js vjs-default-skin" controls preload="auto" :data-setup="{}">
    <!-- 可以在这里插入source标签以指定你的视频源 -->
    <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
  </video>
</template>

<script>
import videojs from "video.js"
import "video.js/dist/video-js.css"

export default {
  name: "VideoPlayer",
  props: ["url"],
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.player = videojs(this.$refs.videoPlayer, {
        controls: true,
        autoplay: false,
        preload: "auto",
        sources: [
          {
            src: this.url,
            type: "video/mp4"
          }
        ]
      })
    })
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>
.video-container {
}
</style>
