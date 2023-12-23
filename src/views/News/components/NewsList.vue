<template>
    <div class="newList">
        <div class="item" v-for="item in list" :key="item.id">
            <div class="author-img">
                <img src="@/assets/img/author.jpg" alt="" />
            </div>
            <div class="text">
                <div class="top">
                    <div class="name">{{item.name}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
        <div class="more">没有更多了</div>
    </div>
</template>

<script>
export default {
    created () {
        this.getList()
    },
    data () {
        return {
            list: []
        }
    },
    methods: {
        async getList () {
            const { data } = {
                data: [
                    {
                        id: 1,
                        name: '邱敏',
                        time: '昨天',
                        content: '常业较联'
                    },
                    {
                        id: 2,
                        name: '谭磊',
                        time: '昨天',
                        content: '派的空界时金'
                    },
                    {
                        id: 3,
                        name: '邹平',
                        time: '前年',
                        content: '过由断整场'
                    },
                    {
                        id: 4,
                        name: '武静',
                        time: '昨天',
                        content: '其飞到就则战'
                    },
                    {
                        id: 5,
                        name: '熊涛',
                        time: '昨天',
                        content: '列定位'
                    },
                    {
                        id: 6,
                        name: '乔刚',
                        time: '前年',
                        content: '写往例维酸真'
                    },
                    {
                        id: 7,
                        name: '蒋霞',
                        time: '昨天',
                        content: '面求样类百人'
                    },
                    {
                        id: 8,
                        name: '夏静',
                        time: '昨天',
                        content: '石之作长节决'
                    },
                    {
                        id: 9,
                        name: '秦秀兰',
                        time: '前年',
                        content: '重矿号合养值'
                    },
                    {
                        id: 10,
                        name: '孙超',
                        time: '前年',
                        content: '区战到取'
                    },
                    {
                        id: 11,
                        name: '阎娜',
                        time: '昨天',
                        content: '度点却必即调'
                    },
                    {
                        id: 12,
                        name: '阎伟',
                        time: '昨天',
                        content: '去老造'
                    },
                    {
                        id: 13,
                        name: '李娟',
                        time: '昨天',
                        content: '状线样'
                    },
                    {
                        id: 14,
                        name: '吴明',
                        time: '前年',
                        content: '议专非对'
                    },
                    {
                        id: 15,
                        name: '韩秀英',
                        time: '前年',
                        content: '真选何些至'
                    },
                    {
                        id: 16,
                        name: '傅军',
                        time: '昨天',
                        content: '头存约除象说'
                    },
                    {
                        id: 17,
                        name: '吴军',
                        time: '前年',
                        content: '按示属离称引'
                    },
                    {
                        id: 18,
                        name: '陆秀兰',
                        time: '前年',
                        content: '清值头族'
                    },
                    {
                        id: 19,
                        name: '许秀英',
                        time: '前年',
                        content: '拉将论深精值'
                    },
                    {
                        id: 20,
                        name: '薛霞',
                        time: '昨天',
                        content: '器论江条半'
                    }
                ]
            }
            this.list = data
        }
    }
}
</script>

<style lang="scss" scoped>
.newList {
    background:#000;
    padding-bottom: 1rem;
    .item {
        height: 1.2rem;
        padding: 0.3rem 0.2rem;
        overflow: hidden;
        font-size: 0.2rem;
        .author-img {
            margin-left: 0.2rem;
            float: left;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            .img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
        }
        .text {
            float: left;
            margin-left: 0.4rem;
            height: 1rem;
            width: 75%;
            .top {
                height: 0.5rem;
                overflow: hidden;
                .name {
                    float: left;
                    font-size: 0.4rem;
                    color: #fff;
                }
                .time {
                    float: right;
                    font-size: 0.3rem;
                    color: #aaa;
                }
            }
            .content {
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.3rem;
                color: #aaa;
            }
        }
    }
    .more {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        color: #aaa;
        text-align: center;
    }
}
</style>
