<template>
    <div class="index">
        <Header />
        <Router-view />
    </div>
</template>

<script>
import Header from './component/Header.vue'
export default {
    name: 'Index',
    components: {
        Header
    }
}
</script>

<style lang="scss">
.index {
    background-color: #000;
    height: 100%;
}
</style>
