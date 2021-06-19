import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

function loggedIn(){
    return localStorage.getItem('token');
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            guest: true
        },
        component: () => import(/* webpackChunkName: "register" */ '../views/Administration/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            guest: true
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Administration/Login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard/Dashboard.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn()) {
            next({
                name: 'login',
                // params: { nextUrl: to.fullPath }
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(loggedIn()){
            next({
                name: 'dashboard',
                // params: { nextUrl: to.fullPath }
                query: { redirect: to.fullPath }
            })
        }
        else{
            next()
        }
    }else {
        next()
    }
})

export default router
