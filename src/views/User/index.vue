<template>
  <div class="user">
    <Router-Link to="/">
         <div class="iconfont icon" >
        &#xbbbb;
    </div>
        </Router-Link>

            <Router-View :user="user"/>

  </div>
</template>

<script>
export default {
    data () {
        return {
            user: this.$route.query.user
        }
    }
}
</script>

<style lang="scss" scoped>
.user{
    background: #000;
    height: 100%;
    color: #fff;
    padding: .2rem;
    .icon{
        color:#fff;
    }
}

</style>
