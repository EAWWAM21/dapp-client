import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuex from 'vuex'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/assets/iconfont/iconfont.js'

import drizzleVuePlugin from '@drizzle/vue-plugin'
import drizzleOptions from './drizzleOptions'


Vue.use(ViewUI)
Vue.use(Vuex)
// 注册 drizzleVuePlugin
Vue.use(drizzleVuePlugin, {store, drizzleOptions})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
