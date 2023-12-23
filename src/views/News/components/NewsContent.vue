<template>
<div class="newContent">
<div class="box">
    <div class="img">
        <img src="~@/assets/img/fans.jpg" alt=""  class="box-img">
    </div>
    <div class="box-text">粉丝</div>
</div>
<div class="box">
    <div class="img">
        <img src="~@/assets/img/love.jpg" alt=""  class="box-img">
    </div>
    <div class="box-text">点赞</div>
</div>
<div class="box">
    <div class="img">
        <img src="~@/assets/img/comment.jpg" alt=""  class="box-img">
    </div>
    <div class="box-text">评论和@</div>
</div>
<div class="box">
    <div class="img">
        <img src="~@/assets/img/dong.jpg" alt=""  class="box-img">
    </div>
    <div class="box-text">随拍互动</div>
</div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.newContent{
    height: 2.5rem;
    padding: 0 .2rem;
    border-bottom: .1rem solid #444;
    font-size: .1rem;
    .box{
        width: 25%;
        height: 2rem;
        float: left;
        margin: 0 auto;
        text-align: center;
        .img{
            text-align: center;
                 .box-img{
        width: 1rem;
        height: 1rem;
        border-radius: .2rem;
        margin-top: .2rem;
}
.box-text{
    font-size: .3rem;
    text-align: center;
    color: #eee;
    margin-top: .2rem;
}
        }

    }

}
</style>
