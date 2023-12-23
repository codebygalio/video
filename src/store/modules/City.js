import { saveCurCity, getCurCity } from '@/utils/index'
export default {
    namespaced: true,
    state: {
        curCity: getCurCity() || '北京'
    },
    mutations: {
        changeCurCity (state, newCity) {
            state.curCity = newCity
            saveCurCity(newCity)
        }
    }
}
