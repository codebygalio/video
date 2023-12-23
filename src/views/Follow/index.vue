<template>
  <div class="follow">
    <FoHeader/>
    <Keep-Alive > <Router-view :key="$route.fullPath"/> </Keep-Alive>
  </div>
</template>

<script>
import FoHeader from './components/FoHeader.vue'
export default {
    name: 'Follow',
    components: {
        FoHeader
    }
}
</script>

<style lang="scss" scoped>
.follow{
  padding-top: 1rem;
  background: #000;
  height: 100%;
}
</style>
