import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';
import MonitorsView from "@/views/Monitors.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/monitors',
        name: 'Monitors without ID',
        component: MonitorsView
    },
    {
        path: '/monitors/:id',
        name: 'Monitors with ID',
        component: MonitorsView
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

export default router;