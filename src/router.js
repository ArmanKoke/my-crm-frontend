import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "main" */ "./components/pages/Main.vue")
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "main" */ "./components/pages/Login.vue")
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "main" */ "./components/pages/Register.vue")
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import(/* webpackChunkName: "about" */ "./components/pages/About.vue")
        // },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ "./components/pages/Contact.vue")
        },
    ]
})