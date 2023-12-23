<template>
  <div class="personal">
    <Information :user="user"/>
    <Keep-Alive><Router-View :key="$route.fullPath"/></Keep-Alive>
  </div>
</template>

<script>
import Information from './components/Information.vue'
export default {
    props: ['user'],
    components: {
        Information
    }
}
</script>

<style lang="scss" scoped>
.personal{
    color: #fff;
}
</style>
