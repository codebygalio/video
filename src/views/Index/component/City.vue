<template>
  <div class="city">
    <div class="colation">
      <div class="colation-left iconfont">
        &#x8888;自动定位: {{curCity}}
      </div>
    <Router-Link to="/changeCity">
        <div class="colation-right iconfont">
        切换&#xaaaa;
      </div>
    </Router-Link>
    </div>
      <div class="sort">
      <div class="sort-box" v-for="item in sortList" :key="item.name"><img :src="item.imgSrc" alt=""><div class="sort-name">{{item.name}}</div></div>
    </div>
    <div class="video-list">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="video">
          <Video :videos="item"/>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from './Video.vue'
import Request from '@/utils/requests'
const sortList = [
    {
        imgSrc: require('@/assets/img/delicacy.jpg'),
        name: '美食'
    },
    {
        imgSrc: require('@/assets/img/scenic.jpg'),
        name: '景点'
    },
    {
        imgSrc: require('@/assets/img/culture.jpg'),
        name: '文化'
    },
    {
        imgSrc: require('@/assets/img/fun.jpg'),
        name: '玩乐'
    },
    {
        imgSrc: require('@/assets/img/hotel.jpg'),
        name: '酒店'
    },
    {
        imgSrc: require('@/assets/img/shopping.jpg'),
        name: '购物'
    },
    {
        imgSrc: require('@/assets/img/delicacy.jpg'),
        name: '运动'
    }
]
export default {
    components: {
        Video
    },
    mounted () {
        this.getList()
    },
    data () {
        return {
            sortList,
            list: []
        }
    },
    computed: {
        curCity () {
            return this.$store.state.City.curCity
        }
    },
    methods: {
        async getList () {
            const { data } = await Request('/mock/videos.json')
            this.list = data
        }
    }
}
</script>

<style lang="scss" scoped>
.city{
  padding:.2rem;
  width: 100%;
  background: #000;
  padding-bottom: 1rem;
  .colation{
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    margin-top: 1.2rem;
    border-bottom: .01rem solid #c3c3c3;
    overflow: hidden;
    .colation-left{
      float: left;
      margin-left: .3rem;
            color: #bbb;
    }
    .colation-right{
      float: right;
      margin-right: .3rem;
      color: #bbb;
    }
  }
  .sort{
    width: 100%;
    height: 2rem;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    &::-webkit-scrollbar{
      display: none;
    }
    .sort-box{
      width: 1.5rem;
      height: 2rem;
      color: #fff;
      text-align: center;
      img{
        width: 1rem;
        height: 1rem;
        border-radius: .1rem;
        margin: .2rem .25rem;
      }
      .sort-name{
        width: 1rem;
        height: .3rem;
        line-height: .3rem;
        margin: 0 .25rem;
        font-size: .3rem;
        margin-bottom: 100rem;
      }
    }
  }
  .video-list{
    width: 100%;
    overflow: hidden;
    .item{
      width: 50%;
      float: left;
      margin: 0 auto;
      .video{
        width: 90%;
        margin-left: 5%;
      }
      .title{
        color:#fff;
        line-height: .5rem;
        font-size: .3rem;
        margin-top: .2rem;
        margin-left:.4rem;
        margin-right: .2rem;
      }
    }
  }
}
</style>
