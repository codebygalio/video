<template>
  <div class="city">
    <div class="colation">
      <div class="colation-left iconfont">
        &#x8888;自动定位: 北京
      </div>
      <div class="colation-right iconfont">
        切换&#xaaaa;
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.city{
  padding:.2rem;
  width: 100%;
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
}
</style>
