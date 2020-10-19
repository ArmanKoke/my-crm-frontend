import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// Router.beforeEach((to, from, next) => { //todo implement auth check on every page change
//     const loggedIn = localStorage.getItem('user');
//     console.log(loggedIn)
//
//     if (to.matched.some(record => record.meta.auth) && !loggedIn) {
//         next('login');
//         return
//     }
//     next()
// });

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "main" */ "./views/Main.vue")
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "main" */ "./views/auth/Login.vue")
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "main" */ "./views/users/Profile.vue")
        },
        {
            path: '/deals',
            name: 'deals',
            component: () => import(/* webpackChunkName: "main" */ "./views/deals/Index.vue")
        },
        {
            path: '/deals/create',
            name: 'deals_create',
            component: () => import(/* webpackChunkName: "main" */ "./views/deals/Create.vue")
        },
        {
            path: '/deals/edit',
            name: 'deals_edit',
            props: true,
            component: () => import(/* webpackChunkName: "main" */ "./views/deals/Update.vue")
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "main" */ "./views/auth/Register.vue")
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
        },
    ]
})