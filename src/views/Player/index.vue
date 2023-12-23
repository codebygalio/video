<template>
  <div class="player">
     <div class="icon iconfont" @click="click">
      &#xbbbb;
     </div>
     <div class="list">
      <VideoList />
     </div>
     <div class="comment">
      留下你的精彩评论吧
     </div>
  </div>
</template>

<script>
import VideoList from '@/views/Index/component/VideoList.vue'
export default {
    components: {
        VideoList
    },
    methods: {
        click () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.player{
  background: #000;
    color: #fff;
    position: relative;
    width: 100%;
    height: 100%;
    .icon{
      position: absolute;
      top: .3rem;
      left: .25rem;
      z-index: 20;
    }
    .comment{
      position: absolute;
      bottom: .2rem;
      left: .25rem;
      z-index: 20;
      color: #999;
      font-size: .35rem;
    }
    .list{
      width: 100%;
      height: 100%;
      z-index: 18;
    }

}
</style>
