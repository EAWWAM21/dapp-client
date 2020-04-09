import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/simpleStorage',
        name: 'SimpleStorage',
        // 这将为该路由生成单独一个JS块 (about.[hash].js)
        // 当路径被访问时采用懒加载,速度比import导入快 (推荐写法)
        component: function () {
            return import(/* webpackChunkName: "simpleStorage" */ '@/views/SimpleStorage.vue')
        }
    },
    {
        path: '/tutorialToken',
        name: 'TutorialToken',
        component: function () {
            return import(/* webpackChunkName: "tutorialToken" */ '@/views/TutorialToken.vue')
        }
    },
    {
        path: '/about',
        name: 'About',
        component: function () {
            return import(/* webpackChunkName: "about" */ '@/views/About.vue')
        }
    },
]

const router = new VueRouter({
    routes
})

export default router
