import {createRouter, createWebHashHistory} from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Registration
        },
        {
            path: '/registration',
            component: Registration
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router