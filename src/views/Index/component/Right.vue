<template>
    <div class="bd-right">
        <div class="icon-group">
            <div class="author-img">
                <Router-Link :to="{ path: '/user', query: { user: true } }">
                    <img src="~@/assets/img/author.jpg" alt="" />
                </Router-Link>
            </div>
            <div class="iconfont" :class="showColor" @click="click">
                &#x5555;
            </div>
            <div class="number">{{ item.loveNumber }}</div>
            <div class="right-icon iconfont" @click="openComment">&#x1111;</div>
            <div class="number">{{ item.commentNumber }}</div>
            <div class="right-icon iconfont" @click="openShare">&#x7777;</div>
            <div class="number">{{ item.shareNumber }}</div>
            <div class="last-icon">
                <img src="~@/assets/img/music.jpg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item', 'loveColor'],
    data () {
        return {
            showColor: 'right-icon'
        }
    },
    watch: {
        loveColor () {
            if (this.showColor === 'right-icon') {
                this.showColor = 'icon-red'
            }
        }
    },
    methods: {
        click () {
            this.showColor = this.showColor === 'right-icon' ? 'icon-red' : 'right-icon'
        },
        openComment () {
            this.$emit('openComment')
            console.log('tes')
        },
        openShare () {
            this.$emit('openShare')
        }
    }
}
</script>

<style lang="scss">
@keyframes rotate360 {
    100% {
        transform: rotate(360deg);
    }
}
.bd-right {
    position: absolute;
    right: 0.2rem;
    bottom: 1rem;
    z-index: 30;
    .icon-group {
        width: 1rem;
        .author-img img {
            border-radius: 50%;
        }
        .right-icon {
            text-align: center;
            border-radius: 50%;
            font-size: 0.7rem;
            color: #fff;
            line-height: 1;
            width: 1rem;
            margin-top: 0.5rem;
        }
        .icon-red {
            text-align: center;
            border-radius: 50%;
            font-size: 0.7rem;
            color: red;
            line-height: 1;
            width: 1rem;
            margin-top: 0.5rem;
        }
        .last-icon img {
            border-radius: 50%;
            margin-top: 0.5rem;
            animation: rotate360 2s linear infinite;
        }
        .number {
            font-size: 0.3rem;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
