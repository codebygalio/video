<template>
  <div class="news">
    <NewsHeader/>
    <NewsContent/>
    <NewsList/>
  </div>
</template>

<script>
import NewsHeader from './components/NewsHeader'
import NewsContent from './components/NewsContent.vue'
import NewsList from './components/NewsList.vue'
export default {
    components: {
        NewsHeader,
        NewsContent,
        NewsList
    }
}
</script>

<style>
.news{
  padding-bottom: 1rem;
    height: 100%;
    color: #fff;
}
</style>
