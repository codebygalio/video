<template>
    <div class="follow-list">
        <div class="item" v-for="item in list" :key="item.id">
            <div class="top">
                <div class="img-box">
                    <img
                        class="author-img"
                        src="~@/assets/img/author.jpg"
                        alt=""
                    />
                </div>
                <div class="author-name">{{ item.author }}{{page}}</div>
                <div class="share">分享</div>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="videos">
                <div class="video-box">
                    <Video :videos="item" />
                </div>
            </div>
            <div class="box">
                <div class="left">3-20</div>
                <div class="right">
                    <div class="box-number iconfont">
                        &#x7777; {{ item.shareNumber }}
                    </div>
                    <div class="box-number iconfont">
                        &#x1111; {{ item.commentNumber }}
                    </div>
                    <div class="box-number iconfont">
                        &#x5555; {{ item.loveNumber }}
                    </div>
                </div>
            </div>
            <div class="comment-text">
                <input
                    class="comment-input"
                    type="text"
                    placeholder=" #留下你的评论吧"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Request from '@/utils/requests'
import Video from '@/views/Index/component/Video.vue'
export default {
    name: 'FollowList',
    components: {
        Video
    },
    created () {
        this.getList()
    },
    data () {
        return {
            list: [],
            page: this.$route.query.page
        }
    },
    methods: {
        async getList () {
            const { data } = await Request.get('/mock/videos.json')
            if (this.page === '关注') {
                this.list = data.slice(1, 3)
            }
            if (this.page === '动态') {
                this.list = data.slice(6, 10)
            }
            if (this.page === '好友') {
                this.list = data.slice(3, 6)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.follow-list {
    // position: absolute;
    // top: 1rem;
    // left: 0;
    width: 100%;
    background: #000;
    padding-bottom: 1rem;
    color: #fff;
    .item {
        padding: 0 0.5rem;
        .top {
            margin-top: 1rem;
            height: 1rem;
            overflow: hidden;
            .img-box {
                float: left;
                border-radius: 50%;
                width: 1rem;
                height: 1rem;
                .author-img {
                    border-radius: 50%;
                    width: 1rem;
                    height: 1rem;
                }
            }
            .author-name {
                float: left;
                font-size: 0.4rem;
                height: 1rem;
                line-height: 1rem;
            }
            .share {
                float: right;
                font-size: 0.3rem;
                margin-right: 0.2rem;
                height: 1rem;
                line-height: 1rem;
            }
        }
        .title {
            width: 100%;
            font-size: 0.3rem;
            margin-top: 0.3rem;
            height: 0.5rem;
            line-height: 0.5rem;
        }
        .videos {
            width: 100%;
            height: 7.5rem;
            overflow: hidden;
            .video-box {
                width: 85%;
                height: 8rem;
            }
        }
        .box {
            overflow: hidden;
            margin-top: 0.5rem;
            .left {
                float: left;
                font-size: 0.3rem;
                height: 0.5rem;
                line-height: 0.5rem;
            }
            .right {
                float: right;
                overflow: hidden;
                .box-number {
                    float: right;
                    font-size: 0.3rem;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    padding-left: 0.2rem;
                }
            }
        }
        .comment-text {
            width: 100%;
            .comment-input {
                width: 95%;
                height: 0.7rem;
                background: #333;
                outline: none;
                border: none;
            }
        }
    }
}
</style>
