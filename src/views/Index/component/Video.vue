<template>
    <div>
        <videoPlayer
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOption"
    >
    </videoPlayer>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default {
    components: { videoPlayer },
    props: ['videos', 'index'],
    created () {
        this.autoPlay()
    },
    data () {
        return {
            stat: false,
            playerOption: {
                controls: false,
                fluid: true,
                muted: false,
                // autoplay: 'muted',
                loop: true,
                sources: [
                    {
                        type: 'video/mp4',
                        src: this.videos.src
                    }
                ]
            }
        }
    },
    computed: {
        player () {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {
        judge () {
            if (this.stat === false) {
                this.player.play()
                this.stat = true
            } else {
                this.$refs.videoPlayer.player.pause()
                this.stat = false
            }
        },
        play () {
            this.$refs.videoPlayer.player.load()
            this.$refs.videoPlayer.player.play()
            this.stat = true
        },
        pause () {
            this.$refs.videoPlayer.player.pause()
            this.stat = false
        },
        autoPlay () {
            if (this.index === 0) {
                this.playerOption.autoplay = 'muted'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'video.js/dist/video-js.css';

</style>
