<template>
  <div class="changeCity">
    <ChHeader />
    <CityList :letter="letter" :cities="cities" />
    <CityAlphabet @change="change" :cities="cities"/>
  </div>
</template>

<script>
import ChHeader from './components/ChHeader'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/CityAlphabet.vue'
import Request from '@/utils/requests'
export default {
    components: {
        ChHeader,
        CityList,
        CityAlphabet
    },
    created () {
        this.getList()
    },
    data () {
        return {
            letter: null,
            cities: []
        }
    },
    methods: {
        change (letter) {
            this.letter = letter
        },
        async getList () {
            const data = await Request.get('/mock/city.json')
            this.cities = data.city
            // console.log('data= ', data.city)
        }

    }
}
</script>

<style lang="scss">
.changeCity{
  background: #000;
    height: 100%;
}
</style>
