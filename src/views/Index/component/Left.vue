<template>
  <div class="bd-left">
    <div class="author">@{{item.author}}</div>
    <div class="title">#{{item.title}}#</div>
    <div class="box"><div class="music">{{item.description}}</div></div>
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>
@keyframes music {
    0%{
        transform: translateX(80%);
    }
    100%{
        transform: translateX(-100%);
    }
}
.bd-left{
    position: absolute;
    height: 3rem;
    bottom: 1rem;
    left:.2rem;
    color:#fff;
    z-index:30;
    .author{
        height: .7rem;
        line-height: .7rem;
        font-size:.3rem;
    }
    .title{
        height: .7rem;
        line-height: .7rem;
        font-size:.3rem;
    }
    .box{
        width: 2rem;
        overflow: hidden;
        .music{
        height: .7rem;
        line-height: .7rem;
        font-size:.3rem;
        animation: 5s music linear infinite;
    }
    }
}
</style>
