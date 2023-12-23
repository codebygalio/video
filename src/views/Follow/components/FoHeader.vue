<template>
  <div class="fo-header">
    <div class="left">
        <span class="lefticon iconfont">&#x4444;</span>
        随拍</div>
    <div class="middle">

        <Router-link :to="{ path:'/follow',query:{page:'关注'} }"><span class="header-span">关注</span></Router-link>
        <Router-Link :to="{ path:'/follow',query:{page:'好友'} }"><span class="header-span">好友</span></Router-Link>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            list: []
        }
    }
}
</script>

<style lang="scss" scoped>
.fo-header{
    position: fixed;
    top: .5rem;
    left: 0;
    z-index: 20;
    color: #fff;
    width: 100%;
    .left{
        position: absolute;
        top: 0;
        left: 0;
        width: 25%;
        text-align: center;
        line-height: .5rem;
        font-size: .4rem;
        .lefticon{
            font-size: .5rem;
        }
    }
    .middle{
        text-align: center;
        height: .5rem;
        line-height: .5rem;
        .header-span{
            font-size: .35rem;
            margin: 0 .15rem;
        }
        a{
            color:#fff;
            text-decoration: none;
        }
    }
}
</style>
