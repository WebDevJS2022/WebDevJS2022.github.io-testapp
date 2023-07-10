import { createRouter, createWebHashHistory } from 'vue-router';
import UserPage from '@/pages/UserPage.vue';
import HomePage from '@/pages/HomePage.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {name: 'home', component: HomePage, path: '/', alias: '/'},
        {name: 'user', component: UserPage, path: '/user'},
    ]
});