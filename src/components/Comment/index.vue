<template>
    <div class="comment" v-show="isShow">
        <div class="comment-header">
            <span class="number-header">3.2w</span>
            <div class="iconfont icon" @click="close">&#x9999;</div>
        </div>
        <div class="comment-list">
            <div class="item">
                <div class="img-box">
                    <img class="img" src="~@/assets/img/author.jpg" alt="" />
                </div>
                 <div class="comment-content">
                <div class="name">张三</div>
                <div class="content">张三爱学习</div>
            </div>
             <div class="icon-box">
                <div class="iconfont icon-love">&#x5555;</div>
                <div class="love-number">0</div>
            </div>
            </div>

        </div>
        <div class="comment-footer">
            留下你的精彩评论
            <!-- <input type="text" /> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        isShow: {
            default: false
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
.comment {
    background: #fff;
    z-index: 22;
    width: 100%;
    height: 10rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem 0.3rem 0 0;
    .comment-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
         text-align: center;
        .number-header {
            font-size: 0.3rem;
            vertical-align: middle;
        }
        .icon {
            position: absolute;
            right: 0;
            top: 0;
            margin-right: 0.3rem;
        }
    }
    .comment-list {
        height: 8.7rem;
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        position: absolute;
        top: 0.5rem;
        left: 0;
        color: #000;
        .item {
            height: 2rem;
            width: 100%;
            .img-box{
                float: left;
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                margin: .3rem .3rem .1rem;

                .img{
                     width: .8rem;
                height: .8rem;
                border-radius: 50%;
                }
            }
            .comment-content{
                float: left;
                width: 70%;
                height: 1rem;
                margin-top: .2rem;
                .name{
                    width:100%;
                    height: .5rem;
                    line-height: .5rem;
                    font-size: .35rem;
                }
                .content{
                     width:100%;
                    height: .5rem;
                    line-height: .5rem;
                    font-size: .28rem;
                }
            }
            .icon-box{
                float: right;
                width: 10%;
                height: 1rem;
                text-align: center;
                margin-top: .2rem;
                .icon-love{
                    width: 100%;
                    height: .5rem;
                    font-size: .3rem;
                    line-height: .5rem;
                }
                .love-number{
                    width: 100%;
                    height: .5rem;
                    font-size: .3rem;
                    line-height: .5rem;
                }
            }
        }
    }
    .comment-footer{
        height: 1rem;
        width: 100%;
        line-height: 1rem;
        font-size: .45rem;
        color: #666;
        position: absolute;
        left: 0;
        bottom: 0rem;
        padding-left: .3rem;
    }
}
</style>
