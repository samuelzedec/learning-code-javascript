import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    {path: '/', component: () => import('./routers/Home.vue')},
    {path: '/search', component: () => import('./routers/Search.vue')},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;