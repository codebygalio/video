<template>
  <div class="share" v-show="isShow">
    <div class="header">分享到</div>
    <div class="share-box">
      <vshare :vshareConfig="vshareConfig"></vshare>
    </div>
    <div class="close" @click="close">取消</div>
  </div>
</template>

<script>
export default {
    name: 'Share',
    props: {
        isShow: { default: false }
    },
    data () {
        return {
            vshareConfig: {
                shareList: ['qzone', 'tqq', 'sqq', 'mogujie', 'diandian'],
                share: [{ bdSize: 24 }]
            }
        }
    },
    methods: {
        close () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
.share{
    width: 100%;
    color: #fff;
    z-index: 22;
    border-radius: .3rem .3rem 0 0;
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .header{
      height: .8rem;
      line-height: .8rem;
      font-size: .4rem;
      text-align: center;
      color: #000;
    }
    .share-box{
      height: 1rem;
      padding: 0  0 .5rem;
      margin: 0 auto;
    }
    .close{
      height: .5rem;
      line-height: .5rem;
      font-size: .4rem;
      position: absolute;
      bottom: .5rem;
      left: 0;
      width: 100%;
      text-align: center;
      color: #000;
    }
}
</style>
