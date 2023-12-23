<template>
  <div class="changeHeader">
    <div class="iconfont left" @click="$router.go(-1)">&#x9999;</div>
    <div class="text">
      切换城市
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.changeHeader{
  color: #fff;
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  background: #000;
  z-index: 20;
  .left{
    position: absolute;
    top: 0;
    left: .3rem;
    color: #fff;
  }
  .text{
    font-size: .5rem;
    text-align: center;
    color: #fff;
  }
}

</style>
