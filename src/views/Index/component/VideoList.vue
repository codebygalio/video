<template>
  <div class="videoList">
    <swiper class="bd-swiper" ref="bdSwiper" :options="swiperOption" >
            <swiper-slide class="swiper-item" v-for="(item,index) in list" :key="item.id">
                <Video ref="videos" :videos="item" :index="index"/>
                <Left v-if="index ===pages" :item="item"/>
                <Right v-if="index ===pages" :item="item"/>
            </swiper-slide>
        </swiper>
        <!-- <div v-if="first"><img  class="stop-icon" src="~@/assets/img/stop.png" alt=""></div> -->

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Video from './Video.vue'
import Left from './Left.vue'
import Right from './Right.vue'
import requests from '@/utils/requests'
export default {
    name: 'VideoList',
    created () {
        this.getList()
    },
    components: {
        Video,
        Left,
        Right,
        swiper,
        swiperSlide
    },
    data () {
        return {
            // first: true,
            pages: 0,
            swiperOption: {
                direction: 'vertical',
                on: {
                    tap: (swiper) => {
                        this.player()
                    },
                    slideNextTransitionStart: () => {
                        this.pages += 1
                        this.next()
                    },
                    slidePrevTransitionStart: () => {
                        this.pages -= 1
                        this.previous()
                    }
                }
            },
            list: []
        }
    },

    methods: {
        async getList () {
            const { data } = await requests.get('/mock/videos.json')
            this.list = data
        },
        player () {
            // console.log('this.videoIndex=', this.pages)
            this.$refs.videos[this.pages].judge()
            // this.first = false
        },
        next () {
            this.$refs.videos[this.pages].play()
            this.$refs.videos[this.pages - 1].pause()
            // this.first = false
        },
        previous () {
            this.$refs.videos[this.pages].play()
            this.$refs.videos[this.pages + 1].pause()
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'swiper/dist/css/swiper.css';
.videoList{
  width: 100%;
  height: 100%;
  .bd-swiper{
    width:100%;
    height: 100%;
    font-size: 2rem;
    .swiper-item{
        color: #fff;

    }
  }
  .stop-icon{
    position: absolute;
    top: 50%;
    border-radius: 50%;
    width:50px;
    height:50px;
    left: 50%;
    z-index: 20;
    transform:translate(-50%,-50%);
    pointer-events:none;
}

}
</style>
