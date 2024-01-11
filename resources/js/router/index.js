import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import about from '../components/About.vue'
import hooks from '../components/basic/Hooks.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },

    // vue hooks
    {
        path: '/hooks',
        name: 'hooks',
        component: hooks
    },
    
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;