<template>
  <div class="information">
<div class="ground-box">
    <img class="ground-box-img" src="~@/assets/img/backgroung.jpg" alt="">
</div>
<div class="middle">
    <div class="user-img-box"><img src="~@/assets/img/author.jpg" alt="" class="user-img" ></div>
    <div v-if="user" :class="changeStyle" @click="ChangeClick">
        <span v-if="changeContent === '关注'" class="iconfont">&#x6666;</span>{{changeContent}}
    </div>
    <div v-else class="change">编辑信息</div>

</div>
<div class="name-box">
    <div class="name">张三</div>
    <div class="douyinId">抖音号: 123456789</div>
</div>
<div class="text-box">
    <div class="introduce">张三热爱学习</div>
    <div class="label-box">
        <div class="label">北京</div>
        <div class="label">男</div>
    </div>
    <div class="number-box">
        <div class="box"><span class="number">123<span class="text">获赞</span></span></div>
        <div class="box"><div class="number">345<span class="text">关注</span></div></div>
        <div class="box"><div class="number">789<span class="text">粉丝</span></div></div>

    </div>
</div>

<div class="router-box" v-if="user">
    <Router-Link :to="{ path:'/user', query:{listName: 'works'} }"><div class="love">作品</div></Router-Link>
    <Router-Link :to="{ path:'/dynamicListUser', query:{page: '动态'} }"><div class="love">动态</div></Router-Link>
    <Router-Link :to="{ path:'/likeListUser', query:{listName: 'like'} }"><div class="love">喜欢</div></Router-Link>
</div>
<div class="router-box" v-else>
    <Router-Link :to="{ path:'/personal', query:{listName: 'works'} }"><div class="love">作品</div></Router-Link>
    <Router-Link :to="{ path:'/dynamicList', query:{page: '动态'} }"><div class="love">动态</div></Router-Link>
    <Router-Link :to="{ path:'/likeList', query:{listName: 'like'} }"><div class="love">喜欢</div></Router-Link>
</div>
  </div>
</template>

<script>
export default {
    props: ['user'],
    data () {
        return {
            changeStyle: 'change-user',
            changeContent: '关注'
        }
    },
    methods: {
        ChangeClick () {
            this.changeStyle = this.changeStyle === 'change-user' ? 'change' : 'change-user'
            this.changeContent = this.changeContent === '关注' ? '取消关注' : '关注'
            console.log('ChangeClick')
        }
    }
}
</script>

<style lang="scss" scoped>
.information{
    width: 100%;
    background: #000;
    font-size: .1rem;
    .ground-box{
        width: 100%;
        height: 2.5rem;
        padding: 1rem 0;
        padding: 0 .01rem;
        .ground-box-img{
            width: 100%;
            height: 2.5rem;
        }
    }
    .middle{
        position: relative;
        width: 100%;
        height: 2.5rem;
        .user-img-box{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            margin-top: -.5rem;
            margin-left: .6rem;
            border: .1rem solid #000;
            .user-img{
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
            }
        }
        .change{
            position: absolute;
            top: 1rem;
            right: 1.5rem;
            width: 40%;
            height: .8rem;
            line-height: .8rem;
            font-size: .32rem;
            text-align: center;
            background: #333;
            border-radius: .1rem;
        }
        .change-user{
             position: absolute;
            top: 1rem;
            right: 1.5rem;
            width: 40%;
            height: .8rem;
            line-height: .8rem;
            font-size: .32rem;
            text-align: center;
            background: red;
            border-radius: .1rem;
        }
    }
    .name-box{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        padding: 0 .5rem;
        .name{
            height: 1rem;
            line-height: 1rem;
            font-size: .65rem;
        }
        .douyinId{
            height: .5rem;
            line-height: .5rem;
            font-size: .3rem;

        }
    }
    .text-box{
        padding: 0 .5rem;
        margin-top: .3rem;
        border-top: .01rem solid #111;
        .number-box{
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            .box{
                height: .8rem;
                line-height: .8rem;
                float: left;
                margin-right: .2rem;
                .text{
                    color: #999;
                }
            }
        }
    .introduce{
        height: 1rem;
        line-height: 1rem;
        font-size: .38rem;
    }
    .label-box{
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            overflow: hidden;
            .label{
                width: 1rem;
                height: .4rem;
                line-height: .4rem;
                font-size: .25rem;
                background: #333;
                color:#999;
                text-align: center;
                float: left;
                border-radius: .05rem;
                margin-right: .2rem;

            }
        }

    }
    .router-box{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        .love{
            width: 33%;
            height: .8rem;
            line-height: .8rem;
            color: #999;
            float: left;
            text-align: center;
        }
    }
}
</style>
