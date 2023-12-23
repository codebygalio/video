<template>
  <div class="workList">
    <Router-Link to="/player">
      <div class="item" v-for="item in list" :key="item.id">
      <Video :videos="item" />
      <div class="box">
        <span class="iconfont love">
          &#x5555;
        </span>
        <span class="iconfont number">
          666
        </span>
      </div>
    </div>
    </Router-Link>
  </div>
</template>

<script>
import Video from '@/views/Index/component/Video.vue'
import Request from '@/utils/requests'
export default {
    components: {
        Video
    },
    created () {
        this.getVideoList()
    },
    data () {
        return {
            list: [],
            likename: this.$route.query.listName
        }
    },
    methods: {
        async getVideoList () {
            console.log('likename=', this.likename)
            const { data } = await Request('/mock/videos.json')
            if (this.likename === 'like') {
                this.list = data.slice(0, 4)
            } else {
                this.list = data.slice(2, 5)
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.workList{
  padding-bottom: 1rem;
  width: 100%;
  background: #000;
  overflow: hidden;
  .item{
    width: 33%;
    height: 4rem;
    float: left;
    position: relative;
    overflow: hidden;
    .box{
      position: absolute;
      bottom: 0;
      left: .1rem;
      .love{
        font-size: .3rem;
        color: #fff;
      }
      .number{
        font-size: .3rem;
        color: #fff;
      }
    }
  }
}
</style>
