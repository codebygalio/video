<template>
  <div class="bd-left">
    <div class="author">@{{item.author}}</div>
    <div class="title">#{{item.title}}#</div>
    <div class="music">{{item.description}}</div>
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>
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
    .music{
        height: .7rem;
        line-height: .7rem;
        font-size:.3rem;
    }
}
</style>
