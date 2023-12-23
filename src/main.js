import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import vshare from 'vshare'
import '@/assets/style/styles.scss'

Vue.config.productionTip = false

Vue.use(vshare)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
