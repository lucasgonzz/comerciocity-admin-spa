import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/common-vue/views/Login')
    },
    {
        path: '/recuperar-clave/:view?/:sub_view?',
        name: 'passwordReset', 
        component: () => import('@/common-vue/views/PasswordReset')
    },
    {
        path: '/configuracion/:view?/:sub_view?',
        name: 'configuration',
        component: () => import('@/common-vue/views/Configuration')
    },
    
    {
        path: '/comercios',
        name: 'commerce',
        component: () => import('@/views/Commerce')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
