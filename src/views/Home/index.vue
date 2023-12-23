<template>
    <div class="home">
      <Router-view />
        <Navigation />
    </div>
</template>

<script>
import Navigation from './component/Navigation'
export default {
    name: 'Home',
    components: {
        Navigation
    }
}
</script>

<style lang="scss">
.home{
    background: #000;
    width: 100%;
    height: 100%;
}
</style>
