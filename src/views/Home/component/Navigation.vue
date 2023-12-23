<template>
    <div class="bd-navigation">
        <Router-Link to="/"> <div class="nav-box">首页</div> </Router-Link>
        <Router-Link to="follow?page=关注"><div class="nav-box">关注</div></Router-Link>
        <div class="nav-box iconfont add-box">&#x6666;</div>
        <Router-Link to="/news"> <div class="nav-box">消息</div></Router-Link>
        <Router-Link to="/personal"><div class="nav-box">我</div></Router-Link>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped lang="scss">
.bd-navigation {
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    // background: #000;
    z-index: 20;
    .nav-box {
        float: left;
        width: 20%;
        color: #fff;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.4rem;
    }
    .add-box{
        width: 16%;
        height: 0.8rem;
        background: #fff;
        color: #000;
        line-height: .8rem;
        border-radius: .1rem;
    }
}
</style>
