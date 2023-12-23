<template>
    <ul class="list" ref="list">
        <li class="item" v-for="item in letters" :key="item" @click="click"
         @touchmove="touchMove" :ref="item">{{item}}</li>
    </ul>
</template>

<script>
export default {
    props: ['cities'],
    computed: {
        letters () {
            return this.cities.map(citie => citie.initial)
        }
    },
    data () {
        return {
            touchStatus: false,
            timer: null
        }
    },
    methods: {
        click (e) {
            const Aplhabet = e.target.innerText
            this.$emit('change', Aplhabet)
        },
        touchStart () {
            this.touchStatus = true
        },
        touchMove (e) {
            e.preventDefault()
            if (this.timer) clearTimeout(this.timer)
            this.timer = window.setTimeout(() => {
                const { clientY } = e.touches[0]
                const alphabetHeight = this.$refs.A[0].offsetHeight
                const getIndex = Math.floor((clientY - this.$refs.list.offsetTop) / alphabetHeight)

                if (getIndex >= this.letters.length || getIndex < 0) {
                    return
                }

                this.$emit('change', this.letters[getIndex])
            }, 60)
        },
        touchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="scss" scoped>
.list{
    position: fixed;
    top: 3.5rem;
    right: 0;
    width: 1rem;
    z-index: 20;
    color: #fff;
    .item{
        text-align: center;
        line-height: .4rem;
        padding-left: .5rem;
        font-size: 0.2rem;
    }
}
</style>
