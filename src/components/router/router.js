import {createRouter, createWebHashHistory} from 'vue-router'
import Registration from '../Registration.vue'
import Login from '../Login.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Registration',
            component: Registration
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

export default router