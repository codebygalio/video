import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home'),
        children: [
            {
                path: '',
                name: 'Index',
                component: () => import('@/views/Index'),
                children: [
                    {
                        path: '',
                        component: () =>
                            import('@/views/Index/component/VideoList')
                    },
                    {
                        path: '/city',
                        component: () => import('@/views/Index/component/City')
                    }
                ]
            },
            {
                path: 'follow',
                name: 'Follow',
                component: () => import('@/views/Follow'),
                children: [
                    {
                        path: '',
                        component: () => import('@/views/Follow/FollowList')
                    },
                    {
                        path: '/friends',
                        component: () => import('@/views/Follow/FollowList')
                    }
                ]
            },
            {
                path: 'news',
                component: () => import('@/views/News')
            },
            {
                path: 'personal',
                component: () => import('@/views/Personal'),
                children: [
                    {
                        path: '',
                        component: () => import('@/views/Personal/Worklist.vue')
                    },
                    {
                        path: '/likeList',
                        component: () => import('@/views/Personal/Worklist.vue')
                    },
                    {
                        path: '/dynamicList',
                        component: () => import('@/views/Follow/FollowList')
                    }
                ]
            }
        ]
    },
    {
        path: '/changeCity',
        component: () => import('@/views/ChangeCity')
    },
    {
        path: '/player',
        component: () => import('@/views/Player')
    },
    {
        path: '/user',
        component: () => import('@/views/User'),
        children: [
            {
                path: '/',
                component: () => import('@/views/Personal'),
                children: [
                    {
                        path: '',
                        component: () => import('@/views/Personal/Worklist.vue')
                    },
                    {
                        path: '/dynamicListUser',
                        component: () => import('@/views/Personal/Worklist.vue')
                    },
                    {
                        path: '/likeListUser',
                        component: () => import('@/views/Follow/FollowList')
                    }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
