<template>
    <div class="bd-Header">
        <div class="left iconfont">&#17476;随拍</div>
        <div class="middle">
            <Router-Link to="/"
                ><span class="header-span">推荐</span></Router-Link
            >
            <span class="line">|</span>
            <Router-link to="/city">
                <span class="header-span">北京</span>
            </Router-link>
        </div>
        <div class="right iconfont">&#x2222;</div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
.bd-Header {
    width: 100%;
    position: fixed;
    height: 0.61rem;
    line-height: 0.61rem;
    top: 0.5rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index:20;
    .left {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        width: 20%;
        text-align: center;
        font-size: 0.4rem;
    }
    .right {
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        width: 15%;
        text-align: center;
        font-size: 0.7rem;
    }
    .middle {
        color: #fff;
        text-align: center;
        a{
            color: #fff;
            text-decoration: none;
        }
        .header-span {
            font-size: 0.4rem;
        }
        .line {
            font-size: 10px;
            padding: 0 5px;
        }
    }
}
</style>
